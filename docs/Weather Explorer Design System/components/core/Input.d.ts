import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  /** Leading Lucide icon name, e.g. "search". */
  icon?: string;
  size?: 'md' | 'lg';
  /** Show a spinner at the trailing edge (e.g. while geocoding). */
  loading?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

/** Single-line text field with optional leading icon + loading spinner. */
export function Input(props: InputProps): JSX.Element;
