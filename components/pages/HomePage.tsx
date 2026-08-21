import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildOrganizationJsonLd } from "@/lib/seo/organization";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const dict = getDictionary(locale);
  const pathname = `/${locale}`;
  const whatsappLabel =
    locale === "sr"
      ? "Kontaktirajte nas preko WhatsApp-a"
      : "Contact us on WhatsApp";
  const organizationJsonLd = buildOrganizationJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header locale={locale} dict={dict} pathname={pathname} />
      <main className="flex-1">
        <Hero locale={locale} dict={dict} />
        <ServicesGrid locale={locale} dict={dict} />
        <WhyUs dict={dict} />
        <Process dict={dict} />
        <Gallery locale={locale} dict={dict} />
        <About dict={dict} />
        <FAQ dict={dict} />
        <Contact locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppButton label={whatsappLabel} />
    </>
  );
}
