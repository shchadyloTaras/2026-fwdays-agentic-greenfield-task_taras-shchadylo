import * as React from 'react';

export interface ChipProps {
  children?: React.ReactNode;
  /** Optional leading Lucide icon. */
  icon?: string;
  /** Marks the active/current selection. */
  active?: boolean;
  onClick?: React.MouseEventHandler;
  /** When provided, renders a remove (×) button. */
  onRemove?: () => void;
  style?: React.CSSProperties;
}

/** Compact, optionally removable token — pinned cities in compare row. */
export function Chip(props: ChipProps): JSX.Element;
