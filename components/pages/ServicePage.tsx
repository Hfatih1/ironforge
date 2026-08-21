import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { ServiceCategory } from "@/lib/i18n/types";
import { getServicePath } from "@/lib/i18n/routes";
import { getGalleryForCategory } from "@/lib/services";
import {
  getServiceContent,
  servicePageLabels,
} from "@/lib/services/content";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from "@/lib/seo/structured-data";

type ServicePageProps = {
  locale: Locale;
  category: ServiceCategory;
  slug: string;
};

export function ServicePage({ locale, category, slug }: ServicePageProps) {
  const dict = getDictionary(locale);
  const content = getServiceContent(category, locale);
  const labels = servicePageLabels[locale];
  const pathname = getServicePath(locale, slug);
  const homeHref = `/${locale}`;
  const gallery = getGalleryForCategory(category);
  const whatsappLabel =
    locale === "sr"
      ? "Kontaktirajte nas preko WhatsApp-a"
      : "Contact us on WhatsApp";

  const serviceJsonLd = buildServiceJsonLd(category, locale, content, slug);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(locale, content, slug, {
    home: labels.home,
    services: labels.services,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header locale={locale} dict={dict} pathname={pathname} />

      <main className="flex-1 pt-20 sm:pt-24">
        <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={homeHref} className="transition-colors hover:text-accent">
                  {labels.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`${homeHref}#usluge`}
                  className="transition-colors hover:text-accent"
                >
                  {labels.services}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text">{content.title}</li>
            </ol>
          </nav>

          <header className="max-w-3xl">
            <div className="mb-6 h-px w-16 bg-accent" aria-hidden="true" />
            <h1 className="font-heading text-4xl tracking-wide text-text sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              {content.intro}
            </p>
          </header>

          <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </article>

        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-heading text-3xl tracking-wide text-text sm:text-4xl">
              {labels.relatedWork}
            </h2>

            {gallery.length > 0 ? (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
                {gallery.map((item) => (
                  <figure
                    key={item.id}
                    className="relative aspect-[4/3] overflow-hidden border border-border bg-elevated"
                  >
                    <Image
                      src={`/gallery/${item.file}`}
                      alt={item.alt[locale]}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                      className="object-cover"
                    />
                  </figure>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-muted">{labels.noGallery}</p>
            )}

            <div className="mt-10">
              <Link
                href={`${homeHref}#galerija`}
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent-hover"
              >
                {locale === "sr" ? "Pogledaj celu galeriju" : "View full gallery"}
                <ArrowIcon
                  direction="right"
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="border border-border bg-surface p-8 sm:p-12">
              <h2 className="font-heading text-3xl tracking-wide text-text sm:text-4xl">
                {content.cta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted">{content.cta.text}</p>
              <div className="mt-8">
                <Button href={`${homeHref}#kontakt`}>{labels.ctaButton}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} dict={dict} />
      <WhatsAppButton label={whatsappLabel} />
    </>
  );
}
