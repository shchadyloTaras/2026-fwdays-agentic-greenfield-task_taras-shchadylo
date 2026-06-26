import * as React from 'react';

export interface ClockProps {
  /** IANA timezone (e.g. "Europe/Kyiv") to show a city's local time. Omit for the viewer's. */
  timeZone?: string;
  withIcon?: boolean;
  /** Also show the short date before the time. */
  withDate?: boolean;
  style?: React.CSSProperties;
}

/** Compact accessible live clock for the header, updates every second. */
export function Clock(props: ClockProps): JSX.Element;
