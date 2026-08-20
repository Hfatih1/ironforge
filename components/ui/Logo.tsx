import type { Locale } from "@/lib/i18n/config";

type LogoProps = {
  className?: string;
  locale?: Locale;
};

function HammerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="14" height="8" rx="1" fill="currentColor" />
      <rect x="30" y="4" width="14" height="8" rx="1" fill="currentColor" />
      <rect x="4" y="36" width="14" height="8" rx="1" fill="currentColor" />
      <rect x="30" y="36" width="14" height="8" rx="1" fill="currentColor" />
      <line
        x1="11"
        y1="12"
        x2="37"
        y2="36"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="37"
        y1="12"
        x2="11"
        y2="36"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="11"
        y1="12"
        x2="11"
        y2="36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="37"
        y1="12"
        x2="37"
        y2="36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className = "", locale = "sr" }: LogoProps) {
  const label = locale === "sr" ? "Iron Forge — početna" : "Iron Forge — home";

  return (
    <div
      className={`flex items-center gap-3 text-text ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="font-heading leading-[0.85] text-[1.65rem] sm:text-[1.85rem]">
        <div>Iron</div>
        <div>Forge</div>
      </div>
      <HammerIcon className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
    </div>
  );
}
