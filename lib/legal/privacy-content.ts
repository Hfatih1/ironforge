import type { Locale } from "@/lib/i18n/config";

export type PrivacySection = {
  title: string;
  paragraphs: string[];
};

export type PrivacyContent = {
  meta: {
    title: string;
    description: string;
  };
  title: string;
  updated: string;
  sections: PrivacySection[];
};

export const privacyContent: Record<Locale, PrivacyContent> = {
  sr: {
    meta: {
      title: "Politika privatnosti | Iron Forge",
      description:
        "Informacije o prikupljanju i obradi ličnih podataka na sajtu Iron Forge — kontakt forma i analitika.",
    },
    title: "Politika privatnosti",
    updated: "Poslednje ažuriranje: 20. avgust 2026.",
    sections: [
      {
        title: "Ko smo",
        paragraphs: [
          "IRON FORGE, preduzetnik, sa sedištem na adresi Save Kovačevića br. 5, 36300 Novi Pazar (u daljem tekstu: mi), je rukovalac podataka koje nam dostavite putem ovog sajta.",
        ],
      },
      {
        title: "Koje podatke prikupljamo",
        paragraphs: [
          "Kontakt forma: ime i prezime, naziv firme (opciono), e-mail, telefon, tip posla i tekst poruke koje sami unesete.",
          "Analitika (Google Analytics 4): učitava se isključivo ako prihvatite kolačiće. Prikuplja se anonimizovana statistika poseta — broj posetilaca, pregledane stranice, tip uređaja i region. Ne koristimo analitiku za identifikaciju pojedinaca.",
          "Tehnički podaci: IP adresa i informacije o pregledaču mogu se privremeno obraditi u svrhu bezbednosti forme (Cloudflare Turnstile) i hostinga (Vercel).",
        ],
      },
      {
        title: "Zašto obrađujemo podatke",
        paragraphs: [
          "Podatke iz kontakt forme obrađujemo kako bismo odgovorili na vaš upit i pripremili ponudu — na osnovu legitimnog interesa i predugovornih radnji.",
          "Analitičke podatke obrađujemo na osnovu vašeg pristanka, isključivo u svrhu poboljšanja sajta.",
        ],
      },
      {
        title: "Kolačići",
        paragraphs: [
          "Sajt koristi neophodne kolačiće za pamćenje vašeg izbora u vezi sa kolačićima (prihvatanje ili odbijanje).",
          "Analitički kolačići (Google Analytics) postavljaju se tek nakon vašeg izričitog pristanka. Izbor možete promeniti brisanjem podataka u pregledaču ili ponovnim posetom sajta.",
        ],
      },
      {
        title: "Koliko dugo čuvamo podatke",
        paragraphs: [
          "Poruke iz kontakt forme čuvamo onoliko koliko je potrebno za obradu upita i eventualnu saradnju, a zatim ih brišemo ili arhiviramo u razumnom roku.",
          "Analitički podaci se čuvaju prema politikama Google-a, u skladu sa podešavanjima naloga.",
        ],
      },
      {
        title: "Deljenje podataka",
        paragraphs: [
          "Podatke ne prodajemo niti delimo sa trećim stranama u marketinške svrhe. Koristimo sledeće procesore:",
          "Resend (slanje e-mailova sa forme), Cloudflare Turnstile (zaštita od spama), Google Analytics (statistika, samo uz pristanak), Vercel (hosting sajta).",
        ],
      },
      {
        title: "Vaša prava",
        paragraphs: [
          "Imate pravo da zatražite pristup, ispravku ili brisanje svojih podataka, kao i da uložite prigovor na obradu. Zahtev pošaljite na info@ironforge.rs.",
          "Imate pravo da podnesete pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti Republike Srbije.",
        ],
      },
      {
        title: "Kontakt",
        paragraphs: [
          "Za pitanja u vezi sa privatnošću pišite na info@ironforge.rs ili nas kontaktirajte na adresi Save Kovačevića br. 5, 36300 Novi Pazar.",
        ],
      },
    ],
  },
  en: {
    meta: {
      title: "Privacy policy | Iron Forge",
      description:
        "How Iron Forge collects and processes personal data through the contact form and analytics on this website.",
    },
    title: "Privacy policy",
    updated: "Last updated: 20 August 2026.",
    sections: [
      {
        title: "Who we are",
        paragraphs: [
          "IRON FORGE, sole proprietorship, Save Kovačevića 5, 36300 Novi Pazar, Serbia (\"we\"), is the controller of personal data you submit through this website.",
        ],
      },
      {
        title: "What data we collect",
        paragraphs: [
          "Contact form: full name, company name (optional), email, phone, job type and message text that you enter voluntarily.",
          "Analytics (Google Analytics 4): loaded only if you accept cookies. Anonymous visit statistics are collected — visitor counts, pages viewed, device type and region. We do not use analytics to identify individuals.",
          "Technical data: IP address and browser information may be temporarily processed for form security (Cloudflare Turnstile) and hosting (Vercel).",
        ],
      },
      {
        title: "Why we process data",
        paragraphs: [
          "Contact form data is processed to respond to your inquiry and prepare a quote — based on legitimate interest and pre-contractual steps.",
          "Analytics data is processed based on your consent, solely to improve the website.",
        ],
      },
      {
        title: "Cookies",
        paragraphs: [
          "The site uses essential cookies to remember your cookie preference (accept or reject).",
          "Analytics cookies (Google Analytics) are set only after your explicit consent. You can change your choice by clearing browser data or revisiting the site.",
        ],
      },
      {
        title: "How long we keep data",
        paragraphs: [
          "Contact form messages are kept as long as needed to handle the inquiry and any subsequent cooperation, then deleted or archived within a reasonable period.",
          "Analytics data is retained according to Google's policies and account settings.",
        ],
      },
      {
        title: "Sharing data",
        paragraphs: [
          "We do not sell or share data with third parties for marketing. We use the following processors:",
          "Resend (form email delivery), Cloudflare Turnstile (spam protection), Google Analytics (statistics, consent only), Vercel (website hosting).",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "You have the right to request access, correction or deletion of your data, and to object to processing. Send requests to info@ironforge.rs.",
          "You may lodge a complaint with the Commissioner for Information of Public Importance and Personal Data Protection of the Republic of Serbia.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "For privacy questions email info@ironforge.rs or write to Save Kovačevića 5, 36300 Novi Pazar, Serbia.",
        ],
      },
    ],
  },
};
