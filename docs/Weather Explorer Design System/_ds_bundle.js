/* @ds-bundle: {"format":3,"namespace":"WeatherExplorerDesignSystem_019e02","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"CityResult","sourcePath":"components/weather/CityResult.jsx"},{"name":"Clock","sourcePath":"components/weather/Clock.jsx"},{"name":"ComfortBadge","sourcePath":"components/weather/ComfortBadge.jsx"},{"name":"ConditionIcon","sourcePath":"components/weather/ConditionIcon.jsx"},{"name":"DayCard","sourcePath":"components/weather/DayCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b9150046d0da","components/core/Button.jsx":"cfb4ba904060","components/core/Card.jsx":"06a26db461dc","components/core/Chip.jsx":"c7fdca0fba5a","components/core/Icon.jsx":"f9ddc7500d30","components/core/IconButton.jsx":"65498fd29563","components/core/Input.jsx":"8691bf0d2908","components/core/Switch.jsx":"d5aa53976c9e","components/core/Tabs.jsx":"5fd363cb47d0","components/weather/CityResult.jsx":"5ccdca72c4a2","components/weather/Clock.jsx":"8dde5a03512f","components/weather/ComfortBadge.jsx":"55e9b072be5e","components/weather/ConditionIcon.jsx":"2dce855e3973","components/weather/DayCard.jsx":"a7b68fd09b0b","ui_kits/weather-explorer/AnimatedBg.jsx":"0985f5a642ec","ui_kits/weather-explorer/App.jsx":"e231740171c5","ui_kits/weather-explorer/CompareTable.jsx":"61ff3a8f6f20","ui_kits/weather-explorer/Footer.jsx":"b77ce78bd184","ui_kits/weather-explorer/ForecastGrid.jsx":"5f80a38c7f6f","ui_kits/weather-explorer/Header.jsx":"35ddb8675151","ui_kits/weather-explorer/HourlyChart.jsx":"b9b3264ee3e3","ui_kits/weather-explorer/MapPanel.jsx":"3907ebfd5671","ui_kits/weather-explorer/SearchBar.jsx":"2e6b68805c05","ui_kits/weather-explorer/WeekendHighlight.jsx":"51c4c7542942","ui_kits/weather-explorer/data.js":"0ce2df8f04f4"},"inlinedExternals":[],"unexposedExports":[{"name":"comfortTone","sourcePath":"components/weather/ComfortBadge.jsx"}]} */

