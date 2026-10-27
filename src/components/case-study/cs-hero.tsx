import Image from "next/image";
import { Header } from "@/components/layout/header";
import { csContainer } from "@/components/case-study/section-shell";
import type { CaseStudy } from "@/content/case-studies/postsmart";

const glass = "border border-white/[0.16] bg-black/[0.72] backdrop-blur-[24px]";

function Chip({ value, label, className }: { value: string; label: string; className: string }) {
  return (
    <div className={`${glass} rounded-2xl px-5 py-3 ${className}`}>
      <p className="font-display text-[34px] font-extrabold leading-none text-[var(--cs-accent-light)]">{value}</p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}

export function CsHero({ hero }: { hero: CaseStudy["hero"] }) {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[780px] flex-col overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-base)",
        backgroundImage:
          "radial-gradient(circle at 72% 42%, color-mix(in srgb, var(--cs-accent-mid) 55%, transparent), transparent 55%), radial-gradient(circle at 0% 100%, color-mix(in srgb, var(--cs-accent) 45%, transparent), transparent 50%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 4%) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 4%) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
      <Header />

      <div className={`relative flex flex-1 flex-col pt-[107px] ${csContainer}`}>
        <a href={hero.backHref} className="inline-flex min-h-[44px] w-fit items-center text-sm text-white/70 transition-colors hover:text-white">{hero.back}</a>

        <div className="mt-8 grid flex-1 items-center gap-12 pb-12 md:grid-cols-[1fr_auto] md:gap-8">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-[var(--cs-accent)] font-display text-[28px] font-extrabold">P</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.06] px-4 py-2 font-sans text-[13px] font-medium tracking-[2px]">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--cs-accent-light)]" />
                {hero.pill}
              </span>
            </div>
            <h1 className="mt-8 font-display text-[48px] font-extrabold leading-[1.02] tracking-[-3.5px] md:text-[72px] lg:text-[88px]">
              {hero.titleLine1}
              <br />
              <span className="text-[var(--cs-accent-light)]">{hero.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-[480px] font-sans text-[20px] font-light leading-[1.5] text-white/65">{hero.subtitle}</p>
          </div>

          <div className="relative mx-auto w-full max-w-[410px] md:w-[320px] lg:w-[410px]">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cs-accent-mid)] opacity-[0.55] blur-[140px] md:h-[560px] md:w-[560px]" />
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              priority
              sizes="(min-width: 1024px) 410px, (min-width: 768px) 320px, 100vw"
              className="relative h-auto w-full drop-shadow-[0_40px_60px_rgb(0_0_0_/_50%)]"
            />
            <Chip {...hero.chips[0]} className="hidden md:absolute md:-left-16 md:top-12 md:block" />
            <Chip {...hero.chips[1]} className="hidden md:absolute md:-right-10 md:bottom-16 md:block" />
          </div>

          <div className="flex flex-col gap-3 md:hidden">
            {hero.chips.map((chip) => <Chip key={chip.label} {...chip} className="relative" />)}
          </div>
        </div>
      </div>

      <dl className={`relative ${glass} mx-auto grid w-full max-w-[960px] grid-cols-2 gap-x-6 gap-y-4 rounded-t-[20px] border-b-0 px-6 py-5 md:grid-cols-[auto_auto_auto_auto_1fr]`}>
        {hero.meta.map((item) => (
          <div key={item.label} className={item.label === "Herramientas" ? "col-span-2 md:col-span-1" : ""}>
            <dt className="text-[11px] uppercase tracking-[2px] text-[var(--color-text-muted)]">{item.label}</dt>
            <dd className="mt-1 text-sm text-white/90">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
