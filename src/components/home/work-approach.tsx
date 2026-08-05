"use client";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { homeContent } from "@/content/home";
const layout = [
  { w: 320, h: 428, l: 0, t: 0, p: 28, num: 120, title: 26, bg: "bg-[var(--color-bg-surface)]", border: "border-white", text: "", divider: "bg-[var(--color-accent)]", body: "text-white/70" },
  { w: 640, h: 428, l: 320, t: 0, p: 28, num: 84, title: 26, bg: "bg-[var(--color-bg-surface-2)]", border: "border-white", text: "", divider: "bg-[var(--color-accent)]", body: "text-white/70" },
  { w: 480, h: 438, l: 0, t: 428, p: 32, num: 84, title: 30, bg: "bg-[var(--color-bg-surface)]", border: "border-white", text: "", divider: "bg-[var(--color-accent)]", body: "text-white/70" },
  { w: 480, h: 438, l: 480, t: 428, p: 32, num: 84, title: 30, bg: "bg-[var(--color-accent)]", border: "border-[var(--color-bg-base)]", text: "text-[var(--color-bg-base)]", divider: "bg-[var(--color-bg-base)]", body: "text-[var(--color-bg-base)]" },
];

function RevealArticle({ index, className, style, children }: { index: number; className: string; style: CSSProperties; children: ReactNode }) {
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
  return <article ref={ref} style={{ ...style, transitionDelay: `${index * 110}ms` }} className={`${className} motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out ${visible ? "motion-safe:opacity-100 motion-safe:translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-5"}`}>{children}</article>;
}

export function WorkApproach(){return <section id="workflow" className="mx-auto w-[960px] scroll-mt-[83px] py-[96px]"><h2 className="mb-12 font-sans text-[80px] font-extrabold uppercase tracking-[-2px]">Cómo trabajo</h2><div className="relative h-[866px] w-full">{homeContent.approach.map(([number,title,body],i)=>{const c=layout[i];return <RevealArticle key={number} index={i} style={{left:c.l,top:c.t,width:c.w,height:c.h,padding:c.p}} className={`absolute overflow-hidden border-2 ${c.border} ${c.bg} ${c.text}`}><span className="font-sans font-semibold leading-none" style={{fontSize:c.num}}>{number}</span><h3 className="mt-5" style={{fontSize:c.title}}>{title}</h3><div className={`my-4 h-0.5 w-[40px] ${c.divider}`}/><p className={`max-w-[390px] text-[18px] leading-[28px] tracking-[-.18px] ${c.body}`}>{body}</p></RevealArticle>;})}</div></section>}
