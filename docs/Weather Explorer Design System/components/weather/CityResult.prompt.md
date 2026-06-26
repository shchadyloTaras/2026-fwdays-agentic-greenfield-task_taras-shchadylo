One geocoding suggestion row in the search dropdown: city name, admin region, country, and an optional flag emoji (the one sanctioned emoji use, per FR-SEARCH-02).

```jsx
<CityResult name="Львів" region="Львівська область" country="Україна" flag="🇺🇦" active />
```

`active` highlights the keyboard-selected row. Fires `onClick` to set the active location.
