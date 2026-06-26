import React from 'react';

/**
 * ComfortBadge — the product's signature element. Shows a 0–100 comfort
 * score with the honest semantic colour (good ≥70 / fair 40–69 / poor <40).
 * Sizes: sm (inline in day cards), md, lg (hero weekend score).
 */
export function comfortTone(value) {
  if (value >= 70) return 'good';
  if (value >= 40) return 'fair';
  return 'poor';
}

const UK_LABEL = { good: 'Чудово', fair: 'Помірно', poor: 'Краще вдома' };

export function ComfortBadge({ value, size = 'md', showLabel = false, style = {} }) {
  const tone = comfortTone(value);
  const bg = `var(--comfort-${tone}-solid)`;

  const dims = {
    sm: { d: 34, fs: 'var(--text-sm)' },
    md: { d: 48, fs: 'var(--text-lg)' },
    lg: { d: 92, fs: 'var(--text-3xl)' },
  };
  const c = dims[size] || dims.md;

  const circle = (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: c.d,
        height: c.d,
        flex: 'none',
        borderRadius: '50%',
        background: bg,
        color: '#fff',
        fontFamily: 'var(--font-mono)',
        fontVariantNumeric: 'tabular-nums',
        fontWeight: 'var(--weight-bold)',
        fontSize: c.fs,
        lineHeight: 1,
        boxShadow: size === 'lg' ? 'var(--shadow-md)' : 'none',
        ...(showLabel ? {} : style),
      }}
    >
      {Math.round(value)}
    </span>
  );

  if (!showLabel) return circle;

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, ...style }}>
      {circle}
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-base)', color: `var(--comfort-${tone}-fg)` }}>
          {UK_LABEL[tone]}
        </span>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Індекс комфорту</span>
      </span>
    </span>
  );
}

ComfortBadge.labelFor = (value) => UK_LABEL[comfortTone(value)];
