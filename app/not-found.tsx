import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 text-center">
      <p className="font-heading text-8xl text-accent">404</p>
      <h1 className="font-heading mt-4 text-3xl tracking-wide text-text sm:text-4xl">
        Stranica nije pronađena
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Page not found. The link may be outdated or the page has been moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/sr"
          className="inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wide text-text transition-colors hover:border-accent"
        >
          Početna (SR)
        </Link>
        <Link
          href="/en"
          className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-bg transition-colors hover:bg-accent-hover"
        >
          Home (EN)
        </Link>
      </div>
    </div>
  );
}
