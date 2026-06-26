# Надворі — Weather Explorer Design System

A calm, Ukrainian-first design system for **Надворі** ("outdoors"), a weather
app that answers one practical question: *where should I go this weekend, and
will it be pleasant to be outside?* The whole system is built around a single
honest signal — the **comfort score** — and a quiet, unhurried surface that
never shouts.

> Brand name: **Надворі** (Nadvori, Ukrainian for "outside / outdoors").
> English lockup subtitle: *Weather Explorer*.

---

## Sources

This system was authored **greenfield** from a product brief and PRD (no prior
codebase, Figma, or brand). The brief left visual identity open
(`BC-BRAND-01`, "pending DESIGN.md") and this design system **is** that
DESIGN.md decision. Key product context the system answers to:

- **Product brief & PRD** — Weather Explorer / Weekend Trip Planner. Stack
  (for production): Next.js 16 App Router, React 19, TypeScript strict,
  Tailwind 4, shadcn/ui (base-nova), Recharts (charts), Leaflet + react-leaflet
  (OSM maps), Vitest. Data: Open-Meteo (forecast + geocoding) and OSM tiles —
  **keyless, free-tier only**.
- **Hard constraints honoured by the visuals:** WCAG AA contrast in light + dark
  (`NFR-A11Y-02`), visible focus everywhere (`NFR-A11Y-01`), no analytics /
  cookies / trackers (`BC-PRIVACY-*`), calm Ukrainian-first tone with **no
  exclamation marks** (`BC-BRAND-01`), animated background that respects
  `prefers-reduced-motion` and never blocks interaction (`FR-ANIM-03/04`).

If you have the live repo or a future Figma, drop links here — nothing in this
system assumes the reader has access to them.

---

## The system in one breath

- **One number, then the detail.** Every surface leads with the comfort score
  (0–100) in its honest semantic colour, then lets the curious drill into hi/lo,
  precipitation, wind, and the hourly chart.
- **Calm over loud.** Sky-blue primary, warm-amber sun accent, generous
  whitespace, soft low shadows, gentle motion. A tasteful nod to Ukraine lives
  in sky-blue + warm-amber — never the literal flag.
- **Honest & accessible.** Muted (never neon) semantic colours, AA contrast,
  always-visible focus rings, Ukrainian-first copy.

---

## CONTENT FUNDAMENTALS

How Надворі writes.

**Language.** Ukrainian-first. English appears only as small system labels
(e.g. the "WEATHER EXPLORER" lockup subtitle). UI strings live in `lib/i18n/uk.ts`
with an `en.ts` fallback (`NFR-I18N-01`).

**Tone — calm and practical.** The product states things plainly and never
hypes. **No exclamation marks** anywhere (`BC-BRAND-01`). It reads like a
level-headed friend, not a marketer.

- Good: *"Гарний день для прогулянки."* (A good day for a walk.)
- Avoid: *"Неймовірна погода сьогодні!!!"* (Incredible weather today!!!)

**One number, then the detail.** Lead with the decision, follow with evidence.

- Good: *"82 — тепло, без дощу, легкий вітер."*
- Avoid: dumping five raw metrics with no read on them.

**Honest, never overstated.** The comfort rationale is a single Ukrainian
sentence, **≤ 80 characters, no emojis** (`FR-COMFORT-03`), and must match what
the day cards actually show. When it's poor, say so kindly: *"Краще вдома —
мокро і вітряно."* (Better to stay home — wet and windy.)

**Person & voice.** Mostly impersonal/observational ("Дощ після обіду"), with
gentle second-person guidance where it helps ("візьміть парасолю"). Never
first-person ("I think…"). No nagging.

**Casing.** Sentence case for everything readable. UPPERCASE only for tiny
mono micro-labels with wide tracking (e.g. "СХІД · ЗАХІД", "ВИХІДНІ"). Never
ALL-CAPS sentences.

**Numerals.** Always in mono with tabular figures so columns line up. Degrees
use a ° glyph tight to the number ("24°"). Percent and units stay terse
("12%", "9 км/год").

**Emoji.** Effectively none. The **one** sanctioned exception is the country
flag emoji in a city search result (`FR-SEARCH-02`). No emoji in headings,
rationale, jokes, or buttons.

**Footer jokes.** Deterministic Ukrainian weather one-liners, chosen by
day-of-year (no APIs, no tracking — `FR-JOKES-01`). Dry and calm, never
exclamatory: *"Найточніший прогноз — визирнути у вікно."*

---

## VISUAL FOUNDATIONS

