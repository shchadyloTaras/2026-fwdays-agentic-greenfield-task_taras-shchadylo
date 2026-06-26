# Project docs — read before you build

Start every task by reading the docs in [`docs/`](docs/). They define what the
product is, what it must do, and what was done last.

| Document | Purpose |
| -------- | ------- |
| [`docs/requirements.md`](docs/requirements.md) | **Source of truth** — numbered requirements (`FR-*`, `NFR-*`, `TC-*`, `BC-*`) with status. Cite these IDs in specs, tests, and PRs. |
| [`docs/product-brief.md`](docs/product-brief.md) | **Business narrative** — who the product is for, the pain it solves, and UX intent. Use for context; defer to requirements when they differ. |
| [`docs/current-state.md`](docs/current-state.md) | **Session handoff** — what the last agent did, when, and what is left. Read at the start; update at the end of every session (see below). |

Do not guess scope or invent requirements. If docs and code disagree, flag the
conflict and align with `docs/requirements.md` unless the user directs otherwise.

## Session handoff — `docs/current-state.md`

Maintain [`docs/current-state.md`](docs/current-state.md) as a living log so the
next agent (or human) can resume without re-discovering context.

**At the start of a session:** read `docs/current-state.md` before making changes.

**At the end of every session** (or before handing off), update it with:

- **Last updated** — ISO 8601 timestamp (UTC), e.g. `2026-06-26T14:30:00Z`
- **Last agent action** — one-line summary of what was just completed
- **Changes made** — bullet list of files touched and why
- **Requirement progress** — requirement IDs moved, started, or blocked (if any)
- **Open items** — what the next session should pick up
- **Known issues / blockers** — anything unresolved

Keep entries concise. Replace the previous session block; do not append unbounded
history (git history is the archive).

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design system — Надворі (Weather Explorer)

This app has a design system. **Read [`design.md`](design.md) before building any
UI.** It is the canonical `DESIGN.md` decision and explains how the system is
wired in.

- **Brand:** Надворі ("outdoors") / *Weather Explorer* — calm, Ukrainian-first.
  Lead with the comfort score (0–100), then the detail. No exclamation marks.
- **Tokens:** semantic CSS vars in [`app/design-system/tokens/`](app/design-system/tokens/),
  bridged to Tailwind v4 utilities in [`app/globals.css`](app/globals.css) via
  `@theme inline`. Consume semantic utilities (`bg-surface`, `text-brand`,
  `bg-comfort-good-solid`, `rounded-lg`, `shadow-md`) — **never** raw colour
  ramps or hard-coded values.
- **Fonts:** Onest (text/display) + JetBrains Mono (all numerics, tabular) via
  `next/font` in [`app/layout.tsx`](app/layout.tsx). Use `font-mono` for every
  number.
- **Theming:** light + dark via `data-theme` on `<html>`; WCAG AA both ways;
  focus rings always visible.
- **Source of truth / reference:** [`docs/Weather Explorer Design System/`](docs/Weather%20Explorer%20Design%20System/)
  (full guidelines, component specs, app recreation). Re-sync steps are in
  `design.md`.
