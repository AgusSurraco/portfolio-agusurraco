"use client";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/content/case-studies/postsmart";

export function CaseNav({ nav }: { nav: CaseStudy["nav"] }) {
  const [active, setActive] = useState<string | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    nav.items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [nav.items]);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const footer = document.getElementById("contacto");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) setHeroVisible(entry.isIntersecting);
        if (entry.target === footer) setFooterVisible(entry.isIntersecting);
      });
    });
    if (hero) observer.observe(hero);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.getElementById("contacto");
    let frame = 0;
    const update = () => {
      frame = 0;
      const bar = barRef.current;
      if (!bar || !footer) return;
      const end = footer.offsetTop - window.innerHeight;
      const progress = end > 0 ? Math.min(Math.max(window.scrollY / end, 0), 1) : 1;
      bar.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const railVisible = !heroVisible && !footerVisible;

  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-[83px] z-40 h-0.5 xl:hidden">
        <div ref={barRef} className="h-full origin-left bg-[var(--cs-accent-light)]" style={{ transform: "scaleX(0)" }} />
      </div>

      <nav
        aria-label={nav.label}
        className={`fixed left-12 top-1/2 z-30 hidden -translate-y-1/2 motion-safe:transition-[opacity,visibility] motion-safe:duration-300 xl:block ${railVisible ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <ul className="flex flex-col gap-[14px]">
          {nav.items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group flex min-h-[24px] items-center gap-[10px] font-sans text-[12px] uppercase tracking-[2px] outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cs-accent-light)] motion-safe:transition-colors motion-safe:duration-200 ${isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"}`}
                >
                  <span aria-hidden="true" className={`h-px motion-safe:transition-all motion-safe:duration-200 ${isActive ? "w-10 bg-[var(--cs-accent-light)]" : "w-6 bg-[var(--border-subtle)]"}`} />
                  <span>{item.number}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
