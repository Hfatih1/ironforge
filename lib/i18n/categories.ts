import type { Locale } from "./config";
import { getDictionary } from "./dictionaries";
import {
  categoryLocaleMap,
  type ServiceCategory,
} from "./types";

export function getCategoryLabel(
  category: ServiceCategory,
  locale: Locale,
): string {
  const dict = getDictionary(locale);
  const key =
    locale === "sr" ? category : categoryLocaleMap[category];
  return dict.services.items[key]?.title ?? category;
}
