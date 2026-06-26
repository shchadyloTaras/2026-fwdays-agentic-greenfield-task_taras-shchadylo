import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * CityResult — one geocoding suggestion row (FR-SEARCH-02): city name,
 * admin region, country, and an optional flag emoji (the one place the
 * brand allows emoji). Keyboard + pointer selectable.
 */
export function CityResult({ name, region, country, flag, active = false, onClick, style = {} }) {
  const [hover, setHover] = React.useState(false);
  const highlight = active || hover;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        padding: '10px 14px',
        textAlign: 'left',
        background: highlight ? 'var(--brand-soft)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        transition: 'var(--transition-control)',
        ...style,
      }}
    >
      <Icon name="map-pin" size={18} style={{ color: highlight ? 'var(--brand)' : 'var(--text-faint)' }} />
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-base)', color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {name}
        </span>
        {(region || country) && (
          <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {[region, country].filter(Boolean).join(', ')}
          </span>
        )}
      </span>
      {flag && <span aria-hidden="true" style={{ fontSize: 20, lineHeight: 1, flex: 'none' }}>{flag}</span>}
    </button>
  );
}
