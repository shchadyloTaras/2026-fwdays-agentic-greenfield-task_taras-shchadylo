import React from 'react';
import { Card } from '../core/Card.jsx';
import { Icon } from '../core/Icon.jsx';
import { ConditionIcon } from './ConditionIcon.jsx';
import { ComfortBadge } from './ComfortBadge.jsx';

/**
 * DayCard — one day in the 7-day forecast grid. Weekday, condition,
 * hi/lo, precipitation and wind, plus the comfort score. `weekend` adds
 * a subtle marker; `selected` highlights the active day.
 */
export function DayCard({
  day,            // { weekday, condition, night, hi, lo, precip, wind, comfort }
  weekend = false,
  selected = false,
  onClick,
  style = {},
}) {
  const d = day || {};
  return (
    <Card
      interactive={!!onClick}
      selected={selected}
      padding="var(--space-4)"
      onClick={onClick}
      style={{ position: 'relative', minWidth: 0, ...style }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-base)', color: 'var(--text)' }}>
          {d.weekday}
        </span>
        {weekend && (
          <span style={{ fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--brand)' }}>
            Вихідні
          </span>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <ConditionIcon condition={d.condition} night={d.night} size={38} />
        <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums' }}>
          <span style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text)' }}>{d.hi}°</span>
          <span style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', marginLeft: 6 }}>{d.lo}°</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            <Icon name="droplets" size={13} style={{ color: 'var(--sky-400)' }} />
            <span className="tnum" style={{ fontFamily: 'var(--font-mono)' }}>{d.precip}%</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            <Icon name="wind" size={13} style={{ color: 'var(--text-muted)' }} />
            <span className="tnum" style={{ fontFamily: 'var(--font-mono)' }}>{d.wind}</span>
          </span>
        </div>
        <ComfortBadge value={d.comfort} size="sm" />
      </div>
    </Card>
  );
}
