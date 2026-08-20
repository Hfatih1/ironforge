import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/pages/ServicePage";
import { getServiceContent } from "@/lib/services/content";
import { getServiceSlug, resolveServiceCategory } from "@/lib/services";
import { serviceCategories } from "@/lib/i18n/types";
import { getServiceAlternates } from "@/lib/seo/structured-data";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return serviceCategories.en.map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = resolveServiceCategory(categorySlug, "en");
  if (!category) return {};

  const content = getServiceContent(category, "en");
  const alternates = getServiceAlternates(category);
  const canonical = `${siteConfig.siteUrl}/en/services/${categorySlug}`;

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
      locale: "en_US",
      alternateLocale: ["sr_RS"],
      type: "website",
    },
  };
}

export default async function EnglishServicePage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = resolveServiceCategory(categorySlug, "en");

  if (!category) {
    notFound();
  }

  return (
    <ServicePage
      locale="en"
      category={category}
      slug={getServiceSlug(category, "en")}
    />
  );
}
