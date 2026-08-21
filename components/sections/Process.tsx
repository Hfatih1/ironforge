import type { Dictionary } from "@/lib/i18n/types";

type ProcessProps = {
  dict: Dictionary;
};

export function Process({ dict }: ProcessProps) {
  const lastIndex = dict.process.steps.length - 1;

  return (
    <section id="proces" className="border-b border-border bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
            {dict.process.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{dict.process.subtitle}</p>
        </div>

        <ol className="mt-14 max-w-3xl">
          {dict.process.steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-8">
              {index < lastIndex && (
                <span
                  className="absolute bottom-0 left-5 top-12 w-px bg-border sm:left-6 sm:top-14"
                  aria-hidden="true"
                />
              )}

              <span className="font-heading relative flex h-10 w-10 shrink-0 items-center justify-center border border-accent bg-bg text-sm text-accent sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </span>

              <div className="min-w-0 flex-1 pt-1 sm:pt-2">
                <h3 className="font-heading text-xl tracking-wide text-text sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
