"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const CONSENT_KEY = "ironforge-cookie-consent";

type CookieBannerProps = {
  locale: Locale;
  dict: Dictionary;
};

export function CookieBanner({ locale, dict }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function setConsent(value: "accepted" | "rejected") {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  const privacyHref =
    locale === "sr" ? "/sr/politika-privatnosti" : "/en/privacy-policy";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 p-4 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-label={dict.cookies.privacyLink}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          {dict.cookies.message}{" "}
          <Link href={privacyHref} className="text-accent underline-offset-2 hover:underline">
            {dict.cookies.privacyLink}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-text"
          >
            {dict.cookies.reject}
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bg transition-colors hover:bg-accent-hover"
          >
            {dict.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

export { CONSENT_KEY };
