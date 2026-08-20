import type { ServiceCategory } from "@/lib/i18n/types";

export type ContactField =
  | "name"
  | "company"
  | "email"
  | "phone"
  | "jobType"
  | "message";

export type ContactFormInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  jobType: ServiceCategory;
  message: string;
  website: string;
  turnstileToken: string;
  locale: "sr" | "en";
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

export const contactJobTypes: ServiceCategory[] = [
  "metalne-konstrukcije",
  "metalni-namestaj",
  "bravarija",
  "cnc-obrada",
  "kapije",
  "ograde",
  "nadstresnice",
  "zavarivanje-servis",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseContactForm(formData: FormData): ContactFormInput {
  return {
    name: String(formData.get("name") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    jobType: String(formData.get("jobType") ?? "") as ServiceCategory,
    message: String(formData.get("message") ?? "").trim(),
    website: String(formData.get("website") ?? "").trim(),
    turnstileToken: String(formData.get("cf-turnstile-response") ?? "").trim(),
    locale: String(formData.get("locale") ?? "sr") === "en" ? "en" : "sr",
  };
}

export function validateContactInput(
  input: ContactFormInput,
  messages: Record<string, string>,
): Partial<Record<ContactField, string>> {
  const errors: Partial<Record<ContactField, string>> = {};

  if (input.name.length < 2) {
    errors.name = messages.nameRequired;
  }

  if (!emailPattern.test(input.email)) {
    errors.email = messages.emailInvalid;
  }

  if (input.phone.length < 6) {
    errors.phone = messages.phoneRequired;
  }

  if (!contactJobTypes.includes(input.jobType)) {
    errors.jobType = messages.jobTypeRequired;
  }

  if (input.message.length < 10) {
    errors.message = messages.messageRequired;
  }

  return errors;
}
