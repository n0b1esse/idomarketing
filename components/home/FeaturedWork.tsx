"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const featured = [
  {
    slug: "brand-x",
    title: "Brand X",
    category: "Brand Identity & Web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
    year: "2024",
  },
  {
    slug: "luxury-resort",
    title: "Luxury Resort",
    category: "Digital Experience",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    year: "2024",
  },
  {
    slug: "fintech-app",
    title: "Fintech App",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    year: "2023",
  },
];

export function FeaturedWork() {
  return (
    <section className="border-t border-[#f8f7fc]/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-sm text-[#f8f7fc]/60">Избранные проекты</p>
          <h2 className="mt-2 font-sans text-3xl font-semibold tracking-tight-custom text-[#f8f7fc] md:text-4xl">
            Ключевые кейсы
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.1}>
              <Link
                href={`/work#${item.slug}`}
                className="group relative block overflow-hidden rounded-lg border border-[#f8f7fc]/10 bg-[#f8f7fc]/5 backdrop-blur-xl transition-colors hover:border-[#4d6fd0]/50"
                data-cursor-hover
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b28]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="border-t border-[#f8f7fc]/10 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-[#f8f7fc]/60">{item.category}</p>
                      <h3 className="mt-1 font-sans text-xl font-medium tracking-tight-custom text-[#f8f7fc]">
                        {item.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[#f8f7fc]/10 p-2 transition-colors group-hover:border-[#4d6fd0]">
                      <ArrowUpRight className="h-4 w-4 text-[#f8f7fc]" />
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-xs text-[#f8f7fc]/60">{item.year}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#f8f7fc]/60 transition-colors hover:text-[#4d6fd0]"
            data-cursor-hover
          >
            Смотреть все кейсы
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
