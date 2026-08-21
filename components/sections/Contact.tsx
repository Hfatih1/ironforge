import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";
import { getTurnstileSecret, getTurnstileSiteKey } from "@/lib/turnstile/config";
import { ContactForm } from "@/components/sections/ContactForm";

type ContactProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Contact({ locale, dict }: ContactProps) {
  const { company, map } = siteConfig;

  return (
    <section id="kontakt" className="border-t border-border bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{dict.contact.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactForm
              locale={locale}
              dict={dict}
              turnstileSiteKey={getTurnstileSiteKey()}
              turnstileRequired={Boolean(getTurnstileSecret())}
            />

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                {dict.contact.orReach}
              </p>
              <ul className="space-y-3 text-text">
                <li>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-accent"
                  >
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {company.email}
                  </a>
                </li>
                <li className="text-muted">{company.workingHours[locale]}</li>
                <li className="text-muted">
                  {company.address}, {company.postalCode} {company.city}
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden border border-border bg-surface">
            <iframe
              title={dict.contact.mapLabel}
              src={map.embedUrl}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[320px] w-full grayscale-[30%] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
