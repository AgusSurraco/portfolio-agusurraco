"use client";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/content/case-studies/postsmart";

export function CaseNav({ nav }: { nav: CaseStudy["nav"] }) {
  const [active, setActive] = useState(nav.items[0].id);
  const [railVisible, setRailVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = document.getElementById("contacto");
    const sections = nav.items.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => el !== null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;

      // Lista: aparece cuando Contexto llega al 75% de la pantalla, se oculta al entrar el footer.
      const firstTop = sections[0]?.getBoundingClientRect().top ?? Infinity;
      const footerTop = footer?.getBoundingClientRect().top ?? Infinity;
      setRailVisible(firstTop <= vh * 0.75 && footerTop > vh);

      // Sección activa: la última cuyo borde superior pasó el 40% de la pantalla.
      let current = nav.items[0].id;
      sections.forEach((el) => { if (el.getBoundingClientRect().top <= vh * 0.4) current = el.id; });
      setActive(current);

      const bar = barRef.current;
      if (!bar || !footer) return;
      const end = footer.offsetTop - vh;
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
  }, [nav.items]);

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
