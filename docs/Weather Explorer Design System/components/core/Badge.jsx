import React from 'react';

/**
 * Badge — small status pill. `tone` maps to a semantic colour role.
 * Used for precip %, "weekend" markers, neutral metadata.
 */
export function Badge({ children, tone = 'neutral', solid = false, size = 'md', style = {} }) {
  const tones = {
    neutral: { soft: 'var(--surface-sunken)', softFg: 'var(--text-secondary)', solidBg: 'var(--slate-600)' },
    brand: { soft: 'var(--brand-soft)', softFg: 'var(--brand)', solidBg: 'var(--brand)' },
    accent: { soft: 'var(--accent-soft)', softFg: 'var(--amber-700)', solidBg: 'var(--accent)' },
    good: { soft: 'var(--comfort-good-bg)', softFg: 'var(--comfort-good-fg)', solidBg: 'var(--comfort-good-solid)' },
    fair: { soft: 'var(--comfort-fair-bg)', softFg: 'var(--comfort-fair-fg)', solidBg: 'var(--comfort-fair-solid)' },
    poor: { soft: 'var(--comfort-poor-bg)', softFg: 'var(--comfort-poor-fg)', solidBg: 'var(--comfort-poor-solid)' },
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '2px 8px' : '3px 10px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: pad,
        fontFamily: 'var(--font-sans)',
        fontSize: fs,
        fontWeight: 'var(--weight-semibold)',
        lineHeight: 1.4,
        color: solid ? '#fff' : t.softFg,
        background: solid ? t.solidBg : t.soft,
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
