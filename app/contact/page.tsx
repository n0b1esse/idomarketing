import { ContactForm } from "@/components/contact/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Контакты | I DO MARKETING",
  description: "Свяжитесь с нами, чтобы обсудить ваш проект.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr,1fr] lg:gap-24">
          <ScrollReveal>
            <p className="font-mono text-sm text-slate-500">Связаться с нами</p>
            <h1 className="mt-2 font-sans text-4xl font-semibold tracking-tight-custom text-white md:text-5xl">
              Обсудим ваш проект
            </h1>
            <p className="mt-4 max-w-md font-sans text-slate-500">
              Заполните форму или напишите напрямую — вернёмся с ответом и
              предложениями по формату работы.
            </p>
            <div className="mt-10 space-y-6">
              <a
                href="mailto:hello@idomarketing.io"
                className="flex items-center gap-3 font-mono text-sm text-slate-500 transition-colors hover:text-white"
                data-cursor-hover
              >
                <Mail className="h-4 w-4" />
                hello@idomarketing.io
              </a>
              <p className="flex items-center gap-3 font-mono text-sm text-slate-500">
                <MapPin className="h-4 w-4" />
                New York · London · Remote
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
