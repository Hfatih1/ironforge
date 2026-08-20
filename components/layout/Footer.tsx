import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/Logo";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

const navItems = [
  { key: "services" as const, href: "#usluge" },
  { key: "process" as const, href: "#proces" },
  { key: "gallery" as const, href: "#galerija" },
  { key: "contact" as const, href: "#kontakt" },
];

export function Footer({ locale, dict }: FooterProps) {
  const { company, social } = siteConfig;
  const privacyHref =
    locale === "sr" ? "/sr/politika-privatnosti" : "/en/privacy-policy";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo locale={locale} />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <h2 className="font-heading mb-4 text-lg tracking-wider text-text">
            {dict.footer.navigation}
          </h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {dict.nav[item.key]}
                </a>
              </li>
            ))}
            <li>
              <Link
                href={privacyHref}
                className="text-sm text-muted transition-colors hover:text-text"
              >
                {dict.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading mb-4 text-lg tracking-wider text-text">
            {dict.footer.contact}
          </h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-text">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-text">
                {company.email}
              </a>
            </li>
            <li>{company.workingHours[locale]}</li>
            <li>
              {company.address}, {company.postalCode} {company.city}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading mb-4 text-lg tracking-wider text-text">
            {dict.footer.legal}
          </h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>{company.legalName}</li>
            <li>{company.legalForm[locale]}</li>
            <li>PIB: {company.pib}</li>
            <li>MB: {company.maticniBroj}</li>
          </ul>
          {(social.instagram || social.facebook || social.linkedin) && (
            <ul className="mt-4 flex gap-4">
              {social.instagram && (
                <li>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {social.facebook && (
                <li>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent"
                  >
                    Facebook
                  </a>
                </li>
              )}
              {social.linkedin && (
                <li>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 sm:px-6">
        <p className="mx-auto max-w-6xl text-center text-xs text-muted">
          © {year} {company.legalName}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
