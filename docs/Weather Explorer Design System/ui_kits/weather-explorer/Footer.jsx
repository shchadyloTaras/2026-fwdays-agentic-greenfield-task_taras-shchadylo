// Footer — deterministic Ukrainian joke (FR-JOKES-01) + Open-Meteo / OSM
// credits (BC-BRAND-02). Calm, no exclamation marks.
function AppFooter() {
  const { Icon } = window.WeatherExplorerDesignSystem_019e02;
  const D = window.NADVORI_DATA;
  return (
    <footer style={{
      marginTop: 'var(--space-7)',
      padding: '22px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 14,
    }}>
      <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 9, color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', maxWidth: 540 }}>
        <Icon name="message-circle" size={16} style={{ color: 'var(--text-faint)', marginTop: 1 }} />
        <span style={{ textWrap: 'pretty' }}>{D.jokeOfTheDay()}</span>
      </p>
      <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
        Дані: <a href="https://open-meteo.com" style={{ color: 'var(--text-link)' }}>Open-Meteo</a>
        {' · '}Мапа: <a href="https://www.openstreetmap.org/copyright" style={{ color: 'var(--text-link)' }}>OpenStreetMap</a>
      </p>
    </footer>
  );
}
window.AppFooter = AppFooter;
