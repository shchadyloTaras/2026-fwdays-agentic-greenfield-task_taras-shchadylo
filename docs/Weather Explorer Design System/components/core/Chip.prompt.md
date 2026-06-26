Compact token for pinned cities in the weekend-compare row. `active` marks the current location; `onRemove` adds an unpin ×.

```jsx
<Chip icon="map-pin" active>Львів</Chip>
<Chip onRemove={() => unpin(id)}>Одеса</Chip>
```
