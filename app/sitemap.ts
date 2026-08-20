import type { MetadataRoute } from "next";
import { getServicePath } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";
import { getAllServicePaths } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const now = new Date();

  const homePages: MetadataRoute.Sitemap = [
    {
      url: `${base}/sr`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/sr/politika-privatnosti`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/en/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = getAllServicePaths().map(
    ({ locale, slug }) => ({
      url: `${base}${getServicePath(locale, slug)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [...homePages, ...servicePages];
}
