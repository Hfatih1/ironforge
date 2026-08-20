import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site-config";

export function buildOrganizationJsonLd(locale: Locale) {
  const { company, social, map } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: company.legalName,
    description:
      locale === "sr"
        ? "Proizvodnja metalnih konstrukcija, bravarije i CNC obrade po meri."
        : "Custom metal fabrication, metalwork and CNC machining.",
    url: `${siteConfig.siteUrl}/${locale}`,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      postalCode: company.postalCode,
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: map.lat,
      longitude: map.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "17:00",
    },
    sameAs: [social.instagram, social.facebook].filter(Boolean),
  };
}
