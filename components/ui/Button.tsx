import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium font-[family-name:var(--font-body)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[#0a0a0a] hover:bg-[var(--color-primary-hover)] shadow-[0_12px_40px_-12px_rgba(249,115,22,0.45)]",
  secondary:
    "bg-[var(--color-surface-elevated)] text-[var(--color-text)] border border-[var(--color-border-strong)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-surface)]",
  ghost:
    "bg-transparent text-[var(--color-text)] border border-transparent hover:bg-[var(--color-surface)] hover:border-[var(--color-border)]",
};

export interface ButtonProps extends Omit<ComponentProps<"button">, "className"> {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`.trim();
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
