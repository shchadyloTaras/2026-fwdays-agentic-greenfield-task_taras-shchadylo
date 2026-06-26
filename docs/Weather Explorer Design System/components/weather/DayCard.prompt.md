One day in the 7-day forecast grid: weekday, condition icon, hi/lo, precip %, wind, comfort score.

```jsx
<DayCard day={{weekday:'Сб', condition:'clear', hi:24, lo:14, precip:8, wind:'9 км/год', comfort:82}} weekend />
```

`weekend` adds a subtle marker; `selected`/`onClick` make it the active day. Composes Card + ConditionIcon + ComfortBadge.
