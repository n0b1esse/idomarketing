"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(
  name: string,
  email: string,
  phone: string,
  message: string,
  variant: "short" | "full",
): string | null {
  if (!name.trim()) return "Укажите имя";
  if (variant === "short") {
    const hasEmail = email.trim().length > 0;
    const hasPhone = phone.replace(/\D/g, "").length >= 9;
    if (!hasEmail && !hasPhone) return "Укажите email или телефон";
    if (hasEmail && !emailRe.test(email)) return "Проверьте формат email";
    return null;
  }
  if (!email.trim()) return "Укажите email";
  if (!emailRe.test(email)) return "Проверьте формат email";
  if (!message.trim()) return "Опишите задачу";
  return null;
}

export function ContactForm({ variant = "full" }: { variant?: "short" | "full" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(name, email, phone, message, variant);
    setError(err);
    if (err) return;
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("done");
    }, 900);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 md:p-8"
      noValidate
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="cf-name" className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
            Имя *
          </label>
          <input
            id="cf-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="mt-2 w-full border-b border-[var(--color-border)] bg-transparent py-2 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
            placeholder="Как к вам обращаться"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
            Email {variant === "short" ? "" : "*"}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="mt-2 w-full border-b border-[var(--color-border)] bg-transparent py-2 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
            Телефон {variant === "short" ? "" : ""}
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            className="mt-2 w-full border-b border-[var(--color-border)] bg-transparent py-2 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
            placeholder="+996 …"
          />
        </div>
        {variant === "full" && (
          <div>
            <label htmlFor="cf-msg" className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
              Задача *
            </label>
            <textarea
              id="cf-msg"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-none border-b border-[var(--color-border)] bg-transparent py-2 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
              placeholder="Кратко о продукте, сроках и KPI"
            />
          </div>
        )}
      </div>
      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
      <div className="mt-8">
        <Button type="submit" variant="primary" className="w-full justify-center sm:w-auto" disabled={status === "sending"}>
          {status === "idle" && "Отправить"}
          {status === "sending" && "Отправляем…"}
          {status === "done" && "Спасибо, мы на связи"}
        </Button>
      </div>
    </form>
  );
}
