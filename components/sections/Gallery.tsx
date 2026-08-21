"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { ServiceCategory } from "@/lib/i18n/types";
import { getCategoryLabel } from "@/lib/i18n/categories";
import { galleryItems } from "@/lib/gallery";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

type GalleryProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Gallery({ locale, dict }: GalleryProps) {
  const [filter, setFilter] = useState<ServiceCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categoriesInGallery = [
    ...new Set(galleryItems.map((item) => item.category)),
  ] as ServiceCategory[];

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return (current - 1 + filtered.length) % filtered.length;
    });
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return (current + 1) % filtered.length;
    });
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrevious, showNext]);

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="galerija" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl tracking-wide text-text sm:text-5xl">
            {dict.gallery.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{dict.gallery.subtitle}</p>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label={dict.gallery.title}
        >
          <button
            type="button"
            onClick={() => {
              setFilter("all");
              setLightboxIndex(null);
            }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === "all"
                ? "bg-accent text-bg"
                : "border border-border text-muted hover:border-accent hover:text-text"
            }`}
          >
            {dict.gallery.filterAll}
          </button>
          {categoriesInGallery.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setFilter(category);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  filter === category
                    ? "bg-accent text-bg"
                    : "border border-border text-muted hover:border-accent hover:text-text"
                }`}
              >
                {getCategoryLabel(category, locale)}
              </button>
            ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {filtered.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden border border-border bg-elevated"
            >
              <Image
                src={`/gallery/${item.file}`}
                alt={item.alt[locale]}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-bg/0 transition-colors group-hover:bg-bg/20" />
            </button>
          ))}
        </div>
      </div>

      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt[locale]}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 border border-border px-4 py-2 text-sm text-text hover:border-accent"
          >
            {dict.gallery.close}
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 border border-border px-3 py-4 text-text hover:border-accent sm:block"
            aria-label={dict.gallery.previous}
          >
            <ArrowIcon direction="left" className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 border border-border px-3 py-4 text-text hover:border-accent sm:block"
            aria-label={dict.gallery.next}
          >
            <ArrowIcon direction="right" className="h-5 w-5" />
          </button>

          <figure
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-[min(90vw,960px)]">
              <Image
                src={`/gallery/${activeItem.file}`}
                alt={activeItem.alt[locale]}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-muted">
              {activeItem.alt[locale]}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
