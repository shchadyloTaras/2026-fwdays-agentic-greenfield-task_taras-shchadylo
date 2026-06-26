// App — the Надворі single-page experience. State machine:
// empty (hero search) → forecast → optional weekend-compare.
function App() {
  const DS = window.WeatherExplorerDesignSystem_019e02;
  const { Tabs, Button, Chip } = DS;
  const D = window.NADVORI_DATA;

  const [dark, setDark] = React.useState(false);
  const [city, setCity] = React.useState(null);
  const [view, setView] = React.useState('week');      // week | compare
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [pinned, setPinned] = React.useState([]);       // up to 3 cities

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  function selectCity(c) {
    setCity(c);
    setSelectedIdx(0);
    setView('week');
    setPinned((p) => (p.find((x) => x.id === c.id) ? p : [...p, c].slice(-3)));
  }
  function unpin(id) { setPinned((p) => p.filter((x) => x.id !== id)); }

  const cond = city ? city.now.condition : 'clear';

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AnimatedBg condition={cond} night={false} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <AppHeader city={city} dark={dark} onToggleTheme={() => setDark((d) => !d)} />

        {!city ? (
          /* ---- Empty state: centered hero (FR-SHELL-03) ---- */
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 22px', textAlign: 'center' }}>
            <div style={{ maxWidth: 560, width: '100%' }}>
              <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', letterSpacing: '-0.02em', color: 'var(--text)', margin: '0 0 10px' }}>
                Куди поїхати на вихідні
              </h1>
              <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-secondary)', margin: '0 0 28px', textWrap: 'pretty' }}>
                Знайдіть місто і дізнайтесь, чи приємно там буде надворі. Один індекс комфорту замість п’яти цифр.
              </p>
              <SearchBar size="lg" autoFocus onSelect={selectCity} />
              <div style={{ marginTop: 18, display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['lviv', 'kyiv', 'odesa'].map((id) => (
                  <Chip key={id} icon="map-pin" onClick={() => selectCity(D.cities[id])}>{D.cities[id].name}</Chip>
                ))}
              </div>
            </div>
          </main>
        ) : (
          /* ---- Forecast / compare ---- */
          <main style={{ flex: 1, width: '100%', maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-6) 22px 0', boxSizing: 'border-box' }}>
            {/* search + pinned + view toggle */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 320px', minWidth: 260, maxWidth: 460 }}>
                <SearchBar size="md" onSelect={selectCity} />
              </div>
              <div style={{ flex: '1 1 auto', display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                {pinned.map((c) => (
                  <Chip key={c.id} icon="map-pin" active={c.id === city.id} onClick={() => selectCity(c)} onRemove={pinned.length > 1 ? () => unpin(c.id) : undefined}>
                    {c.name}
                  </Chip>
                ))}
              </div>
              {pinned.length > 1 && (
                <Tabs
                  tabs={[{ value: 'week', label: '7 днів' }, { value: 'compare', label: 'Вихідні' }]}
                  value={view}
                  onChange={setView}
                />
              )}
            </div>

            {view === 'week' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <WeekendHighlight city={city} />
                <ForecastGrid city={city} selectedIdx={selectedIdx} onSelect={setSelectedIdx} />
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 'var(--space-5)' }} className="nadv-split">
                  <HourlyChart city={city} />
                  <MapPanel city={city} />
                </div>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                  <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text)', margin: 0 }}>Порівняння вихідних</h2>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Закріплено міст: {pinned.length} з 3</span>
                </div>
                <CompareTable cities={pinned} activeId={city.id} onMakeActive={selectCity} />
              </div>
            )}

            <AppFooter />
          </main>
        )}
      </div>

      <style>{`
        @media (max-width: 880px) { .nadv-split { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
window.NadvoriApp = App;
