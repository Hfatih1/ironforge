export const TURNSTILE_ACTION = "contact" as const;

export function getTurnstileSiteKey(): string | undefined {
  return (
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ||
    process.env.TURNSTILE_SITE_KEY?.trim() ||
    undefined
  );
}

export function getTurnstileSecret(): string | undefined {
  return (
    process.env.TURNSTILE_SECRET?.trim() ||
    process.env.TURNSTILE_SECRET_KEY?.trim() ||
    undefined
  );
}

export function getTurnstileHostnames(): Set<string> {
  const raw = process.env.TURNSTILE_HOSTNAMES ?? "";
  return new Set(
    raw
      .split(",")
      .map((hostname) => hostname.trim())
      .filter(Boolean),
  );
}
