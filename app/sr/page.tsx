import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site-config";

const locale = "sr" as const;
const dict = getDictionary(locale);

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: `${siteConfig.siteUrl}/sr`,
    languages: {
      sr: `${siteConfig.siteUrl}/sr`,
      en: `${siteConfig.siteUrl}/en`,
      "x-default": `${siteConfig.siteUrl}/en`,
    },
  },
  openGraph: {
    title: dict.meta.title,
    description: dict.meta.description,
    locale: "sr_RS",
    alternateLocale: ["en_US"],
    type: "website",
    url: `${siteConfig.siteUrl}/sr`,
  },
};

export default function SerbianHomePage() {
  return <HomePage locale={locale} />;
}
