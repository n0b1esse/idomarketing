"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Target, Palette, Code } from "lucide-react";

const services = [
  {
    id: "strategy",
    title: "Strategy",
    icon: Target,
    short: "Brand and product strategy that aligns with business goals.",
    full: "We define positioning, audience, and go-to-market so every decision downstream has a clear North Star. Research, workshops, and roadmaps tailored for premium brands.",
  },
  {
    id: "design",
    title: "Design",
    icon: Palette,
    short: "Visual and experience design that stands out.",
    full: "From identity to UI/UX, we craft distinctive systems that feel cohesive and premium. Design systems, prototypes, and art direction for web and product.",
  },
  {
    id: "development",
    title: "Development",
    icon: Code,
    short: "High-performance, scalable digital products.",
    full: "Modern stacks, clean architecture, and attention to performance and accessibility. We build websites, apps, and platforms that are fast, secure, and maintainable.",
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="grid gap-px border border-white/10 md:grid-cols-3">
        {services.map((service, i) => (
          <ScrollReveal key={service.id} delay={i * 0.1}>
            <div
              className="group relative border border-white/10 bg-black/40 backdrop-blur-xl transition-colors hover:border-white/20"
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
              data-cursor-hover
            >
              <div className="flex flex-col p-8 md:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-white">
                  <service.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-sans text-2xl font-semibold tracking-tight-custom text-white">
                  {service.title}
                </h2>
                <p className="mt-3 font-sans text-sm text-slate-500">
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
                      <p className="font-mono text-sm leading-relaxed text-slate-400">
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
