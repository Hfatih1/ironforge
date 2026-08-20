import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/pages/ServicePage";
import {
  getServiceContent,
} from "@/lib/services/content";
import {
  getServiceSlug,
  resolveServiceCategory,
} from "@/lib/services";
import { serviceCategories } from "@/lib/i18n/types";
import { getServiceAlternates } from "@/lib/seo/structured-data";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ kategorija: string }>;
};

export async function generateStaticParams() {
  return serviceCategories.sr.map((kategorija) => ({ kategorija }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { kategorija } = await params;
  const category = resolveServiceCategory(kategorija, "sr");
  if (!category) return {};

  const content = getServiceContent(category, "sr");
  const alternates = getServiceAlternates(category);
  const canonical = `${siteConfig.siteUrl}/sr/usluge/${kategorija}`;

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical,
      languages: alternates,
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: canonical,
      locale: "sr_RS",
      alternateLocale: ["en_US"],
      type: "website",
    },
  };
}

export default async function SerbianServicePage({ params }: PageProps) {
  const { kategorija } = await params;
  const category = resolveServiceCategory(kategorija, "sr");

  if (!category) {
    notFound();
  }

  return (
    <ServicePage
      locale="sr"
      category={category}
      slug={getServiceSlug(category, "sr")}
    />
  );
}
