import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { privacyContent } from "@/lib/legal/privacy-content";

type PrivacyPageProps = {
  locale: Locale;
};

export function PrivacyPage({ locale }: PrivacyPageProps) {
  const dict = getDictionary(locale);
  const content = privacyContent[locale];
  const pathname =
    locale === "sr" ? "/sr/politika-privatnosti" : "/en/privacy-policy";
  const whatsappLabel =
    locale === "sr"
      ? "Kontaktirajte nas preko WhatsApp-a"
      : "Contact us on WhatsApp";

  return (
    <>
      <Header locale={locale} dict={dict} pathname={pathname} />
      <main className="flex-1 pt-20 sm:pt-24">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <Link
            href={`/${locale}`}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ← {locale === "sr" ? "Nazad na početnu" : "Back to home"}
          </Link>

          <h1 className="font-heading mt-6 text-4xl tracking-wide text-text sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-3 text-sm text-muted">{content.updated}</p>

          <div className="mt-10 space-y-10">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-heading text-2xl tracking-wide text-text">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppButton label={whatsappLabel} />
    </>
  );
}
