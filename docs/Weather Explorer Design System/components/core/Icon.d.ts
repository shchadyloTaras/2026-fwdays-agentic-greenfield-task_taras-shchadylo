import * as React from 'react';

export interface IconProps {
  /** Lucide icon name, e.g. "sun", "cloud-rain", "search". */
  name: string;
  /** Pixel size (width = height). Default 20. */
  size?: number;
  /** Stroke width. Default 1.75 (the brand's calm weight). */
  stroke?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Accessible label; when omitted the icon is aria-hidden (decorative). */
  label?: string;
}

/** A single Lucide line icon at the brand's 1.75 stroke. */
export function Icon(props: IconProps): JSX.Element;
