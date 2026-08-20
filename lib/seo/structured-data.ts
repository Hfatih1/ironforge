import type { Locale } from "@/lib/i18n/config";
import { categoryLocaleMap } from "@/lib/i18n/types";
import type { ServiceCategory } from "@/lib/i18n/types";
import type { ServicePageContent } from "@/lib/services/content";
import { siteConfig } from "@/lib/site-config";
import { getServicePath } from "@/lib/i18n/routes";

export function buildServiceJsonLd(
  category: ServiceCategory,
  locale: Locale,
  content: ServicePageContent,
  slug: string,
) {
  const url = `${siteConfig.siteUrl}${getServicePath(locale, slug)}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    description: content.meta.description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.company.legalName,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.company.address,
        addressLocality: siteConfig.company.city,
        postalCode: siteConfig.company.postalCode,
        addressCountry: "RS",
      },
      telephone: siteConfig.company.phone,
      email: siteConfig.company.email,
    },
    areaServed: locale === "sr" ? "Serbia" : ["Serbia", "European Union"],
  };
}

export function buildBreadcrumbJsonLd(
  locale: Locale,
  content: ServicePageContent,
  slug: string,
  labels: { home: string; services: string },
) {
  const homeUrl = `${siteConfig.siteUrl}/${locale}`;
  const serviceUrl = `${siteConfig.siteUrl}${getServicePath(locale, slug)}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: labels.home,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: labels.services,
        item: `${homeUrl}#usluge`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.title,
        item: serviceUrl,
      },
    ],
  };
}

export function getServiceAlternates(category: ServiceCategory) {
  const srSlug = category;
  const enSlug = categoryLocaleMap[category];

  return {
    sr: `${siteConfig.siteUrl}/sr/usluge/${srSlug}`,
    en: `${siteConfig.siteUrl}/en/services/${enSlug}`,
    "x-default": `${siteConfig.siteUrl}/en/services/${enSlug}`,
  };
}
