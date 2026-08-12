"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { homeContent } from "@/content/home";
const layout = [
  { desktopClass: "lg:absolute lg:left-0 lg:top-0 lg:h-[428px] lg:w-[320px] lg:p-7", numClass: "text-[48px] lg:text-[120px]", titleClass: "text-[22px] lg:text-[26px]", bg: "bg-[var(--color-bg-surface)]", border: "border-white", text: "", divider: "bg-[var(--color-accent)]", body: "text-white/70" },
  { desktopClass: "lg:absolute lg:left-[320px] lg:top-0 lg:h-[428px] lg:w-[640px] lg:p-7", numClass: "text-[40px] lg:text-[84px]", titleClass: "text-[22px] lg:text-[26px]", bg: "bg-[var(--color-bg-surface-2)]", border: "border-white", text: "", divider: "bg-[var(--color-accent)]", body: "text-white/70" },
  { desktopClass: "lg:absolute lg:left-0 lg:top-[428px] lg:h-[438px] lg:w-[480px] lg:p-8", numClass: "text-[40px] lg:text-[84px]", titleClass: "text-[24px] lg:text-[30px]", bg: "bg-[var(--color-bg-surface)]", border: "border-white", text: "", divider: "bg-[var(--color-accent)]", body: "text-white/70" },
  { desktopClass: "lg:absolute lg:left-[480px] lg:top-[428px] lg:h-[438px] lg:w-[480px] lg:p-8", numClass: "text-[40px] lg:text-[84px]", titleClass: "text-[24px] lg:text-[30px]", bg: "bg-[var(--color-accent)]", border: "border-[var(--color-bg-base)]", text: "text-[var(--color-bg-base)]", divider: "bg-[var(--color-bg-base)]", body: "text-[var(--color-bg-base)]" },
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

export function WorkApproach(){return <section id="workflow" className="mx-auto w-full max-w-[960px] scroll-mt-[83px] px-5 py-16 md:px-10 lg:w-[960px] lg:px-0 lg:py-[96px]"><h2 className="mb-12 text-4xl font-sans font-extrabold uppercase tracking-[-2px] md:text-[56px] lg:text-[80px]">Cómo trabajo</h2><div className="relative flex flex-col gap-6 lg:block lg:h-[866px] lg:w-full">{homeContent.approach.map(([number,title,body],i)=>{const c=layout[i];return <RevealArticle key={number} index={i} className={`relative w-full overflow-hidden border-2 p-6 ${c.border} ${c.bg} ${c.text} ${c.desktopClass}`}><span className={`font-sans font-semibold leading-none ${c.numClass}`}>{number}</span><h3 className={`mt-5 ${c.titleClass}`}>{title}</h3><div className={`my-4 h-0.5 w-[40px] ${c.divider}`}/><p className={`max-w-[390px] text-[18px] leading-[28px] tracking-[-.18px] ${c.body}`}>{body}</p></RevealArticle>;})}</div></section>}
