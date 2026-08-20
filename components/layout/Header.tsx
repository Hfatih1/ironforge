"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { alternateLocale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getAlternatePath } from "@/lib/i18n/routes";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
  pathname: string;
};

const navItems = [
  { key: "services" as const, href: "#usluge" },
  { key: "whyUs" as const, href: "#zasto" },
  { key: "process" as const, href: "#proces" },
  { key: "gallery" as const, href: "#galerija" },
  { key: "about" as const, href: "#o-nama" },
  { key: "faq" as const, href: "#faq" },
  { key: "contact" as const, href: "#kontakt" },
];

export function Header({ locale, dict, pathname }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const alternatePath = getAlternatePath(locale, pathname);
  const alternate = alternateLocale[locale];
  const homeBase = `/${locale}`;
  const isHome = pathname === homeBase;
  const sectionHref = (hash: string) => (isHome ? hash : `${homeBase}${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border bg-bg/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Link href={`/${locale}`} className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Logo locale={locale} />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label={locale === "sr" ? "Glavna navigacija" : "Main navigation"}
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={sectionHref(item.href)}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {dict.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={alternatePath}
            className="hidden min-w-10 text-center text-sm font-semibold tracking-wider text-muted transition-colors hover:text-accent sm:inline-block"
            aria-label={locale === "sr" ? "Prebaci na engleski" : "Switch to Serbian"}
          >
            {alternate.toUpperCase()}
          </Link>

          <Button href={sectionHref("#kontakt")} className="hidden sm:inline-flex">
            {dict.nav.cta}
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-text lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? dict.nav.closeMenu : dict.nav.menu}</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-bg px-4 py-6 lg:hidden"
          aria-label={locale === "sr" ? "Mobilna navigacija" : "Mobile navigation"}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={sectionHref(item.href)}
                  className="block text-lg text-text"
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav[item.key]}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={alternatePath}
                className="text-sm font-semibold tracking-wider text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {alternate.toUpperCase()}
              </Link>
            </li>
            <li className="pt-2">
              <Button
                href={sectionHref("#kontakt")}
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                {dict.nav.cta}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
