import * as React from 'react';

export interface ComfortBadgeProps {
  /** Comfort score 0–100. */
  value: number;
  size?: 'sm' | 'md' | 'lg';
  /** Show the Ukrainian rating label + "Індекс комфорту" caption beside it. */
  showLabel?: boolean;
  style?: React.CSSProperties;
}

/**
 * The product's signature element — a 0–100 comfort score in its honest
 * semantic colour (good ≥70 / fair 40–69 / poor <40).
 */
export function ComfortBadge(props: ComfortBadgeProps): JSX.Element;

/** Returns 'good' | 'fair' | 'poor' for a score. */
export function comfortTone(value: number): 'good' | 'fair' | 'poor';
