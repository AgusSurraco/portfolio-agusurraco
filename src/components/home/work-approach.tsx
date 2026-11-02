"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { homeContent } from "@/content/home";
import { Section, card } from "@/components/ui/section";

const accentCard = "rounded-[var(--radius-xl)] bg-[var(--accent)] text-[var(--on-accent)]";
const layout = [
  { span: "lg:col-span-2 lg:p-7", numClass: "text-[48px] lg:text-[120px]", titleClass: "text-[22px] lg:text-[26px]", box: card, num: "text-[var(--accent-light)]", divider: "bg-[var(--accent-light)]", body: "text-white/70" },
  { span: "lg:col-span-4 lg:p-7", numClass: "text-[40px] lg:text-[84px]", titleClass: "text-[22px] lg:text-[26px]", box: card, num: "text-[var(--accent-light)]", divider: "bg-[var(--accent-light)]", body: "text-white/70" },
  { span: "lg:col-span-3 lg:p-8", numClass: "text-[40px] lg:text-[84px]", titleClass: "text-[24px] lg:text-[30px]", box: card, num: "text-[var(--accent-light)]", divider: "bg-[var(--accent-light)]", body: "text-white/70" },
  { span: "lg:col-span-3 lg:p-8", numClass: "text-[40px] lg:text-[84px]", titleClass: "text-[24px] lg:text-[30px]", box: accentCard, num: "text-[color-mix(in_srgb,var(--on-accent)_60%,transparent)]", divider: "bg-[var(--on-accent)]", body: "text-[var(--on-accent)]" },
];

function RevealArticle({ index, className, children }: { index: number; className: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <article ref={ref} style={{ transitionDelay: `${index * 110}ms` }} className={`${className} motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out ${visible ? "motion-safe:opacity-100 motion-safe:translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-5"}`}>{children}</article>;
}

export function WorkApproach(){return <Section id="workflow" ghost="02" label="02 — Cómo trabajo"><h2 className="mt-10 font-display text-[40px] font-extrabold leading-[1.1] tracking-[-1.5px] md:text-[56px]">Cómo trabajo</h2><div className="mb-20 mt-10 grid grid-cols-1 gap-3 md:mb-[120px] lg:grid-cols-6">{homeContent.approach.map(([number,title,body],i)=>{const c=layout[i];return <RevealArticle key={number} index={i} className={`relative w-full overflow-hidden p-6 ${c.box} ${c.span}`}><span className={`font-display font-extrabold leading-none ${c.num} ${c.numClass}`}>{number}</span><h3 className={`mt-5 ${c.titleClass}`}>{title}</h3><div className={`my-4 h-0.5 w-[40px] ${c.divider}`}/><p className={`max-w-[390px] text-[18px] leading-[28px] tracking-[-.18px] ${c.body}`}>{body}</p></RevealArticle>;})}</div></Section>}
