"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { getContactValidationMessages } from "@/lib/contact/messages";
import type { ContactFormState } from "@/lib/contact/validation";
import {
  parseContactForm,
  validateContactInput,
} from "@/lib/contact/validation";
import { getCategoryLabel } from "@/lib/i18n/categories";
import { siteConfig } from "@/lib/site-config";
import { getTurnstileSecret } from "@/lib/turnstile/config";
import { verifyTurnstileToken } from "@/lib/turnstile/verify";

function formatFromAddress(email: string): string {
  const trimmed = email.trim();
  if (trimmed.includes("<")) return trimmed;
  return `Iron Forge <${trimmed}>`;
}

async function getClientIp(): Promise<string | undefined> {
  const headerList = await headers();
  return (
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip")?.trim() ||
    undefined
  );
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const input = parseContactForm(formData);
    const messages = getContactValidationMessages(input.locale);

    if (input.website) {
      return { status: "error", message: messages.spam };
    }

    const fieldErrors = validateContactInput(input, messages);
    if (Object.keys(fieldErrors).length > 0) {
      return { status: "error", fieldErrors };
    }

    if (getTurnstileSecret()) {
      if (!input.turnstileToken) {
        return { status: "error", message: messages.turnstileRequired };
      }

      const turnstileResult = await verifyTurnstileToken(
        input.turnstileToken,
        await getClientIp(),
      );

      if (!turnstileResult.ok) {
        return { status: "error", message: messages.spam };
      }
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const emailTo = process.env.CONTACT_EMAIL_TO?.trim();
    const emailFrom = process.env.CONTACT_EMAIL_FROM?.trim();

    if (!apiKey || !emailTo || !emailFrom) {
      return { status: "error", message: messages.config };
    }

    const jobLabel = getCategoryLabel(input.jobType, input.locale);
    const subject =
      input.locale === "sr"
        ? `Upit sa sajta: ${jobLabel} — ${input.company || input.name}`
        : `Website inquiry: ${jobLabel} — ${input.company || input.name}`;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;

    const body = [
      `Ime / Name: ${input.name}`,
      `Firma / Company: ${input.company || "—"}`,
      `E-mail: ${input.email}`,
      `Telefon / Phone: ${input.phone}`,
      `Tip posla / Job type: ${jobLabel}`,
      "",
      input.message,
      "",
      `— Poslato sa / Sent from: ${siteUrl}/${input.locale}`,
    ].join("\n");

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: formatFromAddress(emailFrom),
      to: emailTo,
      replyTo: input.email,
      subject,
      text: body,
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error", message: messages.sendError };
    }

    return { status: "success", message: messages.success };
  } catch (error) {
    console.error("Contact form error:", error);
    const locale = String(formData.get("locale") ?? "sr") === "en" ? "en" : "sr";
    return {
      status: "error",
      message: getContactValidationMessages(locale).sendError,
    };
  }
}
