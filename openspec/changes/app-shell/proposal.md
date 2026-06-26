## Why

The design system (tokens, fonts, themes) is wired, but the homepage is still a
static forecast demo. The product needs a real **application shell** — a
responsive page frame, Ukrainian-first string plumbing, empty-state hero, and
footer credits — before search, forecast, and map capabilities can plug in.
This is Phase 0b in the capability map and unblocks every downstream feature.

## What Changes

- Replace the mock forecast demo on `/` with the **empty-state hero** (FR-SHELL-03):
  Ukrainian copy + a centered search placeholder slot (non-functional until
  `city-search` lands).
- Extract a reusable **AppShell** layout: top bar (logo + theme indicator),
  responsive main grid (FR-SHELL-01, FR-SHELL-02), and footer (BC-BRAND-02).
- Introduce **`lib/i18n/uk.ts` and `lib/i18n/en.ts`** with a tiny typed lookup
  helper — no runtime i18n library (NFR-I18N-01).
- Move theme toggle into a dedicated **ThemeIndicator** client component with
  accessible name and `data-theme` persistence on `<html>`.
- Footer credits **Open-Meteo** and **OpenStreetMap** with hyperlinks
  (BC-BRAND-02); remove the placeholder joke line.
- Reserve layout slots for later capabilities: header clock rail (`top-clock`),
  search input, forecast column, map column — rendered as inert placeholders or
  empty regions, not mock data.
- Ensure Vercel preview deploy wiring is documented/verified (TC-DEPLOY-01).

## Capabilities

### New Capabilities

- `app-shell`: Responsive single-page frame, empty-state hero, i18n string
  modules, theme indicator, footer attribution, and placeholder slots for
  search/forecast/map.

### Modified Capabilities

<!-- No existing main specs yet; design-system requirements are unchanged. -->

## Impact

- **Code**: `app/page.tsx` (major refactor), new `components/shell/*`,
  `lib/i18n/*`, possible `app/layout.tsx` tweaks for theme init.
- **Removals**: Hard-coded Ukrainian strings and mock `FORECAST` data from
  `page.tsx` (demo content moves out; comfort/day-card demo can be deleted or
  relocated to a design reference if still needed).
- **Dependencies**: Builds on existing design tokens in `app/design-system/` and
  `design.md`; no new npm packages.
- **Requirements touched**: FR-SHELL-01/02/03, BC-BRAND-02, NFR-I18N-01,
  NFR-A11Y-01, NFR-PERF-01, TC-STACK-01, TC-DEPLOY-01.
