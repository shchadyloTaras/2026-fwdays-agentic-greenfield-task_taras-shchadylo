import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * ConditionIcon — maps a weather condition (and day/night) to the right
 * Lucide glyph with an accessible Ukrainian name. The single source of
 * truth for which icon represents which sky.
 */
const MAP = {
  clear:   { day: 'sun', night: 'moon', uk: 'Ясно' },
  partly:  { day: 'cloud-sun', night: 'cloud-moon', uk: 'Мінлива хмарність' },
  cloudy:  { day: 'cloud', night: 'cloud', uk: 'Хмарно' },
  fog:     { day: 'cloud-fog', night: 'cloud-fog', uk: 'Туман' },
  drizzle: { day: 'cloud-drizzle', night: 'cloud-drizzle', uk: 'Мряка' },
  rain:    { day: 'cloud-rain', night: 'cloud-rain', uk: 'Дощ' },
  snow:    { day: 'cloud-snow', night: 'cloud-snow', uk: 'Сніг' },
  storm:   { day: 'cloud-lightning', night: 'cloud-lightning', uk: 'Гроза' },
};

export function ConditionIcon({ condition = 'clear', night = false, size = 24, tone = 'auto', style = {} }) {
  const entry = MAP[condition] || MAP.clear;
  const name = night ? entry.night : entry.day;

  const tones = {
    auto: condition === 'clear' && !night ? 'var(--accent)'
        : night ? 'var(--sky-300)'
        : 'var(--text-secondary)',
    muted: 'var(--text-muted)',
    brand: 'var(--brand)',
    inherit: 'currentColor',
  };

  return <Icon name={name} size={size} label={entry.uk} style={{ color: tones[tone] || tones.auto, ...style }} />;
}

/** The Ukrainian label for a condition key (for captions/aria). */
ConditionIcon.labelFor = (condition) => (MAP[condition] || MAP.clear).uk;
