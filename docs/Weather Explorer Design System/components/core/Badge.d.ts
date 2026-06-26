import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** Semantic colour role. */
  tone?: 'neutral' | 'brand' | 'accent' | 'good' | 'fair' | 'poor';
  /** Filled (solid) vs soft tint. */
  solid?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/** Small status pill — precip %, weekend marker, metadata. */
export function Badge(props: BadgeProps): JSX.Element;
