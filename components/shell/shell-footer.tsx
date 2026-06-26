import { t } from "@/lib/i18n";

const ATTRIBUTION_LINKS = {
  weather: "https://open-meteo.com/",
  map: "https://www.openstreetmap.org/copyright",
} as const;

export function ShellFooter() {
  return (
    <footer className="border-t border-border-subtle bg-surface px-5 py-5 text-center text-sm text-text-muted">
      <p>
        {t("shell.footer.prefix")}{" "}
        <a
          href={ATTRIBUTION_LINKS.weather}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-text-link underline-offset-4 transition-colors hover:text-brand hover:underline"
        >
          {t("shell.footer.weatherProvider")}
        </a>
        {" · "}
        {t("shell.footer.mapPrefix")}{" "}
        <a
          href={ATTRIBUTION_LINKS.map}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-text-link underline-offset-4 transition-colors hover:text-brand hover:underline"
        >
          {t("shell.footer.mapProvider")}
        </a>
      </p>
    </footer>
  );
}
