import type { Locale } from "@/lib/i18n/config";
import {
  categoryLocaleMap,
  categoryLocaleMapReverse,
  serviceCategories,
  type ServiceCategory,
  type ServiceCategoryEn,
} from "@/lib/i18n/types";
import { galleryItems } from "@/lib/gallery";
import { getServicePath } from "@/lib/i18n/routes";

export function resolveServiceCategory(
  slug: string,
  locale: Locale,
): ServiceCategory | null {
  if (locale === "sr") {
    return serviceCategories.sr.includes(slug as ServiceCategory)
      ? (slug as ServiceCategory)
      : null;
  }

  if (!serviceCategories.en.includes(slug as ServiceCategoryEn)) {
    return null;
  }

  return categoryLocaleMapReverse[slug as ServiceCategoryEn];
}

export function getServiceSlug(
  category: ServiceCategory,
  locale: Locale,
): string {
  return locale === "sr" ? category : categoryLocaleMap[category];
}

export function getGalleryForCategory(category: ServiceCategory) {
  return galleryItems.filter((item) => item.category === category);
}

export function getAllServicePaths(): { locale: Locale; slug: string }[] {
  return [
    ...serviceCategories.sr.map((slug) => ({ locale: "sr" as const, slug })),
    ...serviceCategories.en.map((slug) => ({ locale: "en" as const, slug })),
  ];
}

export function getServiceCanonicalUrl(locale: Locale, slug: string): string {
  return getServicePath(locale, slug);
}
