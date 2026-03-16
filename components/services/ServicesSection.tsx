"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Target, Palette, Code } from "lucide-react";

const services = [
  {
    id: "strategy",
    title: "Стратегия",
    icon: Target,
    short: "Стратегия бренда и продукта, связанная с бизнес‑целями.",
    full:
      "Определяем позиционирование, аудиторию и роль цифровых каналов. Исследования, воркшопы и дорожные карты, на которые можно опираться при принятии решений.",
  },
  {
    id: "design",
    title: "Дизайн",
    icon: Palette,
    short: "Визуальный и UX‑дизайн, который выделяет бренд.",
    full:
      "От айдентики до продуктового UI/UX. Создаём цельные дизайн‑системы, прототипы и арт‑направление для цифровых продуктов и сайтов.",
  },
  {
    id: "development",
    title: "Разработка",
    icon: Code,
    short: "Высокопроизводительные и масштабируемые цифровые продукты.",
    full:
      "Современный стек, чистая архитектура и внимание к скорости и доступности. Разрабатываем сайты, сервисы и интерфейсы, которыми удобно пользоваться и просто поддерживать.",
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="grid gap-px border border-[#f8f7fc]/10 md:grid-cols-3">
        {services.map((service, i) => (
          <ScrollReveal key={service.id} delay={i * 0.1}>
            <div
              className="group relative border border-[#f8f7fc]/10 bg-[#1d1b28]/60 backdrop-blur-xl transition-colors hover:border-[#4d6fd0]/50"
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
              data-cursor-hover
            >
              <div className="flex flex-col p-8 md:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#f8f7fc]/10 text-[#4d6fd0]">
                  <service.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-sans text-2xl font-semibold tracking-tight-custom text-[#f8f7fc]">
                  {service.title}
                </h2>
                <p className="mt-3 font-sans text-sm text-[#f8f7fc]/60">
                  {service.short}
                </p>
                <AnimatePresence mode="wait">
                  {activeId === service.id ? (
                    <motion.div
                      key="full"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 overflow-hidden"
                    >
                      <p className="font-mono text-sm leading-relaxed text-[#f8f7fc]/70">
                        {service.full}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="short"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-6"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
