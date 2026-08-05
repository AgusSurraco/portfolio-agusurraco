"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { homeContent } from "@/content/home";
const layout = [
  { desktopClass: "md:absolute md:left-0 md:top-0 md:h-[428px] md:w-[320px] md:p-7", numClass: "text-[48px] md:text-[120px]", titleClass: "text-[22px] md:text-[26px]", bg: "bg-[var(--color-bg-surface)]", border: "border-white", text: "", divider: "bg-[var(--color-accent)]", body: "text-white/70" },
  { desktopClass: "md:absolute md:left-[320px] md:top-0 md:h-[428px] md:w-[640px] md:p-7", numClass: "text-[40px] md:text-[84px]", titleClass: "text-[22px] md:text-[26px]", bg: "bg-[var(--color-bg-surface-2)]", border: "border-white", text: "", divider: "bg-[var(--color-accent)]", body: "text-white/70" },
  { desktopClass: "md:absolute md:left-0 md:top-[428px] md:h-[438px] md:w-[480px] md:p-8", numClass: "text-[40px] md:text-[84px]", titleClass: "text-[24px] md:text-[30px]", bg: "bg-[var(--color-bg-surface)]", border: "border-white", text: "", divider: "bg-[var(--color-accent)]", body: "text-white/70" },
  { desktopClass: "md:absolute md:left-[480px] md:top-[428px] md:h-[438px] md:w-[480px] md:p-8", numClass: "text-[40px] md:text-[84px]", titleClass: "text-[24px] md:text-[30px]", bg: "bg-[var(--color-accent)]", border: "border-[var(--color-bg-base)]", text: "text-[var(--color-bg-base)]", divider: "bg-[var(--color-bg-base)]", body: "text-[var(--color-bg-base)]" },
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

export function WorkApproach(){return <section id="workflow" className="mx-auto w-full max-w-[960px] scroll-mt-[83px] px-5 py-16 md:w-[960px] md:px-0 md:py-[96px]"><h2 className="mb-12 text-4xl font-sans font-extrabold uppercase tracking-[-2px] md:text-[80px]">Cómo trabajo</h2><div className="relative flex flex-col gap-6 md:block md:h-[866px] md:w-full">{homeContent.approach.map(([number,title,body],i)=>{const c=layout[i];return <RevealArticle key={number} index={i} className={`relative w-full overflow-hidden border-2 p-6 ${c.border} ${c.bg} ${c.text} ${c.desktopClass}`}><span className={`font-sans font-semibold leading-none ${c.numClass}`}>{number}</span><h3 className={`mt-5 ${c.titleClass}`}>{title}</h3><div className={`my-4 h-0.5 w-[40px] ${c.divider}`}/><p className={`max-w-[390px] text-[18px] leading-[28px] tracking-[-.18px] ${c.body}`}>{body}</p></RevealArticle>;})}</div></section>}
