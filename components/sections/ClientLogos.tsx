import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data/site";
import { RevealSection } from "@/components/ui/RevealSection";

export function ClientLogos() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 py-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <p className="text-center text-sm font-medium text-[var(--color-muted)]">Нам доверяют команды из ритейла, медицины и сервиса</p>
        </RevealSection>
        <div className="relative mt-8 overflow-hidden mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-16 md:gap-24">
            {row.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="relative h-10 w-32 shrink-0 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-12 md:w-40"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain object-center"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
