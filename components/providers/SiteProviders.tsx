"use client";

import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

type SiteProvidersProps = {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
};

export function SiteProviders({ locale, dict, children }: SiteProvidersProps) {
  return (
    <>
      {children}
      <CookieBanner locale={locale} dict={dict} />
      <GoogleAnalytics />
    </>
  );
}
