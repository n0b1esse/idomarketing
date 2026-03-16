import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { MagneticButton } from "@/components/MagneticButton";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWork />
      <ScrollReveal className="border-t border-[#f8f7fc]/10">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="font-mono text-sm text-[#f8f7fc]/60">
                Давайте создадим что-то действительно выдающееся
              </p>
              <h2 className="mt-2 font-sans text-2xl font-medium tracking-tight-custom text-[#f8f7fc] md:text-3xl">
                Готовы обсудить ваш проект?
              </h2>
            </div>
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#f8f7fc]/10 bg-[#f8f7fc]/5 px-6 py-3 font-mono text-sm text-[#f8f7fc] backdrop-blur-xl transition-colors hover:border-[#4d6fd0] hover:bg-[#4d6fd0]/20"
                data-cursor-hover
              >
                Связаться с нами
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
