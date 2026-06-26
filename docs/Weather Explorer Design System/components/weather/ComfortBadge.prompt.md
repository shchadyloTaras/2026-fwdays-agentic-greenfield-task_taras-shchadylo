The product's signature element — a 0–100 comfort score in its honest semantic colour. Lead with this, then the detail.

```jsx
<ComfortBadge value={82} size="sm" />
<ComfortBadge value={54} size="lg" showLabel />
```

Colour is derived: good ≥70, fair 40–69, poor <40. Sizes: `sm` (in day cards), `md`, `lg` (hero weekend score). `showLabel` adds the UK rating + caption. Export `comfortTone(value)` for matching colours elsewhere.
