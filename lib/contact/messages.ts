import type { Locale } from "@/lib/i18n/config";

export type ContactValidationMessages = {
  nameRequired: string;
  emailInvalid: string;
  phoneRequired: string;
  jobTypeRequired: string;
  messageRequired: string;
  spam: string;
  turnstileRequired: string;
  config: string;
  sendError: string;
  success: string;
};

const validationMessages: Record<Locale, ContactValidationMessages> = {
  sr: {
    nameRequired: "Unesite ime i prezime.",
    emailInvalid: "Unesite ispravnu e-mail adresu.",
    phoneRequired: "Unesite broj telefona.",
    jobTypeRequired: "Izaberite tip posla.",
    messageRequired: "Poruka mora imati najmanje 10 karaktera.",
    spam: "Upit nije poslat. Potvrdite Turnstile proveru i pokušajte ponovo.",
    turnstileRequired:
      "Sačekajte da se učita sigurnosna provera, pa pošaljite formu.",
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
    spam: "Your inquiry was not sent. Complete the Turnstile check and try again.",
    turnstileRequired:
      "Wait for the security check to load, then submit the form.",
    config: "The form is not active yet. Please contact us by phone or email.",
    sendError: "Failed to send. Please try again or contact us directly.",
    success:
      "Your inquiry has been sent. Expect a reply within one business day.",
  },
};

export function getContactValidationMessages(
  locale: Locale,
): ContactValidationMessages {
  return validationMessages[locale];
}
