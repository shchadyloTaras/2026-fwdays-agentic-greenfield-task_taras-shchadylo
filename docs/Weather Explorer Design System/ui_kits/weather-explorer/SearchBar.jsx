// SearchBar — debounced city search with suggestion dropdown
// (FR-SEARCH-01..05). Uses Input + CityResult + Card from the DS.
function SearchBar({ size = 'lg', onSelect, autoFocus = false }) {
  const { Input, CityResult, Card } = window.WeatherExplorerDesignSystem_019e02;
  const D = window.NADVORI_DATA;
  const [q, setQ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [active, setActive] = React.useState(0);
  const timer = React.useRef(null);

  function onChange(e) {
    const v = e.target.value;
    setQ(v);
    setOpen(true);
    setLoading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setResults(D.search(v));
      setActive(0);
      setLoading(false);
    }, 260); // debounce
  }

  function choose(c) {
    setQ(c.name);
    setOpen(false);
    const full = D.cities[c.id];
    if (full && onSelect) onSelect(full);
  }

  function onKeyDown(e) {
    if (!open || !results.length) {
      if (e.key === 'Enter' && results.length === 1) choose(results[0]);
      return;
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    if (e.key === 'Enter') { e.preventDefault(); choose(results[active]); }
    if (e.key === 'Escape') setOpen(false);
  }

  const noResults = open && !loading && q.trim() && results.length === 0;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Input
        icon="search"
        size={size}
        placeholder="Знайдіть місто"
        value={q}
        loading={loading && open}
        autoFocus={autoFocus}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={() => q && setOpen(true)}
      />
      {open && (results.length > 0 || noResults) && (
        <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0, zIndex: 30 }}>
          <Card padding="6px" style={{ boxShadow: 'var(--shadow-lg)' }}>
            {results.map((c, i) => (
              <CityResult
                key={c.id}
                name={c.name}
                region={c.region}
                country={c.country}
                flag={c.flag}
                active={i === active}
                onClick={() => choose(c)}
              />
            ))}
            {noResults && (
              <div style={{ padding: '14px', color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
                Нічого не знайдено
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
window.SearchBar = SearchBar;
