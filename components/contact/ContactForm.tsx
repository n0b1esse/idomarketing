"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("done");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-mono text-xs text-slate-500">
            Имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full border-b border-white/10 bg-transparent py-3 font-sans text-white placeholder-slate-600 outline-none transition-colors focus:border-white/30"
            placeholder="Как к вам обращаться"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs text-slate-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border-b border-white/10 bg-transparent py-3 font-sans text-white placeholder-slate-600 outline-none transition-colors focus:border-white/30"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-mono text-xs text-slate-500">
            Проект
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-2 w-full resize-none border-b border-white/10 bg-transparent py-3 font-sans text-white placeholder-slate-600 outline-none transition-colors focus:border-white/30"
            placeholder="Кратко опишите задачу, сроки и формат сотрудничества"
          />
        </div>
      </div>
      <div className="mt-10">
        <MagneticButton>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-6 py-3 font-mono text-sm text-black transition-opacity disabled:opacity-50 hover:bg-white/90"
            data-cursor-hover
          >
            {status === "idle" && "Отправить заявку"}
            {status === "sending" && "Отправляем…"}
            {status === "done" && "Спасибо, получили"}
          </button>
        </MagneticButton>
      </div>
    </form>
  );
}
