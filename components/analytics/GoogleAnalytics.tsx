"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_KEY } from "@/components/layout/CookieBanner";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!gaId) return;

    function readConsent() {
      setEnabled(localStorage.getItem(CONSENT_KEY) === "accepted");
    }

    readConsent();
    window.addEventListener("cookie-consent-change", readConsent);
    return () => window.removeEventListener("cookie-consent-change", readConsent);
  }, []);

  if (!gaId || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
