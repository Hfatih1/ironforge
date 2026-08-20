import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getServiceCategories, getServicePath } from "@/lib/i18n/routes";

type ServicesGridProps = {
  locale: Locale;
  dict: Dictionary;
};

const serviceIcons: Record<string, string> = {
  "metalne-konstrukcije": "▣",
  "metalni-namestaj": "▤",
  bravarija: "⛊",
  "cnc-obrada": "◎",
  kapije: "⌗",
  ograde: "▥",
  nadstresnice: "△",
  "zavarivanje-servis": "⚡",
  "steel-structures": "▣",
  "metal-furniture": "▤",
  metalwork: "⛊",
  "cnc-cutting": "◎",
  gates: "⌗",
  fences: "▥",
  "canopies-stairs": "△",
  "welding-service": "⚡",
};

export function ServicesGrid({ locale, dict }: ServicesGridProps) {
  const categories = getServiceCategories(locale);

  return (
    <section id="usluge" className="border-b border-border bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {dict.services.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const item = dict.services.items[category];
            if (!item) return null;

            return (
              <Link
                key={category}
                href={getServicePath(locale, category)}
                className="card-hover group flex flex-col border border-border bg-surface p-6"
              >
                <span
                  className="font-heading mb-4 text-2xl text-accent"
                  aria-hidden="true"
                >
                  {serviceIcons[category]}
                </span>
                <h3 className="font-heading text-xl tracking-wide text-text">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.short}
                </p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  {dict.services.learnMore} →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
