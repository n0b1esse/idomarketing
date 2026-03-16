import { ContactForm } from "@/components/contact/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, MapPin, Phone } from "lucide-react";

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
            <p className="font-mono text-sm text-[#f8f7fc]/60">Связаться с нами</p>
            <h1 className="mt-2 font-sans text-4xl font-semibold tracking-tight-custom text-[#f8f7fc] md:text-5xl">
              Обсудим ваш проект
            </h1>
            <p className="mt-4 max-w-md font-sans text-[#f8f7fc]/60">
              Заполните форму или напишите напрямую — вернёмся с ответом и
              предложениями по формату работы.
            </p>
            <div className="mt-10 space-y-6">
              <a
                href="mailto:hello@idomarketing.io"
                className="flex items-center gap-3 font-mono text-sm text-[#f8f7fc]/60 transition-colors hover:text-[#4d6fd0]"
                data-cursor-hover
              >
                <Mail className="h-4 w-4" />
                hello@idomarketing.io
              </a>
              <a
                href="tel:+996555002730"
                className="flex items-center gap-3 font-mono text-sm text-[#f8f7fc]/60 transition-colors hover:text-[#4d6fd0]"
                data-cursor-hover
              >
                <Phone className="h-4 w-4" />
                +996 555 002 730
              </a>
              <a
                href="tel:+996312961999"
                className="flex items-center gap-3 font-mono text-sm text-[#f8f7fc]/60 transition-colors hover:text-[#4d6fd0]"
                data-cursor-hover
              >
                <Phone className="h-4 w-4" />
                +996 312 961 999
              </a>
              <p className="flex items-center gap-3 font-mono text-sm text-[#f8f7fc]/60">
                <MapPin className="h-4 w-4 shrink-0" />
                ул. Юнусалиева 173/2, Кыргызстан
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
