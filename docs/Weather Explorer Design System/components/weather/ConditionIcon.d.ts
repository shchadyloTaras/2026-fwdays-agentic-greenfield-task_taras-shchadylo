import * as React from 'react';

export type Condition =
  | 'clear' | 'partly' | 'cloudy' | 'fog'
  | 'drizzle' | 'rain' | 'snow' | 'storm';

export interface ConditionIconProps {
  /** Weather condition key. */
  condition?: Condition;
  /** Render the night variant (driven by the location's sunrise/sunset). */
  night?: boolean;
  size?: number;
  /** Colour treatment. "auto" tints clear-day amber, night sky-blue. */
  tone?: 'auto' | 'muted' | 'brand' | 'inherit';
  style?: React.CSSProperties;
}

/** Weather condition → Lucide glyph with an accessible Ukrainian name. */
export function ConditionIcon(props: ConditionIconProps): JSX.Element;
