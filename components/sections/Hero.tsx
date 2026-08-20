import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n/types";

type HeroProps = {
  dict: Dictionary;
};

export function Hero({ dict }: HeroProps) {
  const titleLines = dict.hero.title.split("\n");

  return (
    <section className="hero-texture relative flex min-h-[85vh] items-center border-b border-border pt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-8 h-px w-16 bg-accent" aria-hidden="true" />
        <h1 className="font-heading max-w-4xl text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.95] text-text">
          {titleLines.map((line, index) => (
            <span key={line} className={index > 0 ? "block text-accent" : "block"}>
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {dict.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="#kontakt">{dict.hero.ctaPrimary}</Button>
          <Button href="#galerija" variant="outline">
            {dict.hero.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
