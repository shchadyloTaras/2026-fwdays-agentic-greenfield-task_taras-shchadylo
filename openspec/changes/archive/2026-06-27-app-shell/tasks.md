## 1. i18n foundation (NFR-I18N-01)

- [x] 1.1 Create `lib/i18n/uk.ts` with typed keys for hero, footer, theme, and search placeholder copy (Ukrainian, calm tone, no exclamation marks)
- [x] 1.2 Create `lib/i18n/en.ts` with matching keys for English fallback labels
- [x] 1.3 Create `lib/i18n/index.ts` with a typed `t(key, locale?)` helper defaulting to `'uk'`

## 2. Shell components (FR-SHELL-01, FR-SHELL-02)

- [x] 2.1 Create `components/shell/theme-indicator.tsx` — client toggle for `data-theme` on `<html>` with accessible name, `aria-pressed`, and focus ring
- [x] 2.2 Create `components/shell/shell-header.tsx` — wordmark, reserved clock slot, and `ThemeIndicator`
- [x] 2.3 Create `components/shell/shell-footer.tsx` — Open-Meteo and OpenStreetMap attribution links from i18n (BC-BRAND-02)
- [x] 2.4 Create `components/shell/main-grid.tsx` — responsive 1 / 2 / 3 column grid at default md (768) and xl (1280) breakpoints
- [x] 2.5 Create `components/shell/app-shell.tsx` — composes header, main grid slot, and footer using design-system semantic tokens

## 3. Empty state (FR-SHELL-03)

- [x] 3.1 Create `components/shell/search-placeholder.tsx` — styled disabled input with helper text (inert until `city-search`)
- [x] 3.2 Create `components/shell/empty-hero.tsx` — centered hero headline, supporting copy, and `SearchPlaceholder`
- [x] 3.3 Refactor `app/page.tsx` — read `searchParams`; when `lat`, `lon`, and `name` are all absent, render `EmptyHero` inside `AppShell`
- [x] 3.4 Remove mock forecast demo (`FORECAST`, `ComfortScore`, `DayCard`) from `app/page.tsx`

## 4. Layout slots and privacy defaults

- [x] 4.1 Render empty placeholder regions in `MainGrid` for forecast and map columns (no mock data)
- [x] 4.2 Verify no geolocation, cookie writes, or analytics scripts on homepage load (BC-PRIVACY-01/02/03)

## 5. Root layout polish

- [x] 5.1 Add `suppressHydrationWarning` to `<html>` in `app/layout.tsx` if theme client toggle causes hydration warnings
- [x] 5.2 Confirm `<html lang="uk">` and body flex column layout still wrap the shell correctly

## 6. Verification and deploy (NFR-DX-01, TC-DEPLOY-01)

- [x] 6.1 Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` — all pass
- [x] 6.2 Manual check at mobile (<768), tablet (768–1279), and desktop (≥1280): grid columns, hero centering, theme toggle, footer links
- [x] 6.3 Keyboard check: theme indicator focus ring and accessible name (NFR-A11Y-01)
- [x] 6.4 Confirm Vercel preview builds on PR (TC-DEPLOY-01); note TTFB baseline for NFR-PERF-01 — PR #1; preview renders 200 (homepage); TTFB baseline ~250–290 ms warm (cold start ~600 ms). Root cause fixed: Vercel Framework Preset was unset → set to Next.js.

## 7. Handoff

- [x] 7.1 Update `docs/current-state.md` with shipped requirement IDs and open items for `top-clock` / `city-search`
