// WeekendHighlight — hero panel leading with the weekend comfort score
// (FR-COMFORT-05). One number, then the detail.
function WeekendHighlight({ city }) {
  const { Card, ComfortBadge, Badge, ConditionIcon } = window.WeatherExplorerDesignSystem_019e02;
  const D = window.NADVORI_DATA;
  const wk = D.weekend(city);
  const tone = wk.avg >= 70 ? 'good' : wk.avg >= 40 ? 'fair' : 'poor';

  function MiniDay({ label, day }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
        <ConditionIcon condition={day.condition} size={26} />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text)' }}>{label}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
            {day.hi}° / {day.lo}° · {day.precip}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card padding="var(--space-6)" style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <ComfortBadge value={wk.avg} size="lg" />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                Вихідні у місті {city.name}
              </span>
              <Badge tone="brand">Цей тиждень</Badge>
            </div>
            <div style={{ fontSize: 'var(--text-base)', color: `var(--comfort-${tone}-fg)`, fontWeight: 600 }}>
              {ComfortBadge.labelFor(wk.avg)} — {wk.avg >= 70 ? 'гарний час побути надворі' : wk.avg >= 40 ? 'непогано, але дивіться на небо' : 'можливо, краще лишитися вдома'}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 16, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
        <MiniDay label="Субота" day={wk.sat} />
        <div style={{ width: 1, background: 'var(--border-subtle)' }} />
        <MiniDay label="Неділя" day={wk.sun} />
      </div>
    </Card>
  );
}
window.WeekendHighlight = WeekendHighlight;
