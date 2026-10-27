import type { ReactNode } from "react";
import { Reveal } from "@/components/case-study/reveal";

export const csContainer = "mx-auto w-full max-w-[960px] px-4 lg:px-0";
export const csCard = "rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-white/[0.04]";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-4 font-sans text-[12px] uppercase tracking-[3px] text-[var(--color-text-muted)]">
      <span aria-hidden="true" className="h-px w-12 shrink-0 bg-[var(--cs-accent-light)]" />
      {children}
    </p>
  );
}

export function SectionShell({ id, ghost, label, children }: { id: string; ghost: string; label: string; children: ReactNode }) {
  return (
    <section id={id} aria-label={label.split("— ")[1]} className="relative overflow-hidden pt-20 md:pt-[120px]">
      <span aria-hidden="true" className="cs-ghost pointer-events-none absolute right-0 top-[-40px] z-0 hidden translate-x-[20%] select-none font-sans text-[220px] font-black leading-none lg:block">{ghost}</span>
      <div className={`relative z-10 ${csContainer}`}>
        <Reveal className="relative">
          <SectionLabel>{label}</SectionLabel>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
