# Надворі — Design System

Надворі ("outdoors") / *Weather Explorer* is a calm, Ukrainian-first weather
app built around a single honest signal — the **comfort score** (0–100). This
file is the canonical `DESIGN.md` decision (`BC-BRAND-01`) and the contract for
how the app is styled. Build with the semantic tokens below; never reach for
raw colour ramps or hard-coded values.

The authored source of truth lives in
[`docs/Weather Explorer Design System/`](docs/Weather%20Explorer%20Design%20System/)
(guidelines, component specs, full app reference, `readme.md`). This file
covers how that system is **wired into this Next.js app**.

## How it's integrated

| Concern | Where |
| --- | --- |
| Design tokens (CSS vars) | [`app/design-system/tokens/`](app/design-system/tokens/) — vendored from the source bundle |
| Token entry point | [`app/design-system/tokens.css`](app/design-system/tokens.css) — `@import`s every token file |
| Tailwind v4 bridge | [`app/globals.css`](app/globals.css) — `@theme inline` maps tokens → utilities |
| Fonts | [`app/layout.tsx`](app/layout.tsx) — `next/font/google`, self-hosted |
| Brand assets | [`public/brand/`](public/brand/) — `logo-mark.svg`, `logo-wordmark.svg` |
| Reference demo | [`app/page.tsx`](app/page.tsx) |

`fonts.css` from the source bundle is intentionally **not** vendored — fonts are
loaded through `next/font` (self-hosted, no layout shift, no request to Google
at runtime) instead of the bundle's Google-Fonts `@import`.

## Consuming the system

**Prefer Tailwind utilities** — `globals.css` exposes the semantic tokens as
Tailwind v4 theme values via `@theme inline`, so the utilities emit `var()`
references and follow the active theme automatically:

- Colour: `bg-surface`, `bg-bg`, `text-text`, `text-text-secondary`,
  `text-brand`, `border-border`, `bg-accent-soft`, …
- Comfort: `bg-comfort-good-solid`, `text-comfort-fair-fg`,
  `bg-comfort-poor-bg`, …
- Radius: `rounded-md` (12px), `rounded-lg` (16px), `rounded-xl` (22px),
  `rounded-pill`
- Elevation: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`
- Type: `font-sans` (Onest), `font-mono` (JetBrains Mono)

**Raw CSS variables** are still available for anything a utility can't express
(e.g. a dynamic comfort tone): `style={{ background: \`var(--comfort-${tone}-solid)\` }}`.
The full token surface — `--brand`, `--text`, `--surface`, `--space-*`,
`--dur-*`, `--ease-out`, sky-mood gradients, etc. — is defined in
`app/design-system/tokens/`.

## Foundations (the short version)

- **One number, then the detail.** Lead with the comfort score in its honest
  semantic colour, then the hi/lo, precipitation, wind.
- **Palette.** Sky-blue primary (`--brand`), warm-amber sun accent
  (`--accent`), cool-slate neutrals. A nod to Ukraine in sky-blue + amber —
  never the literal flag.
- **Comfort semantics — muted, not neon.** good ≥70 (`#3f9d6b`), fair 40–69
  (`#cf9230`), poor <40 (`#c75d4f`). Each has a soft bg, a fg, and a solid.
- **Type.** Onest for all text/display (full Cyrillic); JetBrains Mono for
  **every numeric** (temperatures, clock, lat/lon) with tabular figures so
  columns line up. Scale 11→64px; the hero comfort number is the only thing at
  the top of the scale.
- **Themes.** Light + dark via `data-theme="dark"` on `<html>`. The toggle in
  `page.tsx` flips `document.documentElement.dataset.theme`. WCAG AA both ways.
- **Corners.** Inputs/buttons 12px, cards 16px, panels 22px; chips & comfort
  badges fully pill. Soft, never sharp, never blob.
- **Motion.** Calm. `--ease-out` for entrances, 140ms for hover/press. Nothing
  bounces. All decorative motion collapses to 0 under `prefers-reduced-motion`.
- **Focus.** A 3px soft sky ring (`--focus-ring`), always visible, never
  removed (`NFR-A11Y-01`). `base.css` wires this globally.

## Voice & content rules

- **Ukrainian-first.** English only as small system labels (e.g. the
  "WEATHER EXPLORER" lockup subtitle).
- **Calm and practical. No exclamation marks anywhere** (`BC-BRAND-01`).
- Comfort rationale: one Ukrainian sentence, ≤80 chars, no emoji
  (`FR-COMFORT-03`).
- Sentence case for readable text; UPPERCASE only for tiny mono micro-labels
  with wide tracking ("ВИХІДНІ").
- **Emoji:** effectively none. The one exception is a country flag in a city
  search result (`FR-SEARCH-02`).

## Icons

Lucide line icons at **1.75 stroke**, 24px grid. Weather conditions resolve
through a single `ConditionIcon` mapping (`clear→sun`/`moon`,
`rain→cloud-rain`, …). Not yet added to this app — pull from the source bundle's
`components/weather/ConditionIcon` when the forecast UI is built.

## Components

The source bundle ships component specs (core: Button, Input, Card, Badge, Chip,
Tabs, Switch, IconButton, Icon; weather: ComfortBadge, DayCard, ConditionIcon,
Clock, CityResult) and a full app recreation under
`docs/Weather Explorer Design System/ui_kits/weather-explorer/`. They are
authored as vanilla JSX against a global `window.WeatherExplorerDesignSystem_019e02`
namespace — treat them as the **visual + behavioural reference**, and port each
into a typed React component in this app as the feature that needs it is built
(see `app/page.tsx` for the comfort score / day card already ported).

## Re-syncing

When the source bundle in `docs/Weather Explorer Design System/` is updated,
re-copy `tokens/*.css` (except `fonts.css`) into `app/design-system/tokens/`,
re-apply the `--font-sans` / `--font-mono` next/font fallback edit in
`typography.css`, and add any new semantic tokens to the `@theme inline` block
in `globals.css`.