**Palette.** Sky-blue is the primary (`--brand` = `--sky-500` #2f6fb3); warm
amber is the sun accent (`--accent` = `--amber-400`). Neutrals are a cool slate
ramp. The page is a near-white cool grey (`--bg`); cards are pure white in
light, a raised slate in dark. Everything is consumed through **semantic
aliases** (`--text`, `--surface`, `--brand`, `--border`…), never raw ramps.

**Comfort semantics — muted, not neon.** good = `#3f9d6b`, fair = `#cf9230`,
poor = `#c75d4f`. Each has a soft tint (badge background), a foreground (text on
tint), and a solid (the score circle). Tuned to read as *honest* rather than
alarmist, and to pass AA in both themes.

**Themes.** Full light + dark via `[data-theme="dark"]`. Dark lifts the brand to
`--sky-400`, deepens surfaces to slate-900/950, and recolours comfort tints for
contrast. Toggle is in the header.

**Type.** **Onest** (humanist geometric sans, full Cyrillic) for all text and
display; **JetBrains Mono** (full Cyrillic, true tabular figures) for every
numeric — temperatures, the live clock, lat/lon, precip/wind. Scale runs 11 →
64px; the hero comfort number is the only thing at the very top of the scale.
Display weights 700–800 with tight tracking (-0.02em); body 400–500.

**Spacing & layout.** 4px base grid. Airy. Content max-width 1240px. PRD
breakpoints: mobile single-column, tablet (≥768) two-column, desktop (≥1280)
three-column. Forecast is an `auto-fill minmax(150px, 1fr)` grid; chart + map
split 1.4 / 1 and stack under ~880px.

**Corners.** Soft, rounded-but-not-bubbly: inputs/buttons 12px, cards 16px,
panels 22px, chips/comfort badges/toggles fully pill. Nothing is sharp; nothing
is a blob.

**Cards.** White surface, 1px calm `--border`, 16px radius, low `--shadow-sm`.
Interactive cards lift 2px with `--shadow-md` on hover. Selected cards get a
brand-coloured 1px ring. No coloured left-borders, no gradient fills.

**Shadows.** Soft, cool-tinted (a desaturated slate-blue), low opacity. Five
steps xs→xl. Elevation rises with interactivity (hover, popovers, the hero score
circle), never as decoration. Dark theme deepens shadow opacity.

**Backgrounds.** The signature surface is a **condition-aware sky**: a
day/night/dusk vertical gradient driven by the active city's sunrise/sunset
(not the viewer's clock — `FR-ANIM-02`), with soft sun/moon glow and
rain/snow/cloud particle motion. It sits behind everything at low contrast,
has `pointer-events: none`, and collapses to a **static gradient** under
`prefers-reduced-motion`. Header/footer use a translucent blurred surface
(`backdrop-filter`) so the sky shows through softly.

**Motion.** Calm and unhurried. `--ease-out` (a gentle settle) for entrances;
fast (140ms) for hover/press feedback. **Nothing bounces.** Buttons press to
0.99 scale, icon buttons to 0.94, cards lift 2px. Background drift is slow
(~1.2s) and ambient. All durations collapse to 0 under reduced-motion.

**Hover / press states.** Hover = a step toward the brand/surface-hover colour
(never a glow); primary buttons darken one brand step. Press = a subtle scale-
down, no colour flash. Focus = a 3px soft sky ring (`--focus-ring`), always
visible, never removed.

**Transparency & blur.** Used sparingly and purposefully: the sticky
header/footer (`color-mix` surface + 12px blur) and the sky glow. No frosted
glass elsewhere.

**Imagery / colour vibe.** The map is real OpenStreetMap raster tiles (cool,
neutral). There are no photos in the MVP; the sky gradient is the only large
colour field, and it's airy and slightly desaturated — calm, not saturated.

---

## ICONOGRAPHY

**System: Lucide** (https://lucide.dev), loaded from CDN. Chosen as a calm,
consistent open-source line set; this is a **substitution** flagged for the
user since the project is greenfield with no icon assets of its own — swap for a
house set later if desired.

- **Style:** single-weight line icons at a calm **1.75 stroke** (lighter than
  Lucide's 2 default), rounded caps/joins, 24px grid. The `Icon` component pins
  this so every glyph matches.
- **Weather conditions** map through `ConditionIcon` — the single source of
  truth: `clear→sun`/`moon`, `partly→cloud-sun`, `cloudy→cloud`, `fog→cloud-fog`,
  `drizzle→cloud-drizzle`, `rain→cloud-rain`, `snow→cloud-snow`,
  `storm→cloud-lightning`. Clear-day tints amber, night tints sky-blue.
- **UI & data:** `search`, `map-pin`, `locate-fixed`, `sunrise`, `sunset`,
  `wind`, `droplets`, `gauge`, `clock`, `plus`/`minus`, `x`, `chevron-right`,
  `message-circle`.
- **Colour:** icons inherit `currentColor`; tint via the parent or
  `ConditionIcon`'s `tone`.
- **Emoji as icon:** only the country flag in a city search result
  (`FR-SEARCH-02`). Nowhere else.
- **No hand-drawn SVG icons.** The brand mark (sun-over-horizon) is the only
  bespoke SVG and lives in `assets/`.

**Loading:** include the Lucide UMD script globally
(`<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js">`) and
call `lucide.createIcons()` once after render; the `Icon` component handles
per-instance creation.

---

## INDEX

**Root**
- `styles.css` — global entry (import this one file). `@import`s all tokens.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for portable use.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`radius.css`, `shadows.css`, `motion.css`, `base.css`.

**`assets/`** — `logo-mark.svg` (sun-over-horizon), `logo-wordmark.svg`
(mark + "Надворі" + EN subtitle).

**`guidelines/`** — foundation specimen cards (Design System tab): colours
(brand, neutrals, comfort, surfaces light/dark), type (scale, families),
spacing (scale, radius, elevation), brand (logo, sky moods, voice, iconography).

**`components/core/`** — `Icon`, `Button`, `IconButton`, `Input`, `Switch`,
`Tabs`, `Badge`, `Card`, `Chip`. Each has `.jsx` + `.d.ts` + `.prompt.md`;
`core.card.html` is the showcase.

**`components/weather/`** — `ConditionIcon`, `ComfortBadge` (+ `comfortTone`),
`DayCard`, `Clock`, `CityResult`. `weather.card.html` is the showcase.

**`ui_kits/weather-explorer/`** — the full **Надворі** app recreation:
`index.html` orchestrates `App`, `AnimatedBg`, `Header`, `SearchBar`,
`WeekendHighlight`, `ForecastGrid`, `HourlyChart`, `MapPanel` (real Leaflet/OSM),
`CompareTable`, `Footer`, with mock data in `data.js`. See its `README.md`.

**Namespace.** Components are exposed at `window.WeatherExplorerDesignSystem_019e02`.
