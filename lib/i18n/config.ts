export const locales = ["sr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  sr: "SR",
  en: "EN",
};

export const alternateLocale: Record<Locale, Locale> = {
  sr: "en",
  en: "sr",
};
