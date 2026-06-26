The base surface for everything — soft 16px rounding, low cool-tinted shadow, calm border.

```jsx
<Card>…</Card>
<Card interactive onClick={...}>clickable day card</Card>
<Card selected>pinned city</Card>
```

`interactive` adds a 2px hover lift; `selected` adds a brand ring. Override `padding` per use.
