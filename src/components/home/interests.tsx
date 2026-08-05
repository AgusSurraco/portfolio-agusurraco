"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { homeContent } from "@/content/home";

const gallery = [
  { src: "/images/home/interest-1.png", alt: "Trabajo de lettering" },
  { src: "/images/home/interest-2.png", alt: "Ilustración" },
  { src: "/images/home/interest-3.png", alt: "Ilustración artística" },
  { src: "/images/home/interest-4.png", alt: "Ilustración espacial" },
];

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Interests() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setSelected(null);
    lastTriggerRef.current?.focus();
  };

  const openAt = (index: number) => {
    lastTriggerRef.current = triggerRefs.current[index];
    setSelected(index);
  };

  useEffect(() => {
    if (selected === null) return;
    const dialog = dialogRef.current;
    const focusables = dialog ? Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)) : [];
    focusables[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key === "Tab" && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section id="intereses" className="mx-auto w-[960px] scroll-mt-[83px] py-[96px]">
      <h2 className="font-sans text-[64px] font-extrabold uppercase tracking-[-2px]">Otros intereses</h2>
      <div className="mt-10 flex gap-6">
        {homeContent.interests.map((item, index) => (
          <span className={`border px-4 py-2 text-lg uppercase tracking-[2px] ${index === 1 ? "border-[var(--color-accent)] text-[var(--color-accent)]" : "border-white/20"}`} key={item}>{item}</span>
        ))}
      </div>
      <div className="mt-16 flex items-center">
        {gallery.map((image, index) => (
          <button
            type="button"
            key={image.src}
            ref={(el) => { triggerRefs.current[index] = el; }}
            onClick={() => openAt(index)}
            aria-label={`Ampliar imagen: ${image.alt}`}
            className="group h-[410px] w-[230px] overflow-hidden"
          >
            <Image src={image.src} alt={image.alt} width={230} height={410} className="h-[410px] w-[230px] object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]" />
          </button>
        ))}
      </div>
      <div className="mx-auto mt-20 w-[780px] border-2 border-white p-12">
        <div className="flex h-16 w-16 items-center justify-center bg-[var(--color-accent)] font-[var(--font-inter)] text-7xl leading-none text-black">“</div>
        <p className="mt-6 font-display text-[64px] leading-[70.4px] tracking-[-1px]">Encuentro en el dibujo y lettering un espacio de exploración y expresión.</p>
        <p className="mt-8 border-l-2 border-[var(--color-accent)] pl-8 text-2xl leading-[26px] text-white/70">Trabajo con formas y trazos como una manera de soltar lo racional y conectar con lo visual.</p>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.85)]" onClick={close}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[selected].alt}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={close} aria-label="Cerrar" className="absolute -top-10 right-0 text-3xl text-white/80 transition-colors hover:text-white">×</button>
            <div className="relative h-[80vh] w-[80vw] max-w-3xl">
              <Image src={gallery[selected].src} alt={gallery[selected].alt} fill sizes="80vw" className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
