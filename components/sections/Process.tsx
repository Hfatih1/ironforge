import type { Dictionary } from "@/lib/i18n/types";

type ProcessProps = {
  dict: Dictionary;
};

export function Process({ dict }: ProcessProps) {
  return (
    <section id="proces" className="border-b border-border bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
            {dict.process.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{dict.process.subtitle}</p>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute bottom-5 left-5 top-5 w-px bg-border sm:left-8"
            aria-hidden="true"
          />

          <ol className="space-y-6 sm:space-y-8">
            {dict.process.steps.map((step, index) => (
              <li
                key={step.title}
                className="relative grid grid-cols-[2.5rem_1fr] items-start gap-4 sm:grid-cols-[4rem_1fr] sm:gap-8"
              >
                <div className="relative z-10 flex justify-center pt-1 sm:justify-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-accent bg-bg font-heading text-sm text-accent">
                    {index + 1}
                  </span>
                </div>

                <article className="border border-border bg-surface p-6 sm:p-8">
                  <h3 className="font-heading text-2xl tracking-wide text-text">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
