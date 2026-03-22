import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition-transform duration-300 ${
        hover ? "hover:-translate-y-1 hover:border-[var(--color-primary)]/35 hover:shadow-[0_24px_60px_-24px_rgba(249,115,22,0.25)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
