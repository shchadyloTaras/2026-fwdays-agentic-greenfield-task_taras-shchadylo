import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Clock — compact, accessible live local-time clock for the header
 * (FR-CLOCK-01). Updates every second. Mono, tabular figures so the
 * width never jitters. Pass `timeZone` to show a city's local time.
 */
export function Clock({ timeZone, withIcon = true, withDate = false, style = {} }) {
  const [now, setNow] = React.useState(() => new Date());

  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeFmt = new Intl.DateTimeFormat('uk-UA', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false, ...(timeZone ? { timeZone } : {}),
  });
  const dateFmt = new Intl.DateTimeFormat('uk-UA', {
    weekday: 'short', day: 'numeric', month: 'short',
    ...(timeZone ? { timeZone } : {}),
  });

  const time = timeFmt.format(now);
  const date = dateFmt.format(now);

  return (
    <span
      role="timer"
      aria-live="off"
      aria-label={`Місцевий час ${time}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...style }}
    >
      {withIcon && <Icon name="clock" size={16} style={{ color: 'var(--text-muted)' }} />}
      {withDate && (
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{date}</span>
      )}
      <span
        className="tnum"
        style={{
          fontFamily: 'var(--font-mono)',
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 'var(--weight-medium)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text)',
          letterSpacing: '0.02em',
        }}
      >
        {time}
      </span>
    </span>
  );
}
