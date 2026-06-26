import React from 'react';

/**
 * Tabs — calm segmented control. Used to switch between Forecast / Map /
 * Compare. Underline-free; the active tab gets a soft surface pill.
 */
export function Tabs({ tabs = [], value, onChange, size = 'md', style = {} }) {
  const pad = size === 'sm' ? '6px 12px' : '8px 16px';
  const fs = size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)';

  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        background: 'var(--surface-sunken)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-pill)',
        ...style,
      }}
    >
      {tabs.map((t) => {
        const key = typeof t === 'string' ? t : t.value;
        const labelText = typeof t === 'string' ? t : t.label;
        const isActive = key === value;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange && onChange(key)}
            style={{
              padding: pad,
              fontFamily: 'var(--font-sans)',
              fontSize: fs,
              fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              color: isActive ? 'var(--brand)' : 'var(--text-muted)',
              background: isActive ? 'var(--surface)' : 'transparent',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              boxShadow: isActive ? 'var(--shadow-xs)' : 'none',
              cursor: 'pointer',
              transition: 'var(--transition-control)',
              whiteSpace: 'nowrap',
            }}
          >
            {labelText}
          </button>
        );
      })}
    </div>
  );
}
