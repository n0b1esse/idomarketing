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
      className="rounded-xl border border-[#f8f7fc]/10 bg-[#f8f7fc]/5 p-8 backdrop-blur-xl md:p-10"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-mono text-xs text-[#f8f7fc]/60">
            Имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full border-b border-[#f8f7fc]/10 bg-transparent py-3 font-sans text-[#f8f7fc] placeholder-[#f8f7fc]/40 outline-none transition-colors focus:border-[#4d6fd0]"
            placeholder="Как к вам обращаться"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs text-[#f8f7fc]/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border-b border-[#f8f7fc]/10 bg-transparent py-3 font-sans text-[#f8f7fc] placeholder-[#f8f7fc]/40 outline-none transition-colors focus:border-[#4d6fd0]"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-mono text-xs text-[#f8f7fc]/60">
            Проект
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-2 w-full resize-none border-b border-[#f8f7fc]/10 bg-transparent py-3 font-sans text-[#f8f7fc] placeholder-[#f8f7fc]/40 outline-none transition-colors focus:border-[#4d6fd0]"
            placeholder="Кратко опишите задачу, сроки и формат сотрудничества"
          />
        </div>
      </div>
      <div className="mt-10">
        <MagneticButton>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-full border border-[#4d6fd0] bg-[#4d6fd0] px-6 py-3 font-mono text-sm text-[#f8f7fc] transition-opacity disabled:opacity-50 hover:bg-[#3d5fc0]"
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
