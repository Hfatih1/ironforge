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

        <ol className="mt-14 space-y-0">
          {dict.process.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative grid gap-4 border-l border-border pb-12 pl-8 last:pb-0 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:pl-0"
            >
              <div className="absolute left-0 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center border border-accent bg-bg font-heading text-sm text-accent sm:relative sm:translate-x-0">
                {index + 1}
              </div>
              <div className="hidden sm:block" aria-hidden="true" />
              <div className="border border-border bg-surface p-6 sm:p-8">
                <h3 className="font-heading text-2xl tracking-wide text-text">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
