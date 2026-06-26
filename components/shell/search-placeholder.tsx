import { t } from "@/lib/i18n";

const SEARCH_HELPER_ID = "city-search-placeholder-help";

export function SearchPlaceholder() {
  return (
    <div className="w-full max-w-md text-left">
      <label htmlFor="city-search-placeholder" className="sr-only">
        {t("shell.search.label")}
      </label>
      <input
        id="city-search-placeholder"
        type="search"
        readOnly
        aria-disabled="true"
        aria-describedby={SEARCH_HELPER_ID}
        aria-label={t("shell.search.unavailable")}
        placeholder={t("shell.search.placeholder")}
        className="h-12 w-full rounded-md border border-border bg-surface px-4 text-base text-text shadow-sm outline-none transition-colors placeholder:text-text-muted focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      />
      <p id={SEARCH_HELPER_ID} className="mt-3 text-sm leading-6 text-text-muted">
        {t("shell.search.helper")}
      </p>
    </div>
  );
}
