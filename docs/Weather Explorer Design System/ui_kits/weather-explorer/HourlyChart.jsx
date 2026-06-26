// HourlyChart — 24h temperature line (stands in for the Recharts 48h chart,
// FR-FORECAST-03) plus sunrise/sunset (FR-FORECAST-04). Lightweight inline SVG.
function HourlyChart({ city }) {
  const { Card, Icon } = window.WeatherExplorerDesignSystem_019e02;
  const data = city.hourly;
  const W = 640, H = 150, padX = 8, padY = 22;
  const min = Math.min(...data) - 1, max = Math.max(...data) + 1;
  const x = (i) => padX + (i / (data.length - 1)) * (W - padX * 2);
  const y = (v) => padY + (1 - (v - min) / (max - min)) * (H - padY * 2);
  const line = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(data.length - 1).toFixed(1)},${H - padY} L${x(0).toFixed(1)},${H - padY} Z`;
  const ticks = [0, 6, 12, 18, 23];

  return (
    <Card padding="var(--space-5)">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-md)', color: 'var(--text)' }}>Погодинно</span>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Наступні 24 години</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }} preserveAspectRatio="none" aria-label="Графік температури по годинах" role="img">
        <defs>
          <linearGradient id="nadv-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#nadv-fill)" />
        <path d={line} fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        {ticks.map((t) => (
          <g key={t}>
            <circle cx={x(t)} cy={y(data[t])} r="3.5" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
            <text x={x(t)} y={y(data[t]) - 10} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fontWeight="600" fill="var(--text-secondary)">{data[t]}°</text>
            <text x={x(t)} y={H - 6} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" fill="var(--text-faint)">{String(t).padStart(2, '0')}:00</text>
          </g>
        ))}
      </svg>
      <div style={{ display: 'flex', gap: 20, marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          <Icon name="sunrise" size={16} style={{ color: 'var(--accent)' }} />
          Схід <span className="tnum" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text)' }}>{city.sunrise}</span>
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          <Icon name="sunset" size={16} style={{ color: 'var(--amber-500)' }} />
          Захід <span className="tnum" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text)' }}>{city.sunset}</span>
        </span>
      </div>
    </Card>
  );
}
window.HourlyChart = HourlyChart;
