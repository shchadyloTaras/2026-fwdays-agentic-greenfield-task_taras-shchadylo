# Project docs — read before you build

Start every task by reading the docs in [`docs/`](docs/). They define what the
product is, what it must do, and what was done last.

| Document | Purpose |
| -------- | ------- |
| [`docs/requirements.md`](docs/requirements.md) | **Source of truth** — numbered requirements (`FR-*`, `NFR-*`, `TC-*`, `BC-*`) with status. Cite these IDs in specs, tests, and PRs. |
| [`docs/product-brief.md`](docs/product-brief.md) | **Business narrative** — who the product is for, the pain it solves, and UX intent. Use for context; defer to requirements when they differ. |
| [`docs/capabilities.md`](docs/capabilities.md) | **Implementation plan** — capability inventory, build order, and OpenSpec workflow. Read before starting a capability. |
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
