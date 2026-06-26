import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Chip — compact, optionally removable token. Used for pinned cities in
 * the weekend-compare row. `active` marks the current location.
 */
export function Chip({ children, icon, active = false, onClick, onRemove, style = {} }) {
  const [hover, setHover] = React.useState(false);

  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        height: 34,
        padding: onRemove ? '0 6px 0 12px' : '0 14px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)',
        color: active ? 'var(--brand)' : 'var(--text-secondary)',
        background: active ? 'var(--brand-soft)' : (hover ? 'var(--surface-hover)' : 'var(--surface)'),
        border: `1px solid ${active ? 'var(--brand-border)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-pill)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'var(--transition-control)',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={15} style={{ color: active ? 'var(--brand)' : 'var(--text-muted)' }} />}
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Прибрати"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 22, height: 22, marginLeft: 1,
            border: 'none', borderRadius: '50%', background: 'transparent',
            color: 'var(--text-faint)', cursor: 'pointer',
            transition: 'var(--transition-control)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--surface-sunken)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-faint)'; }}
        >
          <Icon name="x" size={14} />
        </button>
      )}
    </span>
  );
}
