import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Adds hover lift + pointer cursor for clickable cards. */
  interactive?: boolean;
  /** Selected state — brand border + ring. */
  selected?: boolean;
  /** CSS padding value. Default var(--space-5). */
  padding?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
}

/** The brand's base surface — soft rounding, low shadow, calm border. */
export function Card(props: CardProps): JSX.Element;
