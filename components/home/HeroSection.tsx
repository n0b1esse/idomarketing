"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const line1 = "Мы создаём";
const line2 = "цифровые впечатления";
const line3 = "которые запоминаются.";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-24 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <motion.p
          className="font-mono text-sm text-[#4d6fd0]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Крупнейший селлер интернет‑рекламы в Кыргызстане
        </motion.p>
        <div className="mt-6 overflow-hidden">
          <motion.h1
            className="font-sans text-4xl font-semibold tracking-tight-custom text-[#f8f7fc] sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 80 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {line1}
            <br />
            <span className="text-[#f8f7fc]/90">{line2}</span>
            <br />
            {line3}
          </motion.h1>
        </div>
        <motion.p
          className="mx-auto mt-8 max-w-xl font-sans text-base text-[#f8f7fc]/60 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Стратегия, дизайн и разработка для брендов, которые не хотят быть как
          все.
        </motion.p>
      </div>
    </section>
  );
}
