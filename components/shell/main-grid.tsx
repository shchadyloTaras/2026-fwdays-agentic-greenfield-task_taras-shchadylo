import type { ReactNode } from "react";

import { t } from "@/lib/i18n";

type MainGridProps = {
  children: ReactNode;
};

type EmptySlotProps = {
  label: string;
  className: string;
};

function EmptySlot({ label, className }: EmptySlotProps) {
  return (
    <aside
      aria-hidden="true"
      data-shell-slot={label}
      className={`rounded-xl border border-dashed border-border-subtle bg-surface-sunken/60 ${className}`}
    />
  );
}

export function MainGrid({ children }: MainGridProps) {
  return (
    <main className="mx-auto grid w-full max-w-[1240px] flex-1 grid-cols-1 gap-6 px-5 py-8 md:grid-cols-2 md:px-6 md:py-10 xl:grid-cols-3">
      <section className="flex min-h-[calc(100dvh-14rem)] items-center md:col-span-1 xl:col-start-2 xl:row-start-1">
        {children}
      </section>
      <EmptySlot
        label={t("shell.slots.forecast")}
        className="hidden min-h-[24rem] md:block xl:col-start-1 xl:row-start-1"
      />
      <EmptySlot
        label={t("shell.slots.map")}
        className="hidden min-h-[24rem] xl:col-start-3 xl:row-start-1 xl:block"
      />
    </main>
  );
}
