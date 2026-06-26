import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Optional text label rendered after the switch. */
  label?: string;
  id?: string;
  style?: React.CSSProperties;
}

/** Calm pill toggle for theme and the "Compare weekend" view switch. */
export function Switch(props: SwitchProps): JSX.Element;
