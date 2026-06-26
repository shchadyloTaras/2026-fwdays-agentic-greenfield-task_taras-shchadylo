import * as React from 'react';
import { Condition } from './ConditionIcon';

export interface DayForecast {
  weekday: string;
  condition: Condition;
  night?: boolean;
  hi: number;
  lo: number;
  /** Precipitation probability %. */
  precip: number;
  /** Wind, e.g. "12 км/год" or a number. */
  wind: string | number;
  /** Comfort score 0–100. */
  comfort: number;
}

export interface DayCardProps {
  day: DayForecast;
  /** Adds a subtle "Вихідні" marker. */
  weekend?: boolean;
  selected?: boolean;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
}

/**
 * One day in the 7-day forecast grid — weekday, condition, hi/lo, precip,
 * wind and comfort score.
 */
export function DayCard(props: DayCardProps): JSX.Element;
