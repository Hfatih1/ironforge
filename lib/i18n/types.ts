import type { Locale } from "./config";

export type ServiceCategory =
  | "metalne-konstrukcije"
  | "metalni-namestaj"
  | "bravarija"
  | "cnc-obrada"
  | "kapije"
  | "ograde"
  | "nadstresnice"
  | "zavarivanje-servis";

export type ServiceCategoryEn =
  | "steel-structures"
  | "metal-furniture"
  | "metalwork"
  | "cnc-cutting"
  | "gates"
  | "fences"
  | "canopies-stairs"
  | "welding-service";

export const serviceCategories: Record<Locale, readonly string[]> = {
  sr: [
    "metalne-konstrukcije",
    "metalni-namestaj",
    "bravarija",
    "cnc-obrada",
    "kapije",
    "ograde",
    "nadstresnice",
    "zavarivanje-servis",
  ],
  en: [
    "steel-structures",
    "metal-furniture",
    "metalwork",
    "cnc-cutting",
    "gates",
    "fences",
    "canopies-stairs",
    "welding-service",
  ],
};

export const categoryLocaleMap: Record<
  ServiceCategory,
  ServiceCategoryEn
> = {
  "metalne-konstrukcije": "steel-structures",
  "metalni-namestaj": "metal-furniture",
  bravarija: "metalwork",
  "cnc-obrada": "cnc-cutting",
  kapije: "gates",
  ograde: "fences",
  nadstresnice: "canopies-stairs",
  "zavarivanje-servis": "welding-service",
};

export const categoryLocaleMapReverse: Record<
  ServiceCategoryEn,
  ServiceCategory
> = Object.fromEntries(
  Object.entries(categoryLocaleMap).map(([sr, en]) => [en, sr]),
) as Record<ServiceCategoryEn, ServiceCategory>;

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    whyUs: string;
    process: string;
    gallery: string;
    about: string;
    faq: string;
    contact: string;
    cta: string;
    menu: string;
    closeMenu: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    contact: string;
    legal: string;
    privacy: string;
    rights: string;
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    items: Record<
      string,
      {
        title: string;
        short: string;
      }
    >;
  };
  whyUs: {
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; text: string }[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  gallery: {
    title: string;
    subtitle: string;
    filterAll: string;
    close: string;
    previous: string;
    next: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    jobType: string;
    jobTypePlaceholder: string;
    message: string;
    send: string;
    sending: string;
    orReach: string;
    mapLabel: string;
  };
  cookies: {
    message: string;
    accept: string;
    reject: string;
    privacyLink: string;
  };
};
