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

        <ol className="mt-14 space-y-6 sm:space-y-8">
          {dict.process.steps.map((step, index) => (
            <li
              key={step.title}
              className="flex items-start gap-4 sm:gap-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-accent bg-bg font-heading text-sm text-accent sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </span>

              <article className="min-w-0 flex-1 border border-border bg-surface p-6 sm:p-8">
                <h3 className="font-heading text-xl tracking-wide text-text sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
