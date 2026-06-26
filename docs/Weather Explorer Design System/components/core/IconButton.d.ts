import * as React from 'react';

export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  /** Accessible label (required) — used for aria-label and tooltip. */
  label: string;
  variant?: 'solid' | 'soft' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}

/** Square, icon-only control for map controls, toggles, pin/close. */
export function IconButton(props: IconButtonProps): JSX.Element;
