import { en } from "./en";
import { uk, type Messages } from "./uk";

export type Locale = "uk" | "en";

type LeafPaths<T, Prefix extends string = ""> = {
  [K in keyof T & string]: T[K] extends string
    ? `${Prefix}${K}`
    : T[K] extends Record<string, unknown>
      ? LeafPaths<T[K], `${Prefix}${K}.`>
      : never;
}[keyof T & string];

export type MessageKey = LeafPaths<Messages>;

const dictionaries = {
  uk,
  en,
} satisfies Record<Locale, Messages>;

export function t(key: MessageKey, locale: Locale = "uk"): string {
  return key.split(".").reduce<unknown>((value, segment) => {
    if (typeof value !== "object" || value === null || !(segment in value)) {
      throw new Error(`Missing i18n key: ${key}`);
    }

    return (value as Record<string, unknown>)[segment];
  }, dictionaries[locale]) as string;
}
