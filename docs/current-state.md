# Current state — agent handoff

> Read this at the start of every session. Update it at the end before handing off.
> See [`AGENTS.md`](../AGENTS.md) for the full handoff protocol.

## Last updated

`2026-06-26T22:08:22Z`

## Last agent action

Closed out `app-shell` task 6.4. Opened PR #1, discovered the Vercel preview
404'd on every app route, root-caused it to an **unset Framework Preset** on the
Vercel project, set it to **Next.js**, redeployed, and confirmed the homepage
renders (HTTP 200). Recorded the TTFB baseline. `app-shell` is now **21/21**.

## Changes made

- `openspec/changes/app-shell/tasks.md` — marked task 6.4 complete with evidence
- `docs/current-state.md` — this handoff
- **Vercel project setting (external, via API):** `framework` changed from
  `null` → `nextjs` for project `2026-fwdays-agentic-greenfield-task-taras-shchadylo`
- No production application code changed (the code was always correct)

## Requirement progress

`app-shell` is complete (21/21 tasks):

- FR-SHELL-01, FR-SHELL-02, FR-SHELL-03
- BC-BRAND-02, NFR-I18N-01
- Cross-cutting verified locally: NFR-A11Y-01, TC-STACK-01, BC-PRIVACY-01/02/03
- **TC-DEPLOY-01 — verified.** PR #1 produces a Vercel Preview that builds and
  renders the homepage (HTTP 200, Ukrainian content, `<title>Надворі — Weather
  Explorer</title>`).
- **NFR-PERF-01 — baseline recorded** (target ≤ 300 ms p95). Homepage is dynamic
  SSR (`ƒ /`, `x-vercel-cache: MISS` every request). TTFB: cold start ~600 ms;
  warm ~250–290 ms. Warm/steady-state meets the target; cold start exceeds it.
- **NFR-DX-01 — still NOT satisfied** (`package.json` has no `test` script).

## Key links

- PR: https://github.com/shchadyloTaras/2026-fwdays-agentic-greenfield-task_taras-shchadylo/pull/1
  (base `main` ← `feat/app-shell`)
- Working preview deployment:
  https://2026-fwdays-agentic-greenfield-task-taras-shchadylo-45503eexv.vercel.app
- Vercel project: `2026-fwdays-agentic-greenfield-task-taras-shchadylo`
  (team `Taras' projects`)

## Open items

- **`app-shell` is ready for archive + sync** (`/opsx:archive` + `/opsx:sync`).
  Not done yet — awaiting explicit go-ahead.
- Add a `test` script + Vitest setup (or explicitly defer/amend NFR-DX-01);
  `npm test` currently fails with "Missing script: test".
- NFR-PERF-01 cold-start optimization: consider making the empty-state homepage
  static / ISR so cold TTFB also lands under 300 ms (separate task, not a blocker).
- Then start `top-clock` or `city-search` (parallel OK).
- Resolve PRD gap: product brief references FR-SEARCH-06 ("Use my location") but
  `requirements.md` does not — amend PRD or capture in `city-search` spec.

## Known issues / blockers

- **Vercel deploy root cause (now fixed):** the project's Framework Preset was
  unset (`framework: null`), so Vercel built the app but produced no functions
  or routes — it served only static `public/` files and 404'd every app route.
  Setting Framework Preset → Next.js and redeploying fixed it. Any deployment
  created **before** the fix (e.g. `…-jhsen2yot`, `…-hdh9jui6z`) still 404s
  (immutable old builds); only post-fix deployments render.
- **Git author identity:** commits are authored by `eleken-git`
  (`marketing@eleken.co`) while the repo/Vercel owner is `shchadyloTaras`
  (`tarasdidg@gmail.com`). Harmless, but causes Vercel's "author not a team
  member" notice. To re-attribute future commits, set local `git config
  user.name`/`user.email` to the owner identity.
- `npm test` fails: no `test` script (blocks NFR-DX-01's
  `lint && tsc && test && build` gate).
- Local `gh` CLI not installed; the only keychain GitHub token (`eleken-git`)
  is read-only on this repo, so the PR had to be opened in the browser by the
  owner.
