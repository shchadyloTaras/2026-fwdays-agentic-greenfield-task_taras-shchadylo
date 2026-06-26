// ForecastGrid — the 7-day day cards (FR-FORECAST-02). Weekend days
// (indices 5 & 6 in the demo data) get the marker.
function ForecastGrid({ city, selectedIdx, onSelect }) {
  const { DayCard } = window.WeatherExplorerDesignSystem_019e02;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: 'var(--space-4)',
    }}>
      {city.days.map((d, i) => (
        <DayCard
          key={i}
          day={d}
          weekend={i === 5 || i === 6}
          selected={i === selectedIdx}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}
window.ForecastGrid = ForecastGrid;
