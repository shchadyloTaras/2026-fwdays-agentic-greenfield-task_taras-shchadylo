import * as React from 'react';

export type TabItem = string | { value: string; label: string };

export interface TabsProps {
  /** Tab items — plain strings or {value, label}. */
  tabs: TabItem[];
  /** Active tab value. */
  value: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/** Calm segmented control (pill style) for switching views. */
export function Tabs(props: TabsProps): JSX.Element;
