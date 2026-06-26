---
name: nadoviri-frontend-design
description: Applies the Надворі (Weather Explorer) design system when building or reviewing UI — semantic Tailwind tokens, Onest/JetBrains Mono typography, light+dark theming, Ukrainian-first brand voice. Use when creating React components, pages, styling, layouts, or any frontend UI work in this project.
---

# Design system — Надворі (Weather Explorer)

When using this skill, ALWAYS output to chat this symbol: 🤖

This app has a design system. **Read [`design.md`](../../../design.md) before building any
UI.** It is the canonical `DESIGN.md` decision and explains how the system is
wired in.

- **Brand:** Надворі ("outdoors") / *Weather Explorer* — calm, Ukrainian-first.
  Lead with the comfort score (0–100), then the detail. No exclamation marks.
- **Tokens:** semantic CSS vars in [`app/design-system/tokens/`](../../../app/design-system/tokens/),
  bridged to Tailwind v4 utilities in [`app/globals.css`](../../../app/globals.css) via
  `@theme inline`. Consume semantic utilities (`bg-surface`, `text-brand`,
  `bg-comfort-good-solid`, `rounded-lg`, `shadow-md`) — **never** raw colour
  ramps or hard-coded values.
- **Fonts:** Onest (text/display) + JetBrains Mono (all numerics, tabular) via
  `next/font` in [`app/layout.tsx`](../../../app/layout.tsx). Use `font-mono` for every
  number.
- **Theming:** light + dark via `data-theme` on `<html>`; WCAG AA both ways;
  focus rings always visible.
- **Source of truth / reference:** [`docs/Weather Explorer Design System/`](../../../docs/Weather%20Explorer%20Design%20System/)
  (full guidelines, component specs, app recreation). Re-sync steps are in
  `design.md`.

## Workflow

1. Read [`design.md`](../../../design.md) before writing any UI code.
2. Use semantic Tailwind utilities from `@theme inline` — not raw hex/rgb or colour ramps.
3. Apply `font-mono` to every numeric value (temperatures, scores, coordinates, clock).
4. Port components from the source bundle reference; match visual + behavioural specs.
5. For token re-sync or integration details, follow the "How it's integrated" and "Re-syncing" sections in `design.md`.

## Quick token reference

| Category | Examples |
| --- | --- |
| Colour | `bg-surface`, `bg-bg`, `text-text`, `text-brand`, `border-border` |
| Comfort | `bg-comfort-good-solid`, `text-comfort-fair-fg`, `bg-comfort-poor-bg` |
| Radius | `rounded-md` (12px), `rounded-lg` (16px), `rounded-xl` (22px), `rounded-pill` |
| Elevation | `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl` |
| Type | `font-sans` (Onest), `font-mono` (JetBrains Mono) |

Dynamic comfort tones when utilities are insufficient:

```tsx
style={{ background: `var(--comfort-${tone}-solid)` }}
```

## Voice checklist

- Ukrainian-first copy; English only for tiny system labels
- No exclamation marks
- Lead with comfort score, then detail
- Sentence case for readable text; UPPERCASE only for mono micro-labels

## Additional resources

- Full foundations, components, icons, motion: [`design.md`](../../../design.md)
- Component specs + app recreation: [`docs/Weather Explorer Design System/`](../../../docs/Weather%20Explorer%20Design%20System/)
- Live reference demo: [`app/page.tsx`](../../../app/page.tsx)
