## Context

Phase 0a (`design-system`) is partially landed: tokens, fonts, and theme CSS
variables exist under `app/design-system/` and `app/globals.css`. The current
`app/page.tsx` is a **design reference demo** — mock forecast cards, inline
Ukrainian strings, and a joke footer — not the product shell described in
FR-SHELL-*.

`app-shell` replaces that demo with the real frame: top bar, responsive main
grid, empty-state hero, i18n modules, theme indicator, and attribution footer.
Downstream capabilities (`city-search`, `forecast`, `map`, `top-clock`) will
mount into reserved slots without reshaping the page.

Constraints: Next.js 16 App Router, React 19, Tailwind 4, no runtime i18n
library, no cookies/analytics/geolocation on load, Ukrainian-first calm tone
(`design.md`).

## Goals / Non-Goals

**Goals:**

- Deliver FR-SHELL-01/02/03, BC-BRAND-02, and NFR-I18N-01 via composable
  React components under `components/shell/`.
- Show empty-state hero with centered search placeholder on `/` when no location
  query params are present.
- Centralise shell copy in `lib/i18n/uk.ts` + `lib/i18n/en.ts` with a tiny
  typed helper.
- Provide responsive 1 / 2 / 3 column main grid at 768 px and 1280 px.
- Footer links to Open-Meteo and OpenStreetMap.
- Accessible theme toggle (`ThemeIndicator`) using existing `data-theme` pattern.

**Non-Goals:**

- Functional city search, geocoding, forecast fetch, map tiles, or live clock
  (separate capabilities).
- Locale switcher UI (English module exists for structure only).
- Animated background, comfort scoring UI, or weekend compare.
- Playwright E2E; verify with build + manual/`chrome-devtools` MCP as needed.

## Decisions

### 1. Component architecture

| Component | Role | Server / Client |
| --- | --- | --- |
| `AppShell` | Page frame: header, `<main>` grid, footer | Server Component |
| `ShellHeader` | Logo, clock slot, theme indicator | Server wrapper; children client where needed |
| `ThemeIndicator` | Toggle `data-theme` on `<html>` | Client (`"use client"`) |
| `EmptyHero` | Hero copy + search placeholder | Server Component |
| `SearchPlaceholder` | Disabled/read-only input styled per design system | Server (or thin client stub) |
| `ShellFooter` | Attribution links via i18n strings | Server Component |
| `MainGrid` | Responsive column scaffold | Server Component |

**Rationale:** Keep the page mostly RSC for TTFB (NFR-PERF-01). Only theme
toggle needs client JS.

**Alternative considered:** Single `"use client"` page — rejected; increases
client bundle for no benefit.

### 2. i18n approach

```text
lib/i18n/
  uk.ts    — primary strings (exported const object)
  en.ts    — parallel keys, English labels
  index.ts — `t(key, locale?: 'uk' | 'en')` typed helper
```

Keys grouped by domain: `shell.hero.*`, `shell.footer.*`, `shell.theme.*`.
Default locale `'uk'` matches `<html lang="uk">`. No `next-intl` or similar
(NFR-I18N-01).

**Alternative considered:** Co-locate strings in components — rejected; violates
NFR-I18N-01 and blocks consistent EN fallback.

### 3. Responsive grid

Use Tailwind breakpoints aligned to PRD:

```tsx
<main className="mx-auto grid w-full max-w-[1240px] flex-1 grid-cols-1 gap-6 px-6 py-10 md:grid-cols-2 xl:grid-cols-3">
```

- `<768`: single column — hero spans full width.
- `md:` (≥768): two columns — hero + empty secondary column.
- `xl:` (≥1280): three columns — search rail / primary / map slot.

Map Tailwind `md`/`xl` to the PRD's 768/1280 intent (Tailwind defaults: md
768, xl 1280).

### 4. Empty state detection

Treat "no active location" when **all** of `lat`, `lon`, `name` are absent from
`searchParams` (Next.js 16 `page.tsx` props). Render `EmptyHero`; hide forecast/
map regions.

Search placeholder: visually matches future `Input` (border, radius, focus ring)
but `disabled` with `aria-disabled="true"` and helper text explaining search
ships next — satisfies spec "inert until city-search".

### 5. Theme indicator

Extract existing toggle logic from `page.tsx` into `ThemeIndicator`:

- Initial state: read `prefers-color-scheme` once on mount **or** default light
  (prefer light default to match design reference; optional enhancement: respect
  system preference without persisting cookies — use `matchMedia` in
  `useEffect`, no localStorage to honour BC-PRIVACY-03).
- On click: flip `document.documentElement.dataset.theme` between `light` /
  `dark`.
- Label from `t('shell.theme.toggleToDark')` / `toggleToLight`.
- `aria-pressed` reflects dark mode; visible focus ring from design tokens.

### 6. Footer attribution

Replace joke line with structured credits:

- Open-Meteo → `https://open-meteo.com/`
- OpenStreetMap → `https://www.openstreetmap.org/copyright`

Copy in Ukrainian from i18n; links use `target="_blank"` +
`rel="noopener noreferrer"`.

### 7. Remove mock demo content

Delete `FORECAST`, `ComfortScore`, and `DayCard` from `app/page.tsx`. Comfort/
day-card patterns remain documented in `design.md` and the source design bundle
for `forecast` to port later.

**Alternative considered:** Keep demo behind env flag — rejected; conflicts with
empty-state requirement and BC-DEMO-01 clarity.

### 8. File layout after change

```text
app/
  layout.tsx          — unchanged except optional suppressHydrationWarning on <html>
  page.tsx            — composes AppShell + EmptyHero; reads searchParams
components/shell/
  app-shell.tsx
  shell-header.tsx
  shell-footer.tsx
  theme-indicator.tsx
  empty-hero.tsx
  search-placeholder.tsx
  main-grid.tsx
lib/i18n/
  uk.ts
  en.ts
  index.ts
```

### 9. Deploy (TC-DEPLOY-01)

No code change required if Vercel Git integration already builds `next build`.
Document in tasks: confirm preview URL on PR. Measure TTFB after deploy
(NFR-PERF-01) — baseline with empty hero only.

## Risks / Trade-offs

| Risk | Mitigation |
| --- | --- |
| Hydration mismatch on theme | Apply theme in `useEffect` only; optional `suppressHydrationWarning` on `<html>` |
| Search placeholder confuses users | `aria-disabled`, muted styling, short Ukrainian helper under input |
| Removing demo loses visual QA reference | Design bundle under `docs/Weather Explorer Design System/` remains canonical |
| Breakpoint naming drift (md vs 768) | Document mapping in component comment; use `xl` for 1280 |

## Migration Plan

1. Add `lib/i18n/*` and shell components without deleting demo.
2. Switch `page.tsx` to new shell; remove mock forecast in same PR.
3. Run `npm run lint && npx tsc --noEmit && npm run build`.
4. Manual check: mobile/tablet/desktop widths, theme toggle, footer links, keyboard focus.
5. Open PR → verify Vercel preview.

Rollback: revert single PR; no data migration.

## Open Questions

- **System theme on first paint:** default light vs `prefers-color-scheme` — recommend light default for workshop consistency; can enhance later without cookies.
- **Clock slot visibility:** show empty flex gap vs hide until `top-clock` — recommend visible reserved width to prevent layout shift when clock lands.
