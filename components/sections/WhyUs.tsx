import type { Dictionary } from "@/lib/i18n/types";

type WhyUsProps = {
  dict: Dictionary;
};

export function WhyUs({ dict }: WhyUsProps) {
  return (
    <section id="zasto" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
            {dict.whyUs.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{dict.whyUs.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {dict.whyUs.items.map((item, index) => (
            <article
              key={item.title}
              className="border border-border bg-bg p-6 sm:p-8"
            >
              <span className="font-heading text-3xl text-accent/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading mt-3 text-2xl tracking-wide text-text">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
