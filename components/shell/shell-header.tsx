import Image from "next/image";

import { t } from "@/lib/i18n";
import { ThemeIndicator } from "./theme-indicator";

export function ShellHeader() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border-subtle bg-surface/80 px-5 py-4 shadow-xs">
      <div className="flex min-w-0 items-center gap-4">
        <Image
          src="/brand/logo-wordmark.svg"
          alt={t("shell.brand.logoAlt")}
          width={150}
          height={32}
          priority
        />
        <span className="hidden text-2xs font-semibold uppercase tracking-[0.12em] text-text-muted sm:inline">
          {t("shell.brand.systemLabel")}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div
          aria-hidden="true"
          data-shell-slot={t("shell.header.clockSlotLabel")}
          className="hidden min-h-9 min-w-28 rounded-pill border border-border-subtle bg-surface-sunken md:block"
        />
        <ThemeIndicator />
      </div>
    </header>
  );
}
