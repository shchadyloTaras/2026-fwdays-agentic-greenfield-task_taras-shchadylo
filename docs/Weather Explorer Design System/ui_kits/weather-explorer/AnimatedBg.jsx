// AnimatedBg — condition-aware sky background (FR-ANIM). Day/night gradient
// driven by the active city's sunrise/sunset, with rain/snow/cloud motion.
// Respects prefers-reduced-motion (static gradient only). Never blocks
// pointer events.

function AnimatedBg({ condition = 'clear', night = false }) {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const grad = night
    ? 'linear-gradient(180deg, var(--sky-night-top), var(--sky-night-bottom))'
    : condition === 'rain' || condition === 'storm' || condition === 'cloudy'
      ? 'linear-gradient(180deg, #9fb3c4, #cdd9e3)'
      : 'linear-gradient(180deg, var(--sky-day-top), var(--sky-day-bottom))';

  const particles = [];
  if (!reduce && (condition === 'rain' || condition === 'storm')) {
    for (let i = 0; i < 60; i++) {
      particles.push(
        React.createElement('span', {
          key: i,
          style: {
            position: 'absolute',
            top: '-10%',
            left: (Math.random() * 100) + '%',
            width: 1.5,
            height: 14 + Math.random() * 10,
            background: 'linear-gradient(180deg, transparent, rgba(110,150,190,0.55))',
            animation: `nadv-rain ${0.5 + Math.random() * 0.5}s linear ${Math.random()}s infinite`,
          },
        })
      );
    }
  }
  if (!reduce && condition === 'snow') {
    for (let i = 0; i < 40; i++) {
      const sz = 3 + Math.random() * 4;
      particles.push(
        React.createElement('span', {
          key: i,
          style: {
            position: 'absolute',
            top: '-5%',
            left: (Math.random() * 100) + '%',
            width: sz, height: sz, borderRadius: '50%',
            background: 'rgba(255,255,255,0.85)',
            animation: `nadv-snow ${4 + Math.random() * 4}s linear ${Math.random() * 4}s infinite`,
          },
        })
      );
    }
  }

  return React.createElement(
    'div',
    {
      'aria-hidden': 'true',
      style: {
        position: 'absolute', inset: 0, overflow: 'hidden',
        background: grad, pointerEvents: 'none', zIndex: 0,
        transition: 'background 1.2s var(--ease-out)',
      },
    },
    // soft sun / moon glow
    (condition === 'clear' || condition === 'partly') && React.createElement('div', {
      style: {
        position: 'absolute', top: '8%', right: '12%', width: 180, height: 180,
        borderRadius: '50%',
        background: night
          ? 'radial-gradient(circle, rgba(220,232,244,0.5), transparent 70%)'
          : 'radial-gradient(circle, rgba(233,180,87,0.6), transparent 70%)',
        filter: 'blur(8px)',
        animation: reduce ? 'none' : 'nadv-glow 8s var(--ease-in-out) infinite',
      },
    }),
    ...particles,
    React.createElement('style', null, `
      @keyframes nadv-rain { to { transform: translateY(110vh); } }
      @keyframes nadv-snow { to { transform: translateY(108vh) translateX(20px); } }
      @keyframes nadv-glow { 0%,100% { opacity: 0.75; } 50% { opacity: 1; } }
    `)
  );
}

window.AnimatedBg = AnimatedBg;
