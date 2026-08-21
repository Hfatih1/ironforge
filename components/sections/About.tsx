import type { Dictionary } from "@/lib/i18n/types";

type AboutProps = {
  dict: Dictionary;
};

export function About({ dict }: AboutProps) {
  const [lead, ...rest] = dict.about.paragraphs;

  return (
    <section id="o-nama" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-accent" aria-hidden="true" />
          <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
            {dict.about.title}
          </h2>
        </div>

        {lead && (
          <p className="mt-10 max-w-3xl text-xl leading-snug text-text sm:text-2xl">
            {lead}
          </p>
        )}

        {rest.length > 0 && (
          <div className="mt-10 grid gap-6 leading-relaxed text-muted sm:grid-cols-2 sm:gap-12">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
