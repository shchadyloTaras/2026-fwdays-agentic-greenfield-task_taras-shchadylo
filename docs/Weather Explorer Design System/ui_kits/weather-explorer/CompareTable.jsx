// CompareTable — weekend comparison across pinned cities (FR-COMPARE-02/03).
// Columns: each city; rows: Sat / Sun hi-lo, precip, comfort. Sticky header
// with city name + "make active".
function CompareTable({ cities, activeId, onMakeActive }) {
  const { ComfortBadge, Button, ConditionIcon } = window.WeatherExplorerDesignSystem_019e02;
  const D = window.NADVORI_DATA;
  const cols = cities.map((c) => ({ city: c, wk: D.weekend(c) }));

  const cell = { padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid var(--border-subtle)' };
  const rowLabel = { ...cell, color: 'var(--text-muted)', fontSize: 'var(--text-sm)', fontWeight: 600, width: 120, position: 'sticky', left: 0, background: 'var(--surface)' };

  return (
    <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', background: 'var(--surface)', boxShadow: 'var(--shadow-sm)' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 640 }}>
        <thead>
          <tr>
            <th style={{ ...rowLabel, zIndex: 2, top: 0, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>Вихідні</th>
            {cols.map(({ city, wk }) => (
              <th key={city.id} style={{ ...cell, background: 'var(--surface)', minWidth: 220, verticalAlign: 'top' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-md)', color: 'var(--text)' }}>{city.name}</span>
                      <ComfortBadge value={wk.avg} size="sm" />
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontWeight: 400 }}>середній індекс вихідних</div>
                  </div>
                  {city.id === activeId
                    ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--brand)', fontWeight: 600 }}>активне</span>
                    : <Button size="sm" variant="ghost" onClick={() => onMakeActive(city)}>обрати</Button>}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={rowLabel}>Субота</td>
            {cols.map(({ wk, city }) => { const d = wk.sat; return (
              <td key={city.id} style={cell}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <ConditionIcon condition={d.condition} size={22} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', color: 'var(--text)' }}>{d.hi}° / {d.lo}°</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{d.precip}%</span>
                  <ComfortBadge value={d.comfort} size="sm" />
                </div>
              </td>
            ); })}
          </tr>
          <tr>
            <td style={rowLabel}>Неділя</td>
            {cols.map(({ wk, city }) => { const d = wk.sun; return (
              <td key={city.id} style={cell}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <ConditionIcon condition={d.condition} size={22} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', color: 'var(--text)' }}>{d.hi}° / {d.lo}°</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{d.precip}%</span>
                  <ComfortBadge value={d.comfort} size="sm" />
                </div>
              </td>
            ); })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
window.CompareTable = CompareTable;
