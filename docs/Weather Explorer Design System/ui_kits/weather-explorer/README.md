# Надворі — Weather Explorer · UI kit

A high-fidelity, interactive recreation of the **Надворі** weather app. Compose
of the design-system components; mock data stands in for Open-Meteo.

## Run
Open `index.html`. It loads the global stylesheet, the design-system bundle
(`../../_ds_bundle.js`), Lucide (icons), Leaflet (real OSM map), and the screen
JSX files, then mounts `App`.

## Flow
1. **Empty state** — centered hero copy + city search (`FR-SHELL-03`). Type a
   Ukrainian city (e.g. "Льв") for debounced suggestions, or tap a quick chip.
2. **Forecast** — weekend comfort highlight, 7-day grid, 24h temperature chart
   with sunrise/sunset, and a live OSM map centered on the city. Header has the
   live clock and the light/dark toggle.
3. **Weekend compare** — pin a second/third city (each search selection pins),
   then the "Вихідні" tab shows a Sat/Sun comparison table.

## Files
- `App.jsx` — state machine (empty → forecast → compare), theme, pinned cities.
- `AnimatedBg.jsx` — condition-aware sky (reduced-motion aware).
- `Header.jsx` · `Footer.jsx` — chrome; clock, theme toggle, joke + credits.
- `SearchBar.jsx` — debounced geocoding search + suggestion dropdown.
- `WeekendHighlight.jsx` · `ForecastGrid.jsx` · `HourlyChart.jsx` ·
  `MapPanel.jsx` · `CompareTable.jsx` — content surfaces.
- `data.js` — mock cities, forecasts, comfort scores, jokes.

These are cosmetic recreations: real production wires Open-Meteo, Recharts, and
react-leaflet behind the same visuals.
