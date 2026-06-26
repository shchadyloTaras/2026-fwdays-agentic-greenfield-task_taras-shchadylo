Maps a weather condition (+ day/night) to the correct Lucide glyph with an accessible Ukrainian name. Use everywhere a sky condition is shown.

```jsx
<ConditionIcon condition="rain" size={28} />
<ConditionIcon condition="clear" night size={40} />
```

Conditions: `clear`, `partly`, `cloudy`, `fog`, `drizzle`, `rain`, `snow`, `storm`. `tone="auto"` tints clear-day amber and night sky-blue. `ConditionIcon.labelFor(key)` returns the UK label.
