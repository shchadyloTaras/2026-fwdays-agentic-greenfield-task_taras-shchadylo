// Header — logo, live clock, theme toggle (FR-SHELL-01, FR-CLOCK-01).
function AppHeader({ city, dark, onToggleTheme }) {
  const { Clock, IconButton } = window.WeatherExplorerDesignSystem_019e02;
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 22px',
      background: 'color-mix(in oklab, var(--surface) 82%, transparent)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky', top: 0, zIndex: 20,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
        <span style={{ position: 'relative', width: 34, height: 34, borderRadius: 11, overflow: 'hidden', flex: 'none', boxShadow: 'var(--shadow-xs)' }}>
          <span style={{ position: 'absolute', inset: 0, background: 'var(--brand)' }} />
          <span style={{ position: 'absolute', width: 15, height: 15, borderRadius: '50%', background: 'var(--amber-300)', left: 9.5, top: 8 }} />
          <span style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 12, background: 'var(--sky-700)' }} />
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-md)', letterSpacing: '-0.01em', color: 'var(--text)' }}>Надворі</span>
          <span style={{ fontSize: 9.5, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-faint)', fontWeight: 600 }}>Weather Explorer</span>
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Clock timeZone={city ? city.tz : 'Europe/Kyiv'} />
        <IconButton
          icon={dark ? 'sun' : 'moon'}
          label={dark ? 'Денна тема' : 'Нічна тема'}
          variant="ghost"
          onClick={onToggleTheme}
        />
      </div>
    </header>
  );
}
window.AppHeader = AppHeader;
