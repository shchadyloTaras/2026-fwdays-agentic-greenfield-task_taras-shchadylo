---
name: nadvori-design
description: Use this skill to generate well-branded interfaces and assets for Надворі (Nadvori) / Weather Explorer — a calm, Ukrainian-first weather app — either for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, you can copy assets and read the rules here to become an expert
in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Надворі ("outdoors") / Weather Explorer. Calm, Ukrainian-first,
  no exclamation marks. Lead with the comfort score (0–100), then the detail.
- **Global CSS:** link `styles.css` — it `@import`s every token. Consume
  semantic aliases (`--brand`, `--text`, `--surface`, `--comfort-good-*`…),
  not raw ramps.
- **Type:** Onest (text/display, Cyrillic) + JetBrains Mono (all numerics,
  tabular). Loaded from Google Fonts in `tokens/fonts.css`.
- **Icons:** Lucide via CDN at 1.75 stroke; weather conditions go through the
  `ConditionIcon` component. Only emoji allowed is a country flag in search.
- **Components:** `window.WeatherExplorerDesignSystem_019e02` after loading
  `_ds_bundle.js`. Core (Button, Input, Card, Badge, Chip, Tabs, Switch,
  IconButton, Icon) + weather (ComfortBadge, DayCard, ConditionIcon, Clock,
  CityResult).
- **Full app reference:** `ui_kits/weather-explorer/`.

## Foundations
- Light + dark (`[data-theme="dark"]`), WCAG AA. Soft cool shadows, 12/16/22px
  radii, pill chips & comfort badges. Gentle motion, nothing bounces, always
  respect `prefers-reduced-motion`. Always-visible focus rings.
