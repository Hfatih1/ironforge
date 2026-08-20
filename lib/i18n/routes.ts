import type { Locale } from "./config";
import {
  categoryLocaleMap,
  categoryLocaleMapReverse,
  serviceCategories,
} from "./types";

export function getServicePath(
  locale: Locale,
  category: string,
): string {
  if (locale === "sr") {
    return `/sr/usluge/${category}`;
  }
  return `/en/services/${category}`;
}

export function getAlternatePath(
  locale: Locale,
  pathname: string,
): string {
  const otherLocale = locale === "sr" ? "en" : "sr";

  if (pathname === `/${locale}`) {
    return `/${otherLocale}`;
  }

  const serviceMatch = pathname.match(
    /^\/(sr\/usluge|en\/services)\/([^/]+)$/,
  );
  if (serviceMatch) {
    const category = serviceMatch[2];
    if (locale === "sr") {
      const enCategory = categoryLocaleMap[category as keyof typeof categoryLocaleMap];
      return enCategory ? `/en/services/${enCategory}` : "/en";
    }
    const srCategory =
      categoryLocaleMapReverse[category as keyof typeof categoryLocaleMapReverse];
    return srCategory ? `/sr/usluge/${srCategory}` : "/sr";
  }

  if (pathname === "/sr/politika-privatnosti") {
    return "/en/privacy-policy";
  }
  if (pathname === "/en/privacy-policy") {
    return "/sr/politika-privatnosti";
  }

  return `/${otherLocale}`;
}

export function getServiceCategories(locale: Locale): readonly string[] {
  return serviceCategories[locale];
}
