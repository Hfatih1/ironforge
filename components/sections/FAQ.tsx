import type { Dictionary } from "@/lib/i18n/types";

type FAQProps = {
  dict: Dictionary;
};

export function FAQ({ dict }: FAQProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="border-b border-border bg-bg py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
          {dict.faq.title}
        </h2>

        <div className="mt-10 divide-y divide-border border border-border">
          {dict.faq.items.map((item) => (
            <details key={item.question} className="group bg-surface">
              <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-text transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span
                    className="shrink-0 text-accent transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-border px-6 pb-5 pt-2 leading-relaxed text-muted">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
