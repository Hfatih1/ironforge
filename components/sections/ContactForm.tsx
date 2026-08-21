"use client";

import { useActionState, useEffect, useState } from "react";
import { submitContact } from "@/app/actions/contact";
import { getContactValidationMessages } from "@/lib/contact/messages";
import type { ContactField, ContactFormState } from "@/lib/contact/validation";
import {
  contactJobTypes,
  parseContactForm,
  validateContactInput,
} from "@/lib/contact/validation";
import type { Locale } from "@/lib/i18n/config";
import { getCategoryLabel } from "@/lib/i18n/categories";
import type { Dictionary } from "@/lib/i18n/types";
import { TurnstileWidget } from "@/components/turnstile/TurnstileWidget";

type ContactFormProps = {
  locale: Locale;
  dict: Dictionary;
  turnstileSiteKey?: string;
  turnstileRequired?: boolean;
};

const initialState: ContactFormState = { status: "idle" };

export function ContactForm({
  locale,
  dict,
  turnstileSiteKey,
  turnstileRequired = false,
}: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );
  const [clientErrors, setClientErrors] = useState<
    Partial<Record<ContactField, string>>
  >({});
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [resetSignal, setResetSignal] = useState(0);

  const validationMessages = getContactValidationMessages(locale);
  const turnstileEnabled = Boolean(turnstileSiteKey);
  const mustPassTurnstile = turnstileEnabled || turnstileRequired;
  const hasTurnstileToken = turnstileToken.length > 0;
  const fieldErrors = { ...clientErrors, ...state.fieldErrors };

  useEffect(() => {
    if (state.status === "idle") return;
    setTurnstileToken("");
    setResetSignal((value) => value + 1);
    setTurnstileError(null);
    if (state.fieldErrors) setClientErrors({});
  }, [state.status, state.message]);

  const fieldClass = (field: ContactField) =>
    fieldErrors[field]
      ? "border-red-500/60 focus-visible:outline-red-500/60"
      : "border-border focus-visible:outline-accent";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const input = parseContactForm(formData);
    const errors = validateContactInput(input, validationMessages);

    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setClientErrors(errors);
      return;
    }

    if (mustPassTurnstile && !hasTurnstileToken) {
      event.preventDefault();
      setTurnstileError(validationMessages.turnstileRequired);
      return;
    }

    setClientErrors({});
    setTurnstileError(null);
  };

  const submitWithToken = (formData: FormData) => {
    if (turnstileToken) {
      formData.set("turnstileToken", turnstileToken);
    }
    return formAction(formData);
  };

  return (
    <form
      action={submitWithToken}
      noValidate
      onSubmit={handleSubmit}
      className="space-y-4 border border-border bg-surface p-6 sm:p-8"
    >
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="turnstileToken" value={turnstileToken} readOnly />

      <div className="sr-only" aria-hidden="true">
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
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={`w-full border bg-bg px-4 py-3 text-text ${fieldClass("name")}`}
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-400">
              {fieldErrors.name}
            </p>
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
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={`w-full border bg-bg px-4 py-3 text-text ${fieldClass("email")}`}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400">
              {fieldErrors.email}
            </p>
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
            autoComplete="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            className={`w-full border bg-bg px-4 py-3 text-text ${fieldClass("phone")}`}
          />
          {fieldErrors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-400">
              {fieldErrors.phone}
            </p>
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
          defaultValue=""
          aria-invalid={Boolean(fieldErrors.jobType)}
          aria-describedby={fieldErrors.jobType ? "jobType-error" : undefined}
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
        {fieldErrors.jobType && (
          <p id="jobType-error" className="mt-1 text-xs text-red-400">
            {fieldErrors.jobType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          {dict.contact.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={`w-full resize-y border bg-bg px-4 py-3 text-text ${fieldClass("message")}`}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {turnstileRequired && !turnstileSiteKey && (
        <p
          className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {validationMessages.config}
        </p>
      )}

      {turnstileEnabled && turnstileSiteKey && (
        <TurnstileWidget
          siteKey={turnstileSiteKey}
          resetSignal={resetSignal}
          onTokenChange={(token) => {
            setTurnstileToken(token);
            if (token) setTurnstileError(null);
          }}
        />
      )}

      {turnstileError && (
        <p
          className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {turnstileError}
        </p>
      )}

      {state.status === "success" && state.message && (
        <p
          className="border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-text"
          role="status"
        >
          {state.message}
        </p>
      )}

      {state.status === "error" && state.message && (
        <p
          className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={
          isPending ||
          (mustPassTurnstile && !hasTurnstileToken) ||
          (turnstileRequired && !turnstileSiteKey)
        }
        className="inline-flex w-full items-center justify-center bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-bg transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
      >
        {isPending ? dict.contact.sending : dict.contact.send}
      </button>
    </form>
  );
}
