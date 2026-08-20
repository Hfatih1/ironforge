import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
  href: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-hover border border-accent",
  outline:
    "bg-transparent text-text border border-border hover:border-accent hover:text-accent",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
