import React from 'react';

/**
 * Card — the brand's base surface. Soft rounding, low shadow, calm
 * border. `interactive` adds a gentle lift on hover (for clickable cards
 * such as day cards and city results).
 */
export function Card({
  children,
  interactive = false,
  selected = false,
  padding = 'var(--space-5)',
  as = 'div',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;

  return (
    <Tag
      onClick={onClick}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${selected ? 'var(--brand)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        boxShadow: selected
          ? '0 0 0 1px var(--brand), var(--shadow-md)'
          : hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        padding,
        cursor: interactive ? 'pointer' : 'default',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
