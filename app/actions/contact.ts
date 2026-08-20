"use server";

import { Resend } from "resend";
import type { ContactFormState } from "@/lib/contact/validation";
import {
  contactJobTypes,
  parseContactForm,
  validateContactInput,
} from "@/lib/contact/validation";
import { getCategoryLabel } from "@/lib/i18n/categories";
import { siteConfig } from "@/lib/site-config";

const validationMessages = {
  sr: {
    nameRequired: "Unesite ime i prezime.",
    emailInvalid: "Unesite ispravnu e-mail adresu.",
    phoneRequired: "Unesite broj telefona.",
    jobTypeRequired: "Izaberite tip posla.",
    messageRequired: "Poruka mora imati najmanje 10 karaktera.",
    spam: "Upit nije poslat. Pokušajte ponovo.",
    config: "Forma trenutno nije aktivna. Kontaktirajte nas telefonom ili e-mailom.",
    sendError: "Greška pri slanju. Pokušajte ponovo ili nas kontaktirajte direktno.",
    success:
      "Upit je poslat. Odgovor možete očekivati u roku od jednog radnog dana.",
  },
  en: {
    nameRequired: "Please enter your full name.",
    emailInvalid: "Please enter a valid email address.",
    phoneRequired: "Please enter a phone number.",
    jobTypeRequired: "Please select a job type.",
    messageRequired: "Message must be at least 10 characters.",
    spam: "Your inquiry was not sent. Please try again.",
    config: "The form is not active yet. Please contact us by phone or email.",
    sendError: "Failed to send. Please try again or contact us directly.",
    success:
      "Your inquiry has been sent. Expect a reply within one business day.",
  },
};

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    },
  );

  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const input = parseContactForm(formData);
  const messages = validationMessages[input.locale];

  if (input.website) {
    return { status: "error", message: messages.spam };
  }

  const fieldErrors = validateContactInput(input, messages);
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  const turnstileOk = await verifyTurnstile(input.turnstileToken);
  if (!turnstileOk) {
    return { status: "error", message: messages.spam };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.CONTACT_EMAIL_TO;
  const emailFrom = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !emailTo || !emailFrom) {
    return { status: "error", message: messages.config };
  }

  const jobLabel = getCategoryLabel(input.jobType, input.locale);
  const subject =
    input.locale === "sr"
      ? `Upit sa sajta: ${jobLabel} — ${input.company || input.name}`
      : `Website inquiry: ${jobLabel} — ${input.company || input.name}`;

  const body = [
    `Ime / Name: ${input.name}`,
    `Firma / Company: ${input.company || "—"}`,
    `E-mail: ${input.email}`,
    `Telefon / Phone: ${input.phone}`,
    `Tip posla / Job type: ${jobLabel}`,
    "",
    input.message,
    "",
    `— Poslato sa / Sent from: ${siteConfig.siteUrl}/${input.locale}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: input.email,
      subject,
      text: body,
    });

    if (error) {
      return { status: "error", message: messages.sendError };
    }

    return { status: "success", message: messages.success };
  } catch {
    return { status: "error", message: messages.sendError };
  }
}

export { contactJobTypes };
