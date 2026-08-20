import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/PrivacyPage";
import { privacyContent } from "@/lib/legal/privacy-content";
import { siteConfig } from "@/lib/site-config";

const content = privacyContent.en;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: `${siteConfig.siteUrl}/en/privacy-policy`,
    languages: {
      sr: `${siteConfig.siteUrl}/sr/politika-privatnosti`,
      en: `${siteConfig.siteUrl}/en/privacy-policy`,
      "x-default": `${siteConfig.siteUrl}/en/privacy-policy`,
    },
  },
};

export default function EnglishPrivacyPage() {
  return <PrivacyPage locale="en" />;
}
