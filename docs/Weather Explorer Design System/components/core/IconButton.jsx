import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * IconButton — a square, icon-only control. Used for map controls,
 * theme toggle, pin/unpin, close. Always pass `label` for accessibility.
 */
export function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = { sm: 32, md: 40, lg: 48 };
  const iconSizes = { sm: 16, md: 20, lg: 22 };
  const dim = sizes[size] || sizes.md;

  const palette = {
    solid: { bg: hover ? 'var(--brand-hover)' : 'var(--brand)', fg: 'var(--text-on-brand)', border: 'transparent', shadow: 'var(--shadow-xs)' },
    soft: { bg: hover ? 'var(--brand-soft-hover)' : 'var(--brand-soft)', fg: 'var(--brand)', border: 'var(--brand-border)', shadow: 'none' },
    outline: { bg: hover ? 'var(--surface-hover)' : 'var(--surface)', fg: 'var(--text-secondary)', border: 'var(--border-strong)', shadow: 'var(--shadow-xs)' },
    ghost: { bg: hover ? 'var(--surface-hover)' : 'transparent', fg: 'var(--text-secondary)', border: 'transparent', shadow: 'none' },
  };
  const p = palette[variant] || palette.ghost;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dim,
        height: dim,
        color: p.fg,
        background: p.bg,
        border: `1px solid ${p.border}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: p.shadow,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transform: active && !disabled ? 'scale(0.94)' : 'none',
        transition: 'var(--transition-control)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={iconSizes[size] || 20} />
    </button>
  );
}
