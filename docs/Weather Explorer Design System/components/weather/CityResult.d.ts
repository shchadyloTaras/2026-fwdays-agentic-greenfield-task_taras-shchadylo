import * as React from 'react';

export interface CityResultProps {
  /** City name. */
  name: string;
  /** Admin region / oblast. */
  region?: string;
  country?: string;
  /** Optional flag emoji (the one sanctioned emoji use). */
  flag?: string;
  /** Keyboard-highlighted / hovered state. */
  active?: boolean;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
}

/** One geocoding suggestion row: city, region, country, optional flag. */
export function CityResult(props: CityResultProps): JSX.Element;
