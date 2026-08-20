import type { Dictionary } from "@/lib/i18n/types";

type AboutProps = {
  dict: Dictionary;
};

export function About({ dict }: AboutProps) {
  return (
    <section id="o-nama" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
          {dict.about.title}
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          {dict.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
