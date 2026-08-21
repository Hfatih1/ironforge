import type { Dictionary } from "@/lib/i18n/types";

type WhyUsProps = {
  dict: Dictionary;
};

export function WhyUs({ dict }: WhyUsProps) {
  return (
    <section id="zasto" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
              {dict.whyUs.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{dict.whyUs.subtitle}</p>
          </div>

          <dl className="divide-y divide-border border-t border-border">
            {dict.whyUs.items.map((item) => (
              <div
                key={item.title}
                className="grid gap-3 py-7 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-8 sm:py-8"
              >
                <dt className="font-heading text-xl tracking-wide text-text sm:text-2xl">
                  {item.title}
                </dt>
                <dd className="leading-relaxed text-muted">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
