import React from 'react';

/**
 * Switch — calm pill toggle. Used for theme (day/night) and the
 * "Compare weekend" view switch.
 */
export function Switch({ checked = false, onChange, disabled = false, label, id, style = {} }) {
  const track = checked ? 'var(--brand)' : 'var(--border-strong)';
  const knob = 'var(--surface)';

  const sw = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={!label ? 'toggle' : undefined}
      id={id}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        position: 'relative',
        width: 44,
        height: 26,
        flex: 'none',
        padding: 0,
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        background: track,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background-color var(--dur-base) var(--ease-out)',
        ...style,
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 3,
          left: checked ? 21 : 3,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: knob,
          boxShadow: 'var(--shadow-sm)',
          transition: 'left var(--dur-base) var(--ease-out)',
        }}
      />
    </button>
  );

  if (!label) return sw;
  return (
    <label htmlFor={id} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      {sw}
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{label}</span>
    </label>
  );
}
