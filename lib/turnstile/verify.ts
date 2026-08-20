import {
  TURNSTILE_ACTION,
  getTurnstileHostnames,
  getTurnstileSecret,
} from "@/lib/turnstile/config";

type SiteverifyResponse = {
  success?: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export type TurnstileVerifyResult =
  | { ok: true }
  | { ok: false; reason: "missing" | "invalid" | "config" };

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<TurnstileVerifyResult> {
  const secret = getTurnstileSecret();
  if (!secret) return { ok: true };

  const expectedHostnames = getTurnstileHostnames();

  if (!token || token.length > 2048) {
    return { ok: false, reason: "missing" };
  }

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
    });

    if (remoteIp) {
      body.set("remoteip", remoteIp);
    }

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: AbortSignal.timeout(10_000),
        body,
      },
    );

    if (!response.ok) {
      return { ok: false, reason: "invalid" };
    }

    const result = (await response.json()) as SiteverifyResponse;

    const actionMismatch =
      result.action !== undefined && result.action !== TURNSTILE_ACTION;
    const hostnameMismatch =
      expectedHostnames.size > 0 &&
      (!result.hostname || !expectedHostnames.has(result.hostname));

    if (!result.success || actionMismatch || hostnameMismatch) {
      console.error("Turnstile siteverify failed:", {
        errorCodes: result["error-codes"],
        action: result.action,
        hostname: result.hostname,
      });
      return { ok: false, reason: "invalid" };
    }

    return { ok: true };
  } catch (error) {
    console.error("Turnstile siteverify error:", error);
    return { ok: false, reason: "invalid" };
  }
}
