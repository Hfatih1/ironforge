"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { submitContact } from "@/app/actions/contact";
import type { ContactFormState } from "@/lib/contact/validation";
import { contactJobTypes } from "@/lib/contact/validation";
import type { Locale } from "@/lib/i18n/config";
import { getCategoryLabel } from "@/lib/i18n/categories";
import type { Dictionary } from "@/lib/i18n/types";

type ContactFormProps = {
  locale: Locale;
  dict: Dictionary;
  turnstileSiteKey?: string;
};

const initialState: ContactFormState = { status: "idle" };

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          theme?: "dark" | "light" | "auto";
        },
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function ContactForm({ locale, dict, turnstileSiteKey }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const tokenRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      !turnstileReady ||
      !turnstileSiteKey ||
      !turnstileRef.current ||
      !window.turnstile
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: turnstileSiteKey,
      theme: "dark",
      callback: (token) => {
        if (tokenRef.current) tokenRef.current.value = token;
      },
      "expired-callback": () => {
        if (tokenRef.current) tokenRef.current.value = "";
        if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
      },
    });
  }, [turnstileReady]);

  useEffect(() => {
    if (state.status === "success" && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      if (tokenRef.current) tokenRef.current.value = "";
    }
  }, [state.status]);

  const fieldClass = (field: keyof NonNullable<ContactFormState["fieldErrors"]>) =>
    state.fieldErrors?.[field]
      ? "border-red-500/60 focus-visible:outline-red-500/60"
      : "border-border focus-visible:outline-accent";

  return (
    <>
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="lazyOnload"
          onLoad={() => setTurnstileReady(true)}
        />
      )}

      <form action={formAction} className="space-y-4 border border-border bg-surface p-6 sm:p-8">
        <input type="hidden" name="locale" value={locale} />
        <input ref={tokenRef} type="hidden" name="cf-turnstile-response" defaultValue="" />

        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
              {dict.contact.name} *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={`w-full border bg-bg px-4 py-3 text-text ${fieldClass("name")}`}
            />
            {state.fieldErrors?.name && (
              <p className="mt-1 text-xs text-red-400">{state.fieldErrors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm text-muted">
              {dict.contact.company}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className={`w-full border bg-bg px-4 py-3 text-text ${fieldClass("company")}`}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
              {dict.contact.email} *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={`w-full border bg-bg px-4 py-3 text-text ${fieldClass("email")}`}
            />
            {state.fieldErrors?.email && (
              <p className="mt-1 text-xs text-red-400">{state.fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
              {dict.contact.phone} *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={`w-full border bg-bg px-4 py-3 text-text ${fieldClass("phone")}`}
            />
            {state.fieldErrors?.phone && (
              <p className="mt-1 text-xs text-red-400">{state.fieldErrors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="jobType" className="mb-1.5 block text-sm text-muted">
            {dict.contact.jobType} *
          </label>
          <select
            id="jobType"
            name="jobType"
            required
            defaultValue=""
            className={`w-full border bg-bg px-4 py-3 text-text ${fieldClass("jobType")}`}
          >
            <option value="" disabled>
              {dict.contact.jobTypePlaceholder}
            </option>
            {contactJobTypes.map((category) => (
              <option key={category} value={category}>
                {getCategoryLabel(category, locale)}
              </option>
            ))}
          </select>
          {state.fieldErrors?.jobType && (
            <p className="mt-1 text-xs text-red-400">{state.fieldErrors.jobType}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
            {dict.contact.message} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`w-full resize-y border bg-bg px-4 py-3 text-text ${fieldClass("message")}`}
          />
          {state.fieldErrors?.message && (
            <p className="mt-1 text-xs text-red-400">{state.fieldErrors.message}</p>
          )}
        </div>

        {turnstileSiteKey && <div ref={turnstileRef} className="min-h-[65px]" />}

        {state.status === "success" && state.message && (
          <p className="border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-text" role="status">
            {state.message}
          </p>
        )}

        {state.status === "error" && state.message && (
          <p className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex w-full items-center justify-center bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-bg transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
        >
          {isPending ? dict.contact.sending : dict.contact.send}
        </button>
      </form>
    </>
  );
}
