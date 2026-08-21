import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getServiceCategories, getServicePath } from "@/lib/i18n/routes";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

type ServicesGridProps = {
  locale: Locale;
  dict: Dictionary;
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

        <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const item = dict.services.items[category];
            if (!item) return null;

            return (
              <Link
                key={category}
                href={getServicePath(locale, category)}
                className="group relative flex flex-col border-b border-r border-border p-6 transition-colors hover:bg-surface sm:p-7"
              >
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <ServiceIcon
                  category={category}
                  className="h-7 w-7 text-muted transition-colors group-hover:text-accent"
                />
                <h3 className="font-heading mt-5 text-xl tracking-wide text-text">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted transition-colors group-hover:text-accent">
                  {dict.services.learnMore}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M2 8h11M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
