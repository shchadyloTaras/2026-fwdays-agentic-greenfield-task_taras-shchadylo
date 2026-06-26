import { t } from "@/lib/i18n";
import { SearchPlaceholder } from "./search-placeholder";

type EmptyHeroProps = {
  hasActiveLocation?: boolean;
  locationName?: string;
};

export function EmptyHero({
  hasActiveLocation = false,
  locationName,
}: EmptyHeroProps) {
  return (
    <section className="mx-auto flex w-full max-w-xl flex-col items-center rounded-xl border border-border bg-surface px-6 py-10 text-center shadow-md sm:px-8">
      <p className="text-2xs font-semibold uppercase tracking-[0.12em] text-brand">
        {t("shell.hero.eyebrow")}
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {hasActiveLocation
          ? t("shell.hero.activeLocationTitle")
          : t("shell.hero.title")}
      </h1>
      <p className="mt-4 max-w-lg text-base leading-7 text-text-secondary">
        {hasActiveLocation
          ? t("shell.hero.activeLocationDescription")
          : t("shell.hero.description")}
      </p>
      {hasActiveLocation && locationName ? (
        <p className="mt-3 rounded-pill bg-brand-soft px-4 py-2 text-sm font-medium text-brand">
          {locationName}
        </p>
      ) : null}
      <div className="mt-8 flex w-full justify-center">
        <SearchPlaceholder />
      </div>
    </section>
  );
}
