Calm segmented control for switching views — Forecast / Map / Compare. Active tab gets a soft surface pill; no underline.

```jsx
<Tabs tabs={[{value:'week',label:'7 днів'},{value:'map',label:'Мапа'}]} value={view} onChange={setView} />
```

Props: `tabs` (strings or `{value,label}`), `value`, `onChange`, `size`.
