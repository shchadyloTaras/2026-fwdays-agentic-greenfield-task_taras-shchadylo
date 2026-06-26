"use client";

import { useState } from "react";

import { t } from "@/lib/i18n";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeIndicator() {
  const [theme, setTheme] = useState<Theme>("light");

  const isDark = theme === "dark";
  const nextTheme: Theme = isDark ? "light" : "dark";
  const label = isDark ? t("shell.theme.toggleToLight") : t("shell.theme.toggleToDark");

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isDark}
      onClick={() => {
        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
      className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-4 py-2 text-sm font-medium text-text-secondary shadow-sm transition-colors hover:bg-surface-hover focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <span
        aria-hidden="true"
        className={`size-2 rounded-pill ${isDark ? "bg-accent" : "bg-brand"}`}
      />
      <span>{isDark ? t("shell.theme.lightLabel") : t("shell.theme.darkLabel")}</span>
    </button>
  );
}
