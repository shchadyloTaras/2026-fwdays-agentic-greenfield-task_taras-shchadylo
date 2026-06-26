// MapPanel — real OSM-tiled Leaflet map bounded to the active city
// (FR-MAP-01..04, TC-STACK-04). Requires Leaflet loaded globally.
function MapPanel({ city }) {
  const { Card } = window.WeatherExplorerDesignSystem_019e02;
  const ref = React.useRef(null);
  const mapRef = React.useRef(null);
  const markerRef = React.useRef(null);

  React.useEffect(() => {
    if (!window.L || !ref.current) return;
    if (!mapRef.current) {
      mapRef.current = window.L.map(ref.current, { zoomControl: true, attributionControl: true, scrollWheelZoom: false })
        .setView([city.lat, city.lon], 11);
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapRef.current);
    }
    const m = mapRef.current;
    m.setView([city.lat, city.lon], 11, { animate: true });
    if (markerRef.current) markerRef.current.remove();
    markerRef.current = window.L.marker([city.lat, city.lon]).addTo(m).bindPopup(city.name).openPopup();
    setTimeout(() => m.invalidateSize(), 80);
  }, [city.id]);

  return (
    <Card padding="0" style={{ overflow: 'hidden' }}>
      <div ref={ref} style={{ width: '100%', height: 280, background: 'var(--surface-sunken)' }} />
    </Card>
  );
}
window.MapPanel = MapPanel;
