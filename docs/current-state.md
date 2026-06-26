# Current state — agent handoff

> Read this at the start of every session. Update it at the end before handing off.
> See [`AGENTS.md`](../AGENTS.md) for the full handoff protocol.

## Last updated

`2026-06-26T20:45:12Z`

## Last agent action

Re-verified `app-shell` is preview-ready (`npm run lint` clean; `npm run build`
compiles, typechecks, and generates routes). Prepared the PR: committed all
app-shell work on branch `feat/app-shell` and pushed to origin (left `main`
untouched). Remaining: open the PR and confirm the Vercel preview build.

## Changes made

- `lib/i18n/uk.ts`, `lib/i18n/en.ts`, `lib/i18n/index.ts` — typed shell copy
  and Ukrainian-first default lookup
- `components/shell/*` — app shell, header, footer, theme indicator, responsive
  grid placeholders, empty hero, search placeholder
- `app/page.tsx` — replaced client-side mock forecast demo with a Server
  Component homepage that awaits `searchParams`
- `app/layout.tsx` — kept `lang="uk"` and added theme hydration guard
- `eslint.config.mjs` — ignored vendored design-system reference bundle so
  `npm run lint` gates app code
- `openspec/changes/app-shell/tasks.md` — marked all local implementation and
  verification tasks complete; Vercel Preview task remains pending
- `docs/current-state.md` — updated handoff (this file)

## Requirement progress

`app-shell` implemented locally:

- FR-SHELL-01, FR-SHELL-02, FR-SHELL-03
- BC-BRAND-02, NFR-I18N-01
- Cross-cutting verified locally: NFR-A11Y-01, NFR-PERF-01 baseline via build,
  TC-STACK-01, BC-PRIVACY-01/02/03
- TC-DEPLOY-01 remains pending until a PR produces a Vercel Preview URL

## Open items

- Open the PR for `feat/app-shell` (pushed to origin) and confirm the Vercel
  Preview builds; note TTFB baseline (remaining `app-shell` task 6.4)
- After preview confirmation: archive + sync `app-shell`
- Then start `top-clock` or `city-search` (parallel OK)
- Resolve PRD gap: product brief references FR-SEARCH-06 ("Use my location")
  but `requirements.md` does not — amend PRD or capture in `city-search` spec

## Known issues / blockers

Dev server verification used `next start` on localhost because `next dev`
reported watcher/file-descriptor pressure (`EMFILE`) and returned a dev-only
404. Production build and production server rendered `/` correctly.
