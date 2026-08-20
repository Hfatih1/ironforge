import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site-config";

const locale = "en" as const;
const dict = getDictionary(locale);

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: `${siteConfig.siteUrl}/en`,
    languages: {
      sr: `${siteConfig.siteUrl}/sr`,
      en: `${siteConfig.siteUrl}/en`,
      "x-default": `${siteConfig.siteUrl}/en`,
    },
  },
  openGraph: {
    title: dict.meta.title,
    description: dict.meta.description,
    locale: "en_US",
    alternateLocale: ["sr_RS"],
    type: "website",
    url: `${siteConfig.siteUrl}/en`,
  },
};

export default function EnglishHomePage() {
  return <HomePage locale={locale} />;
}