(() => {

const __ds_ns = (window.WeatherExplorerDesignSystem_019e02 = window.WeatherExplorerDesignSystem_019e02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — small status pill. `tone` maps to a semantic colour role.
 * Used for precip %, "weekend" markers, neutral metadata.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  size = 'md',
  style = {}
}) {
  const tones = {
    neutral: {
      soft: 'var(--surface-sunken)',
      softFg: 'var(--text-secondary)',
      solidBg: 'var(--slate-600)'
    },
    brand: {
      soft: 'var(--brand-soft)',
      softFg: 'var(--brand)',
      solidBg: 'var(--brand)'
    },
    accent: {
      soft: 'var(--accent-soft)',
      softFg: 'var(--amber-700)',
      solidBg: 'var(--accent)'
    },
    good: {
      soft: 'var(--comfort-good-bg)',
      softFg: 'var(--comfort-good-fg)',
      solidBg: 'var(--comfort-good-solid)'
    },
    fair: {
      soft: 'var(--comfort-fair-bg)',
      softFg: 'var(--comfort-fair-fg)',
      solidBg: 'var(--comfort-fair-solid)'
    },
    poor: {
      soft: 'var(--comfort-poor-bg)',
      softFg: 'var(--comfort-poor-fg)',
      solidBg: 'var(--comfort-poor-solid)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '2px 8px' : '3px 10px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: pad,
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.4,
      color: solid ? '#fff' : t.softFg,
      background: solid ? t.solidBg : t.soft,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the brand's base surface. Soft rounding, low shadow, calm
 * border. `interactive` adds a gentle lift on hover (for clickable cards
 * such as day cards and city results).
 */
function Card({
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
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface)',
      border: `1px solid ${selected ? 'var(--brand)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: selected ? '0 0 0 1px var(--brand), var(--shadow-md)' : hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding,
      cursor: interactive ? 'pointer' : 'default',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * Icon — thin wrapper over Lucide. Renders a single line icon at the
 * brand's calm 1.75 stroke. Requires the Lucide UMD script to be loaded
 * globally (window.lucide); the design-system cards and UI kits load it
 * from CDN. Colour follows `currentColor`.
 */
function Icon({
  name,
  size = 20,
  stroke = 1.75,
  className = '',
  style = {},
  label
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', name);
    host.appendChild(el);
    try {
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        attrs: {
          width: size,
          height: size,
          'stroke-width': stroke
        }
      });
    } catch (e) {/* lucide not ready */}
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      color: 'currentColor',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's primary action control. Calm, rounded, with a
 * gentle press. Variants: primary (sky), secondary (tinted), ghost,
 * outline. Sizes: sm / md / lg.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      h: 'var(--control-h-sm)',
      px: '12px',
      fs: 'var(--text-sm)',
      icon: 16,
      gap: '6px'
    },
    md: {
      h: 'var(--control-h)',
      px: '18px',
      fs: 'var(--text-sm)',
      icon: 18,
      gap: '8px'
    },
    lg: {
      h: 'var(--control-h-lg)',
      px: '24px',
      fs: 'var(--text-md)',
      icon: 20,
      gap: '10px'
    }
  };
  const s = sizes[size] || sizes.md;
  const palette = {
    primary: {
      bg: hover ? 'var(--brand-hover)' : 'var(--brand)',
      fg: 'var(--text-on-brand)',
      border: 'transparent',
      shadow: hover ? 'var(--shadow-sm)' : 'var(--shadow-xs)'
    },
    secondary: {
      bg: hover ? 'var(--brand-soft-hover)' : 'var(--brand-soft)',
      fg: 'var(--brand)',
      border: 'var(--brand-border)',
      shadow: 'none'
    },
    outline: {
      bg: hover ? 'var(--surface-hover)' : 'var(--surface)',
      fg: 'var(--text)',
      border: 'var(--border-strong)',
      shadow: 'none'
    },
    ghost: {
      bg: hover ? 'var(--surface-hover)' : 'transparent',
      fg: 'var(--text-secondary)',
      border: 'transparent',
      shadow: 'none'
    }
  };
  const p = palette[variant] || palette.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}`,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      color: p.fg,
      background: p.bg,
      border: `1px solid ${p.border}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: p.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transform: active && !disabled ? 'translateY(0.5px) scale(0.99)' : 'none',
      transition: 'var(--transition-control)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
/**
 * Chip — compact, optionally removable token. Used for pinned cities in
 * the weekend-compare row. `active` marks the current location.
 */
function Chip({
  children,
  icon,
  active = false,
  onClick,
  onRemove,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 34,
      padding: onRemove ? '0 6px 0 12px' : '0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: active ? 'var(--brand)' : 'var(--text-secondary)',
      background: active ? 'var(--brand-soft)' : hover ? 'var(--surface-hover)' : 'var(--surface)',
      border: `1px solid ${active ? 'var(--brand-border)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    style: {
      color: active ? 'var(--brand)' : 'var(--text-muted)'
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      marginLeft: 1,
      border: 'none',
      borderRadius: '50%',
      background: 'transparent',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      transition: 'var(--transition-control)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface-sunken)';
      e.currentTarget.style.color = 'var(--text-secondary)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-faint)';
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square, icon-only control. Used for map controls,
 * theme toggle, pin/unpin, close. Always pass `label` for accessibility.
 */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 22
  };
  const dim = sizes[size] || sizes.md;
  const palette = {
    solid: {
      bg: hover ? 'var(--brand-hover)' : 'var(--brand)',
      fg: 'var(--text-on-brand)',
      border: 'transparent',
      shadow: 'var(--shadow-xs)'
    },
    soft: {
      bg: hover ? 'var(--brand-soft-hover)' : 'var(--brand-soft)',
      fg: 'var(--brand)',
      border: 'var(--brand-border)',
      shadow: 'none'
    },
    outline: {
      bg: hover ? 'var(--surface-hover)' : 'var(--surface)',
      fg: 'var(--text-secondary)',
      border: 'var(--border-strong)',
      shadow: 'var(--shadow-xs)'
    },
    ghost: {
      bg: hover ? 'var(--surface-hover)' : 'transparent',
      fg: 'var(--text-secondary)',
      border: 'transparent',
      shadow: 'none'
    }
  };
  const p = palette[variant] || palette.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      color: p.fg,
      background: p.bg,
      border: `1px solid ${p.border}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: p.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transform: active && !disabled ? 'scale(0.94)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSizes[size] || 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Optional leading icon and a "loading"
 * affordance (used by the city search while geocoding). Sunken field
 * surface, calm focus ring.
 */
function Input({
  value,
  onChange,
  placeholder,
  icon,
  size = 'md',
  loading = false,
  disabled = false,
  type = 'text',
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    md: 'var(--control-h)',
    lg: 'var(--control-h-lg)'
  };
  const fs = {
    md: 'var(--text-sm)',
    lg: 'var(--text-md)'
  };
  const iconSize = size === 'lg' ? 20 : 18;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      height: heights[size] || heights.md,
      padding: '0 14px',
      background: 'var(--surface-sunken)',
      border: `1px solid ${focus ? 'var(--brand)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-inset)',
      transition: 'var(--transition-control)',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize,
    style: {
      color: focus ? 'var(--brand)' : 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: fs[size] || fs.md,
      color: 'var(--text)',
      ...inputStyle
    }
  }, rest)), loading && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      flex: 'none',
      border: '2px solid var(--border-strong)',
      borderTopColor: 'var(--brand)',
      borderRadius: '50%',
      animation: 'nadv-spin 0.7s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes nadv-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/**
 * Switch — calm pill toggle. Used for theme (day/night) and the
 * "Compare weekend" view switch.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {}
}) {
  const track = checked ? 'var(--brand)' : 'var(--border-strong)';
  const knob = 'var(--surface)';
  const sw = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-label": !label ? 'toggle' : undefined,
    id: id,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flex: 'none',
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: track,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: knob,
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  }));
  if (!label) return sw;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, sw, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Tabs — calm segmented control. Used to switch between Forecast / Map /
 * Compare. Underline-free; the active tab gets a soft surface pill.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  size = 'md',
  style = {}
}) {
  const pad = size === 'sm' ? '6px 12px' : '8px 16px';
  const fs = size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, tabs.map(t => {
    const key = typeof t === 'string' ? t : t.value;
    const labelText = typeof t === 'string' ? t : t.label;
    const isActive = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(key),
      style: {
        padding: pad,
        fontFamily: 'var(--font-sans)',
        fontSize: fs,
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: isActive ? 'var(--brand)' : 'var(--text-muted)',
        background: isActive ? 'var(--surface)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        boxShadow: isActive ? 'var(--shadow-xs)' : 'none',
        cursor: 'pointer',
        transition: 'var(--transition-control)',
        whiteSpace: 'nowrap'
      }
    }, labelText);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/weather/CityResult.jsx
try { (() => {
/**
 * CityResult — one geocoding suggestion row (FR-SEARCH-02): city name,
 * admin region, country, and an optional flag emoji (the one place the
 * brand allows emoji). Keyboard + pointer selectable.
 */
function CityResult({
  name,
  region,
  country,
  flag,
  active = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const highlight = active || hover;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '10px 14px',
      textAlign: 'left',
      background: highlight ? 'var(--brand-soft)' : 'transparent',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 18,
    style: {
      color: highlight ? 'var(--brand)' : 'var(--text-faint)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-base)',
      color: 'var(--text)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), (region || country) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, [region, country].filter(Boolean).join(', '))), flag && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 20,
      lineHeight: 1,
      flex: 'none'
    }
  }, flag));
}
Object.assign(__ds_scope, { CityResult });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/weather/CityResult.jsx", error: String((e && e.message) || e) }); }

// components/weather/Clock.jsx
try { (() => {
/**
 * Clock — compact, accessible live local-time clock for the header
 * (FR-CLOCK-01). Updates every second. Mono, tabular figures so the
 * width never jitters. Pass `timeZone` to show a city's local time.
 */
function Clock({
  timeZone,
  withIcon = true,
  withDate = false,
  style = {}
}) {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const timeFmt = new Intl.DateTimeFormat('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    ...(timeZone ? {
      timeZone
    } : {})
  });
  const dateFmt = new Intl.DateTimeFormat('uk-UA', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    ...(timeZone ? {
      timeZone
    } : {})
  });
  const time = timeFmt.format(now);
  const date = dateFmt.format(now);
  return /*#__PURE__*/React.createElement("span", {
    role: "timer",
    "aria-live": "off",
    "aria-label": `Місцевий час ${time}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, withIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 16,
    style: {
      color: 'var(--text-muted)'
    }
  }), withDate && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, date), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text)',
      letterSpacing: '0.02em'
    }
  }, time));
}
Object.assign(__ds_scope, { Clock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/weather/Clock.jsx", error: String((e && e.message) || e) }); }

// components/weather/ComfortBadge.jsx
try { (() => {
/**
 * ComfortBadge — the product's signature element. Shows a 0–100 comfort
 * score with the honest semantic colour (good ≥70 / fair 40–69 / poor <40).
 * Sizes: sm (inline in day cards), md, lg (hero weekend score).
 */
function comfortTone(value) {
  if (value >= 70) return 'good';
  if (value >= 40) return 'fair';
  return 'poor';
}
const UK_LABEL = {
  good: 'Чудово',
  fair: 'Помірно',
  poor: 'Краще вдома'
};
function ComfortBadge({
  value,
  size = 'md',
  showLabel = false,
  style = {}
}) {
  const tone = comfortTone(value);
  const bg = `var(--comfort-${tone}-solid)`;
  const dims = {
    sm: {
      d: 34,
      fs: 'var(--text-sm)'
    },
    md: {
      d: 48,
      fs: 'var(--text-lg)'
    },
    lg: {
      d: 92,
      fs: 'var(--text-3xl)'
    }
  };
  const c = dims[size] || dims.md;
  const circle = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: c.d,
      height: c.d,
      flex: 'none',
      borderRadius: '50%',
      background: bg,
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 'var(--weight-bold)',
      fontSize: c.fs,
      lineHeight: 1,
      boxShadow: size === 'lg' ? 'var(--shadow-md)' : 'none',
      ...(showLabel ? {} : style)
    }
  }, Math.round(value));
  if (!showLabel) return circle;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, circle, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: `var(--comfort-${tone}-fg)`
    }
  }, UK_LABEL[tone]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "\u0406\u043D\u0434\u0435\u043A\u0441 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0443")));
}
ComfortBadge.labelFor = value => UK_LABEL[comfortTone(value)];
Object.assign(__ds_scope, { comfortTone, ComfortBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/weather/ComfortBadge.jsx", error: String((e && e.message) || e) }); }

// components/weather/ConditionIcon.jsx
try { (() => {
/**
 * ConditionIcon — maps a weather condition (and day/night) to the right
 * Lucide glyph with an accessible Ukrainian name. The single source of
 * truth for which icon represents which sky.
 */
const MAP = {
  clear: {
    day: 'sun',
    night: 'moon',
    uk: 'Ясно'
  },
  partly: {
    day: 'cloud-sun',
    night: 'cloud-moon',
    uk: 'Мінлива хмарність'
  },
  cloudy: {
    day: 'cloud',
    night: 'cloud',
    uk: 'Хмарно'
  },
  fog: {
    day: 'cloud-fog',
    night: 'cloud-fog',
    uk: 'Туман'
  },
  drizzle: {
    day: 'cloud-drizzle',
    night: 'cloud-drizzle',
    uk: 'Мряка'
  },
  rain: {
    day: 'cloud-rain',
    night: 'cloud-rain',
    uk: 'Дощ'
  },
  snow: {
    day: 'cloud-snow',
    night: 'cloud-snow',
    uk: 'Сніг'
  },
  storm: {
    day: 'cloud-lightning',
    night: 'cloud-lightning',
    uk: 'Гроза'
  }
};
function ConditionIcon({
  condition = 'clear',
  night = false,
  size = 24,
  tone = 'auto',
  style = {}
}) {
  const entry = MAP[condition] || MAP.clear;
  const name = night ? entry.night : entry.day;
  const tones = {
    auto: condition === 'clear' && !night ? 'var(--accent)' : night ? 'var(--sky-300)' : 'var(--text-secondary)',
    muted: 'var(--text-muted)',
    brand: 'var(--brand)',
    inherit: 'currentColor'
  };
  return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size,
    label: entry.uk,
    style: {
      color: tones[tone] || tones.auto,
      ...style
    }
  });
}

/** The Ukrainian label for a condition key (for captions/aria). */
ConditionIcon.labelFor = condition => (MAP[condition] || MAP.clear).uk;
Object.assign(__ds_scope, { ConditionIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/weather/ConditionIcon.jsx", error: String((e && e.message) || e) }); }

// components/weather/DayCard.jsx
try { (() => {
/**
 * DayCard — one day in the 7-day forecast grid. Weekday, condition,
 * hi/lo, precipitation and wind, plus the comfort score. `weekend` adds
 * a subtle marker; `selected` highlights the active day.
 */
function DayCard({
  day,
  // { weekday, condition, night, hi, lo, precip, wind, comfort }
  weekend = false,
  selected = false,
  onClick,
  style = {}
}) {
  const d = day || {};
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: !!onClick,
    selected: selected,
    padding: "var(--space-4)",
    onClick: onClick,
    style: {
      position: 'relative',
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--text)'
    }
  }, d.weekday), weekend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--brand)'
    }
  }, "\u0412\u0438\u0445\u0456\u0434\u043D\u0456")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ConditionIcon, {
    condition: d.condition,
    night: d.night,
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text)'
    }
  }, d.hi, "\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      marginLeft: 6
    }
  }, d.lo, "\xB0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "droplets",
    size: 13,
    style: {
      color: 'var(--sky-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, d.precip, "%")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "wind",
    size: 13,
    style: {
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, d.wind))), /*#__PURE__*/React.createElement(__ds_scope.ComfortBadge, {
    value: d.comfort,
    size: "sm"
  })));
}
Object.assign(__ds_scope, { DayCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/weather/DayCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/AnimatedBg.jsx
try { (() => {
// AnimatedBg — condition-aware sky background (FR-ANIM). Day/night gradient
// driven by the active city's sunrise/sunset, with rain/snow/cloud motion.
// Respects prefers-reduced-motion (static gradient only). Never blocks
// pointer events.

function AnimatedBg({
  condition = 'clear',
  night = false
}) {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const grad = night ? 'linear-gradient(180deg, var(--sky-night-top), var(--sky-night-bottom))' : condition === 'rain' || condition === 'storm' || condition === 'cloudy' ? 'linear-gradient(180deg, #9fb3c4, #cdd9e3)' : 'linear-gradient(180deg, var(--sky-day-top), var(--sky-day-bottom))';
  const particles = [];
  if (!reduce && (condition === 'rain' || condition === 'storm')) {
    for (let i = 0; i < 60; i++) {
      particles.push(React.createElement('span', {
        key: i,
        style: {
          position: 'absolute',
          top: '-10%',
          left: Math.random() * 100 + '%',
          width: 1.5,
          height: 14 + Math.random() * 10,
          background: 'linear-gradient(180deg, transparent, rgba(110,150,190,0.55))',
          animation: `nadv-rain ${0.5 + Math.random() * 0.5}s linear ${Math.random()}s infinite`
        }
      }));
    }
  }
  if (!reduce && condition === 'snow') {
    for (let i = 0; i < 40; i++) {
      const sz = 3 + Math.random() * 4;
      particles.push(React.createElement('span', {
        key: i,
        style: {
          position: 'absolute',
          top: '-5%',
          left: Math.random() * 100 + '%',
          width: sz,
          height: sz,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.85)',
          animation: `nadv-snow ${4 + Math.random() * 4}s linear ${Math.random() * 4}s infinite`
        }
      }));
    }
  }
  return React.createElement('div', {
    'aria-hidden': 'true',
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      background: grad,
      pointerEvents: 'none',
      zIndex: 0,
      transition: 'background 1.2s var(--ease-out)'
    }
  },
  // soft sun / moon glow
  (condition === 'clear' || condition === 'partly') && React.createElement('div', {
    style: {
      position: 'absolute',
      top: '8%',
      right: '12%',
      width: 180,
      height: 180,
      borderRadius: '50%',
      background: night ? 'radial-gradient(circle, rgba(220,232,244,0.5), transparent 70%)' : 'radial-gradient(circle, rgba(233,180,87,0.6), transparent 70%)',
      filter: 'blur(8px)',
      animation: reduce ? 'none' : 'nadv-glow 8s var(--ease-in-out) infinite'
    }
  }), ...particles, React.createElement('style', null, `
      @keyframes nadv-rain { to { transform: translateY(110vh); } }
      @keyframes nadv-snow { to { transform: translateY(108vh) translateX(20px); } }
      @keyframes nadv-glow { 0%,100% { opacity: 0.75; } 50% { opacity: 1; } }
    `));
}
window.AnimatedBg = AnimatedBg;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/AnimatedBg.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/App.jsx
try { (() => {
// App — the Надворі single-page experience. State machine:
// empty (hero search) → forecast → optional weekend-compare.
function App() {
  const DS = window.WeatherExplorerDesignSystem_019e02;
  const {
    Tabs,
    Button,
    Chip
  } = DS;
  const D = window.NADVORI_DATA;
  const [dark, setDark] = React.useState(false);
  const [city, setCity] = React.useState(null);
  const [view, setView] = React.useState('week'); // week | compare
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [pinned, setPinned] = React.useState([]); // up to 3 cities

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);
  function selectCity(c) {
    setCity(c);
    setSelectedIdx(0);
    setView('week');
    setPinned(p => p.find(x => x.id === c.id) ? p : [...p, c].slice(-3));
  }
  function unpin(id) {
    setPinned(p => p.filter(x => x.id !== id));
  }
  const cond = city ? city.now.condition : 'clear';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AnimatedBg, {
    condition: cond,
    night: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(AppHeader, {
    city: city,
    dark: dark,
    onToggleTheme: () => setDark(d => !d)
  }), !city ?
  /*#__PURE__*/
  /* ---- Empty state: centered hero (FR-SHELL-03) ---- */
  React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 22px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-0.02em',
      color: 'var(--text)',
      margin: '0 0 10px'
    }
  }, "\u041A\u0443\u0434\u0438 \u043F\u043E\u0457\u0445\u0430\u0442\u0438 \u043D\u0430 \u0432\u0438\u0445\u0456\u0434\u043D\u0456"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      margin: '0 0 28px',
      textWrap: 'pretty'
    }
  }, "\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E \u0456 \u0434\u0456\u0437\u043D\u0430\u0439\u0442\u0435\u0441\u044C, \u0447\u0438 \u043F\u0440\u0438\u0454\u043C\u043D\u043E \u0442\u0430\u043C \u0431\u0443\u0434\u0435 \u043D\u0430\u0434\u0432\u043E\u0440\u0456. \u041E\u0434\u0438\u043D \u0456\u043D\u0434\u0435\u043A\u0441 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0443 \u0437\u0430\u043C\u0456\u0441\u0442\u044C \u043F\u2019\u044F\u0442\u0438 \u0446\u0438\u0444\u0440."), /*#__PURE__*/React.createElement(SearchBar, {
    size: "lg",
    autoFocus: true,
    onSelect: selectCity
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, ['lviv', 'kyiv', 'odesa'].map(id => /*#__PURE__*/React.createElement(Chip, {
    key: id,
    icon: "map-pin",
    onClick: () => selectCity(D.cities[id])
  }, D.cities[id].name))))) :
  /*#__PURE__*/
  /* ---- Forecast / compare ---- */
  React.createElement("main", {
    style: {
      flex: 1,
      width: '100%',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-6) 22px 0',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      marginBottom: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      minWidth: 260,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    size: "md",
    onSelect: selectCity
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, pinned.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c.id,
    icon: "map-pin",
    active: c.id === city.id,
    onClick: () => selectCity(c),
    onRemove: pinned.length > 1 ? () => unpin(c.id) : undefined
  }, c.name))), pinned.length > 1 && /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'week',
      label: '7 днів'
    }, {
      value: 'compare',
      label: 'Вихідні'
    }],
    value: view,
    onChange: setView
  })), view === 'week' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(WeekendHighlight, {
    city: city
  }), /*#__PURE__*/React.createElement(ForecastGrid, {
    city: city,
    selectedIdx: selectedIdx,
    onSelect: setSelectedIdx
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
      gap: 'var(--space-5)'
    },
    className: "nadv-split"
  }, /*#__PURE__*/React.createElement(HourlyChart, {
    city: city
  }), /*#__PURE__*/React.createElement(MapPanel, {
    city: city
  }))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text)',
      margin: 0
    }
  }, "\u041F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0445"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "\u0417\u0430\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u043E \u043C\u0456\u0441\u0442: ", pinned.length, " \u0437 3")), /*#__PURE__*/React.createElement(CompareTable, {
    cities: pinned,
    activeId: city.id,
    onMakeActive: selectCity
  })), /*#__PURE__*/React.createElement(AppFooter, null))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 880px) { .nadv-split { grid-template-columns: 1fr !important; } }
      `));
}
window.NadvoriApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/CompareTable.jsx
try { (() => {
// CompareTable — weekend comparison across pinned cities (FR-COMPARE-02/03).
// Columns: each city; rows: Sat / Sun hi-lo, precip, comfort. Sticky header
// with city name + "make active".
function CompareTable({
  cities,
  activeId,
  onMakeActive
}) {
  const {
    ComfortBadge,
    Button,
    ConditionIcon
  } = window.WeatherExplorerDesignSystem_019e02;
  const D = window.NADVORI_DATA;
  const cols = cities.map(c => ({
    city: c,
    wk: D.weekend(c)
  }));
  const cell = {
    padding: '12px 16px',
    textAlign: 'left',
    borderBottom: '1px solid var(--border-subtle)'
  };
  const rowLabel = {
    ...cell,
    color: 'var(--text-muted)',
    fontSize: 'var(--text-sm)',
    fontWeight: 600,
    width: 120,
    position: 'sticky',
    left: 0,
    background: 'var(--surface)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%',
      minWidth: 640
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...rowLabel,
      zIndex: 2,
      top: 0,
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, "\u0412\u0438\u0445\u0456\u0434\u043D\u0456"), cols.map(({
    city,
    wk
  }) => /*#__PURE__*/React.createElement("th", {
    key: city.id,
    style: {
      ...cell,
      background: 'var(--surface)',
      minWidth: 220,
      verticalAlign: 'top'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-md)',
      color: 'var(--text)'
    }
  }, city.name), /*#__PURE__*/React.createElement(ComfortBadge, {
    value: wk.avg,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, "\u0441\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0456\u043D\u0434\u0435\u043A\u0441 \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0445")), city.id === activeId ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--brand)',
      fontWeight: 600
    }
  }, "\u0430\u043A\u0442\u0438\u0432\u043D\u0435") : /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => onMakeActive(city)
  }, "\u043E\u0431\u0440\u0430\u0442\u0438")))))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowLabel
  }, "\u0421\u0443\u0431\u043E\u0442\u0430"), cols.map(({
    wk,
    city
  }) => {
    const d = wk.sat;
    return /*#__PURE__*/React.createElement("td", {
      key: city.id,
      style: cell
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ConditionIcon, {
      condition: d.condition,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--text)'
      }
    }, d.hi, "\xB0 / ", d.lo, "\xB0"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, d.precip, "%"), /*#__PURE__*/React.createElement(ComfortBadge, {
      value: d.comfort,
      size: "sm"
    })));
  })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowLabel
  }, "\u041D\u0435\u0434\u0456\u043B\u044F"), cols.map(({
    wk,
    city
  }) => {
    const d = wk.sun;
    return /*#__PURE__*/React.createElement("td", {
      key: city.id,
      style: cell
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ConditionIcon, {
      condition: d.condition,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--text)'
      }
    }, d.hi, "\xB0 / ", d.lo, "\xB0"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, d.precip, "%"), /*#__PURE__*/React.createElement(ComfortBadge, {
      value: d.comfort,
      size: "sm"
    })));
  })))));
}
window.CompareTable = CompareTable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/CompareTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/Footer.jsx
try { (() => {
// Footer — deterministic Ukrainian joke (FR-JOKES-01) + Open-Meteo / OSM
// credits (BC-BRAND-02). Calm, no exclamation marks.
function AppFooter() {
  const {
    Icon
  } = window.WeatherExplorerDesignSystem_019e02;
  const D = window.NADVORI_DATA;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'var(--space-7)',
      padding: '22px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-sm)',
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 16,
    style: {
      color: 'var(--text-faint)',
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: 'pretty'
    }
  }, D.jokeOfTheDay())), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "\u0414\u0430\u043D\u0456: ", /*#__PURE__*/React.createElement("a", {
    href: "https://open-meteo.com",
    style: {
      color: 'var(--text-link)'
    }
  }, "Open-Meteo"), ' · ', "\u041C\u0430\u043F\u0430: ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.openstreetmap.org/copyright",
    style: {
      color: 'var(--text-link)'
    }
  }, "OpenStreetMap")));
}
window.AppFooter = AppFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/ForecastGrid.jsx
try { (() => {
// ForecastGrid — the 7-day day cards (FR-FORECAST-02). Weekend days
// (indices 5 & 6 in the demo data) get the marker.
function ForecastGrid({
  city,
  selectedIdx,
  onSelect
}) {
  const {
    DayCard
  } = window.WeatherExplorerDesignSystem_019e02;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: 'var(--space-4)'
    }
  }, city.days.map((d, i) => /*#__PURE__*/React.createElement(DayCard, {
    key: i,
    day: d,
    weekend: i === 5 || i === 6,
    selected: i === selectedIdx,
    onClick: () => onSelect(i)
  })));
}
window.ForecastGrid = ForecastGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/ForecastGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/Header.jsx
try { (() => {
// Header — logo, live clock, theme toggle (FR-SHELL-01, FR-CLOCK-01).
function AppHeader({
  city,
  dark,
  onToggleTheme
}) {
  const {
    Clock,
    IconButton
  } = window.WeatherExplorerDesignSystem_019e02;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 22px',
      background: 'color-mix(in oklab, var(--surface) 82%, transparent)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 34,
      height: 34,
      borderRadius: 11,
      overflow: 'hidden',
      flex: 'none',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--brand)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 15,
      height: 15,
      borderRadius: '50%',
      background: 'var(--amber-300)',
      left: 9.5,
      top: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 12,
      background: 'var(--sky-700)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-md)',
      letterSpacing: '-0.01em',
      color: 'var(--text)'
    }
  }, "\u041D\u0430\u0434\u0432\u043E\u0440\u0456"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      fontWeight: 600
    }
  }, "Weather Explorer"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Clock, {
    timeZone: city ? city.tz : 'Europe/Kyiv'
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: dark ? 'sun' : 'moon',
    label: dark ? 'Денна тема' : 'Нічна тема',
    variant: "ghost",
    onClick: onToggleTheme
  })));
}
window.AppHeader = AppHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/HourlyChart.jsx
try { (() => {
// HourlyChart — 24h temperature line (stands in for the Recharts 48h chart,
// FR-FORECAST-03) plus sunrise/sunset (FR-FORECAST-04). Lightweight inline SVG.
function HourlyChart({
  city
}) {
  const {
    Card,
    Icon
  } = window.WeatherExplorerDesignSystem_019e02;
  const data = city.hourly;
  const W = 640,
    H = 150,
    padX = 8,
    padY = 22;
  const min = Math.min(...data) - 1,
    max = Math.max(...data) + 1;
  const x = i => padX + i / (data.length - 1) * (W - padX * 2);
  const y = v => padY + (1 - (v - min) / (max - min)) * (H - padY * 2);
  const line = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(data.length - 1).toFixed(1)},${H - padY} L${x(0).toFixed(1)},${H - padY} Z`;
  const ticks = [0, 6, 12, 18, 23];
  return /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-md)',
      color: 'var(--text)'
    }
  }, "\u041F\u043E\u0433\u043E\u0434\u0438\u043D\u043D\u043E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0456 24 \u0433\u043E\u0434\u0438\u043D\u0438")), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    style: {
      display: 'block'
    },
    preserveAspectRatio: "none",
    "aria-label": "\u0413\u0440\u0430\u0444\u0456\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u043F\u043E \u0433\u043E\u0434\u0438\u043D\u0430\u0445",
    role: "img"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "nadv-fill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--brand)",
    stopOpacity: "0.18"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--brand)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#nadv-fill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "var(--brand)",
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), ticks.map(t => /*#__PURE__*/React.createElement("g", {
    key: t
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x(t),
    cy: y(data[t]),
    r: "3.5",
    fill: "var(--surface)",
    stroke: "var(--brand)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: x(t),
    y: y(data[t]) - 10,
    textAnchor: "middle",
    fontFamily: "var(--font-mono)",
    fontSize: "12",
    fontWeight: "600",
    fill: "var(--text-secondary)"
  }, data[t], "\xB0"), /*#__PURE__*/React.createElement("text", {
    x: x(t),
    y: H - 6,
    textAnchor: "middle",
    fontFamily: "var(--font-mono)",
    fontSize: "10.5",
    fill: "var(--text-faint)"
  }, String(t).padStart(2, '0'), ":00")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 12,
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sunrise",
    size: 16,
    style: {
      color: 'var(--accent)'
    }
  }), "\u0421\u0445\u0456\u0434 ", /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text)'
    }
  }, city.sunrise)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sunset",
    size: 16,
    style: {
      color: 'var(--amber-500)'
    }
  }), "\u0417\u0430\u0445\u0456\u0434 ", /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text)'
    }
  }, city.sunset))));
}
window.HourlyChart = HourlyChart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/HourlyChart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/MapPanel.jsx
try { (() => {
// MapPanel — real OSM-tiled Leaflet map bounded to the active city
// (FR-MAP-01..04, TC-STACK-04). Requires Leaflet loaded globally.
function MapPanel({
  city
}) {
  const {
    Card
  } = window.WeatherExplorerDesignSystem_019e02;
  const ref = React.useRef(null);
  const mapRef = React.useRef(null);
  const markerRef = React.useRef(null);
  React.useEffect(() => {
    if (!window.L || !ref.current) return;
    if (!mapRef.current) {
      mapRef.current = window.L.map(ref.current, {
        zoomControl: true,
        attributionControl: true,
        scrollWheelZoom: false
      }).setView([city.lat, city.lon], 11);
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }
    const m = mapRef.current;
    m.setView([city.lat, city.lon], 11, {
      animate: true
    });
    if (markerRef.current) markerRef.current.remove();
    markerRef.current = window.L.marker([city.lat, city.lon]).addTo(m).bindPopup(city.name).openPopup();
    setTimeout(() => m.invalidateSize(), 80);
  }, [city.id]);
  return /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: '100%',
      height: 280,
      background: 'var(--surface-sunken)'
    }
  }));
}
window.MapPanel = MapPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/MapPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/SearchBar.jsx
try { (() => {
// SearchBar — debounced city search with suggestion dropdown
// (FR-SEARCH-01..05). Uses Input + CityResult + Card from the DS.
function SearchBar({
  size = 'lg',
  onSelect,
  autoFocus = false
}) {
  const {
    Input,
    CityResult,
    Card
  } = window.WeatherExplorerDesignSystem_019e02;
  const D = window.NADVORI_DATA;
  const [q, setQ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [active, setActive] = React.useState(0);
  const timer = React.useRef(null);
  function onChange(e) {
    const v = e.target.value;
    setQ(v);
    setOpen(true);
    setLoading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setResults(D.search(v));
      setActive(0);
      setLoading(false);
    }, 260); // debounce
  }
  function choose(c) {
    setQ(c.name);
    setOpen(false);
    const full = D.cities[c.id];
    if (full && onSelect) onSelect(full);
  }
  function onKeyDown(e) {
    if (!open || !results.length) {
      if (e.key === 'Enter' && results.length === 1) choose(results[0]);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(a => Math.min(a + 1, results.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(a => Math.max(a - 1, 0));
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      choose(results[active]);
    }
    if (e.key === 'Escape') setOpen(false);
  }
  const noResults = open && !loading && q.trim() && results.length === 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    size: size,
    placeholder: "\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E",
    value: q,
    loading: loading && open,
    autoFocus: autoFocus,
    onChange: onChange,
    onKeyDown: onKeyDown,
    onFocus: () => q && setOpen(true)
  }), open && (results.length > 0 || noResults) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      left: 0,
      right: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "6px",
    style: {
      boxShadow: 'var(--shadow-lg)'
    }
  }, results.map((c, i) => /*#__PURE__*/React.createElement(CityResult, {
    key: c.id,
    name: c.name,
    region: c.region,
    country: c.country,
    flag: c.flag,
    active: i === active,
    onClick: () => choose(c)
  })), noResults && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"))));
}
window.SearchBar = SearchBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/SearchBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/WeekendHighlight.jsx
try { (() => {
// WeekendHighlight — hero panel leading with the weekend comfort score
// (FR-COMFORT-05). One number, then the detail.
function WeekendHighlight({
  city
}) {
  const {
    Card,
    ComfortBadge,
    Badge,
    ConditionIcon
  } = window.WeatherExplorerDesignSystem_019e02;
  const D = window.NADVORI_DATA;
  const wk = D.weekend(city);
  const tone = wk.avg >= 70 ? 'good' : wk.avg >= 40 ? 'fair' : 'poor';
  function MiniDay({
    label,
    day
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(ConditionIcon, {
      condition: day.condition,
      size: 26
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: 'var(--text)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontVariantNumeric: 'tabular-nums',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)'
      }
    }, day.hi, "\xB0 / ", day.lo, "\xB0 \xB7 ", day.precip, "%")));
  }
  return /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ComfortBadge, {
    value: wk.avg,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text)',
      letterSpacing: '-0.01em'
    }
  }, "\u0412\u0438\u0445\u0456\u0434\u043D\u0456 \u0443 \u043C\u0456\u0441\u0442\u0456 ", city.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "\u0426\u0435\u0439 \u0442\u0438\u0436\u0434\u0435\u043D\u044C")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      color: `var(--comfort-${tone}-fg)`,
      fontWeight: 600
    }
  }, ComfortBadge.labelFor(wk.avg), " \u2014 ", wk.avg >= 70 ? 'гарний час побути надворі' : wk.avg >= 40 ? 'непогано, але дивіться на небо' : 'можливо, краще лишитися вдома')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      paddingTop: 16,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(MiniDay, {
    label: "\u0421\u0443\u0431\u043E\u0442\u0430",
    day: wk.sat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(MiniDay, {
    label: "\u041D\u0435\u0434\u0456\u043B\u044F",
    day: wk.sun
  })));
}
window.WeekendHighlight = WeekendHighlight;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/WeekendHighlight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/weather-explorer/data.js
try { (() => {
// Mock data for the Надворі UI kit. Stands in for Open-Meteo responses.
// Comfort scores + Ukrainian rationale mirror lib/scoring/comfort.ts (FR-COMFORT).

window.NADVORI_DATA = function () {
  const UA = 'Україна';

  // weekday short labels (uk)
  const WD = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  // Build a 7-day series starting "today". Each day: condition, hi, lo,
  // precip %, wind, comfort, rationale.
  function mkDays(seed) {
    return seed.map((s, i) => ({
      weekday: WD[(new Date().getDay() + i) % 7],
      condition: s.c,
      night: false,
      hi: s.hi,
      lo: s.lo,
      precip: s.p,
      wind: s.w + ' км/год',
      comfort: s.k,
      rationale: s.r
    }));
  }
  const cities = {
    lviv: {
      id: 'lviv',
      name: 'Львів',
      region: 'Львівська область',
      country: UA,
      flag: '🇺🇦',
      lat: 49.8397,
      lon: 24.0297,
      tz: 'Europe/Kyiv',
      sunrise: '05:12',
      sunset: '21:18',
      now: {
        temp: 22,
        condition: 'clear',
        feels: 23
      },
      days: mkDays([{
        c: 'clear',
        hi: 24,
        lo: 14,
        p: 5,
        w: 9,
        k: 84,
        r: 'Тепло, без дощу, легкий вітер'
      }, {
        c: 'clear',
        hi: 25,
        lo: 15,
        p: 8,
        w: 11,
        k: 82,
        r: 'Сонячно і комфортно для прогулянки'
      }, {
        c: 'partly',
        hi: 22,
        lo: 13,
        p: 18,
        w: 12,
        k: 71,
        r: 'Мінлива хмарність, загалом приємно'
      }, {
        c: 'partly',
        hi: 21,
        lo: 13,
        p: 24,
        w: 14,
        k: 66,
        r: 'Подекуди хмарно, але сухо'
      }, {
        c: 'rain',
        hi: 18,
        lo: 12,
        p: 68,
        w: 19,
        k: 42,
        r: 'Дощ після обіду, візьміть парасолю'
      }, {
        c: 'rain',
        hi: 16,
        lo: 11,
        p: 78,
        w: 23,
        k: 33,
        r: 'Краще вдома — мокро і вітряно'
      }, {
        c: 'cloudy',
        hi: 19,
        lo: 12,
        p: 35,
        w: 15,
        k: 58,
        r: 'Хмарно, прохолодно, без опадів'
      }]),
      hourly: [18, 17, 17, 16, 16, 17, 19, 21, 23, 24, 25, 25, 24, 23, 22, 21, 20, 19, 18, 18, 17, 17, 16, 16]
    },
    kyiv: {
      id: 'kyiv',
      name: 'Київ',
      region: 'Київська область',
      country: UA,
      flag: '🇺🇦',
      lat: 50.4501,
      lon: 30.5234,
      tz: 'Europe/Kyiv',
      sunrise: '04:58',
      sunset: '21:02',
      now: {
        temp: 26,
        condition: 'partly',
        feels: 27
      },
      days: mkDays([{
        c: 'partly',
        hi: 27,
        lo: 17,
        p: 12,
        w: 13,
        k: 74,
        r: 'Тепло, мінлива хмарність'
      }, {
        c: 'clear',
        hi: 29,
        lo: 18,
        p: 6,
        w: 10,
        k: 79,
        r: 'Сонячно, трохи спекотно опівдні'
      }, {
        c: 'storm',
        hi: 24,
        lo: 16,
        p: 64,
        w: 22,
        k: 40,
        r: 'Можлива гроза ввечері'
      }, {
        c: 'cloudy',
        hi: 23,
        lo: 15,
        p: 30,
        w: 14,
        k: 60,
        r: 'Хмарно, комфортна температура'
      }, {
        c: 'clear',
        hi: 26,
        lo: 16,
        p: 8,
        w: 11,
        k: 80,
        r: 'Ясно і сухо, гарний день'
      }, {
        c: 'clear',
        hi: 28,
        lo: 17,
        p: 5,
        w: 9,
        k: 81,
        r: 'Сонячно, ідеально для парку'
      }, {
        c: 'partly',
        hi: 25,
        lo: 16,
        p: 20,
        w: 13,
        k: 70,
        r: 'Подекуди хмарно, переважно сухо'
      }]),
      hourly: [20, 19, 19, 18, 18, 20, 22, 24, 26, 27, 28, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 20, 19, 19]
    },
    odesa: {
      id: 'odesa',
      name: 'Одеса',
      region: 'Одеська область',
      country: UA,
      flag: '🇺🇦',
      lat: 46.4825,
      lon: 30.7233,
      tz: 'Europe/Kyiv',
      sunrise: '05:04',
      sunset: '20:42',
      now: {
        temp: 28,
        condition: 'clear',
        feels: 30
      },
      days: mkDays([{
        c: 'clear',
        hi: 29,
        lo: 20,
        p: 4,
        w: 16,
        k: 78,
        r: 'Сонячно, свіжий бриз із моря'
      }, {
        c: 'clear',
        hi: 30,
        lo: 21,
        p: 3,
        w: 18,
        k: 76,
        r: 'Спекотно, але вітер освіжає'
      }, {
        c: 'partly',
        hi: 28,
        lo: 20,
        p: 14,
        w: 17,
        k: 75,
        r: 'Мінлива хмарність біля узбережжя'
      }, {
        c: 'partly',
        hi: 27,
        lo: 19,
        p: 22,
        w: 19,
        k: 69,
        r: 'Подекуди хмарно, тепло'
      }, {
        c: 'clear',
        hi: 29,
        lo: 20,
        p: 6,
        w: 15,
        k: 80,
        r: 'Ясно, гарно для пляжу'
      }, {
        c: 'clear',
        hi: 31,
        lo: 22,
        p: 5,
        w: 14,
        k: 73,
        r: 'Сонячно і спекотно опівдні'
      }, {
        c: 'cloudy',
        hi: 26,
        lo: 19,
        p: 34,
        w: 20,
        k: 62,
        r: 'Хмарно і вітряно, без дощу'
      }]),
      hourly: [22, 21, 21, 21, 22, 23, 25, 27, 28, 29, 30, 30, 30, 29, 28, 27, 26, 25, 24, 23, 23, 22, 22, 22]
    }
  };

  // Search index (geocoding suggestions)
  const index = [cities.lviv, cities.kyiv, cities.odesa, {
    id: 'uzh',
    name: 'Ужгород',
    region: 'Закарпатська область',
    country: UA,
    flag: '🇺🇦'
  }, {
    id: 'kha',
    name: 'Харків',
    region: 'Харківська область',
    country: UA,
    flag: '🇺🇦'
  }, {
    id: 'ivf',
    name: 'Івано-Франківськ',
    region: 'Івано-Франківська область',
    country: UA,
    flag: '🇺🇦'
  }];
  function search(q) {
    const s = (q || '').trim().toLowerCase();
    if (!s) return [];
    return index.filter(c => c.name.toLowerCase().startsWith(s) || c.name.toLowerCase().includes(s));
  }

  // Deterministic Ukrainian weather jokes — picked by day-of-year, no APIs.
  const jokes = ['Синоптик — єдина професія, де можна помилятися щодня і не втратити роботу.', 'Гарна новина: парасоля знайшлася. Погана: вже не потрібна.', 'Найточніший прогноз — визирнути у вікно.', 'Вересень не поспішає, і ми за ним.', 'Хмари сьогодні працюють понаднормово.', 'Вітер північний, настрій південний.'];
  function jokeOfTheDay() {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const doy = Math.floor((new Date() - start) / 86400000);
    return jokes[doy % jokes.length];
  }

  // Weekend = next Sat + Sun from the 7-day window (indices 5,6 here for demo)
  function weekend(city) {
    const sat = city.days[5];
    const sun = city.days[6];
    const avg = Math.round((sat.comfort + sun.comfort) / 2);
    return {
      sat,
      sun,
      avg
    };
  }
  return {
    cities,
    index,
    search,
    jokeOfTheDay,
    weekend
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/weather-explorer/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CityResult = __ds_scope.CityResult;

__ds_ns.Clock = __ds_scope.Clock;

__ds_ns.ComfortBadge = __ds_scope.ComfortBadge;

__ds_ns.ConditionIcon = __ds_scope.ConditionIcon;

__ds_ns.DayCard = __ds_scope.DayCard;

})();
