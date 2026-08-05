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
    <section id="intereses" className="mx-auto w-full max-w-[960px] scroll-mt-[83px] px-5 py-16 md:w-[960px] md:px-0 md:py-[96px]">
      <h2 className="text-4xl font-sans font-extrabold uppercase tracking-[-2px] md:text-[64px]">Otros intereses</h2>
      <div className="mt-10 flex flex-wrap gap-3 md:gap-6">
        {homeContent.interests.map((item, index) => (
          <span className={`border px-4 py-2 text-lg uppercase tracking-[2px] ${index === 1 ? "border-[var(--color-accent)] text-[var(--color-accent)]" : "border-white/20"}`} key={item}>{item}</span>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-2 gap-3 md:flex md:items-center md:gap-0">
        {gallery.map((image, index) => (
          <button
            type="button"
            key={image.src}
            ref={(el) => { triggerRefs.current[index] = el; }}
            onClick={() => openAt(index)}
            aria-label={`Ampliar imagen: ${image.alt}`}
            className="group aspect-[230/410] w-full overflow-hidden md:h-[410px] md:w-[230px]"
          >
            <Image src={image.src} alt={image.alt} width={230} height={410} className="h-full w-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] md:h-[410px] md:w-[230px]" />
          </button>
        ))}
      </div>
      <div className="mx-auto mt-20 w-full max-w-[780px] border-2 border-white p-6 md:p-12">
        <div className="flex h-16 w-16 items-center justify-center bg-[var(--color-accent)] font-[var(--font-inter)] text-7xl leading-none text-black">“</div>
        <p className="mt-6 font-display text-[32px] leading-[38px] tracking-[-.5px] md:text-[64px] md:leading-[70.4px] md:tracking-[-1px]">Encuentro en el dibujo y lettering un espacio de exploración y expresión.</p>
        <p className="mt-8 border-l-2 border-[var(--color-accent)] pl-8 text-xl leading-[26px] text-white/70 md:text-2xl">Trabajo con formas y trazos como una manera de soltar lo racional y conectar con lo visual.</p>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.85)]" onClick={close}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[selected].alt}
            className="relative h-full w-full md:h-[80vh] md:w-[80vw] md:max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={close} aria-label="Cerrar" className="absolute right-4 top-4 text-3xl text-white/80 transition-colors hover:text-white before:absolute before:left-1/2 before:top-1/2 before:h-11 before:w-11 before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] md:-top-10 md:right-0">×</button>
            <div className="relative h-full w-full md:h-[80vh] md:w-[80vw] md:max-w-3xl">
              <Image src={gallery[selected].src} alt={gallery[selected].alt} fill sizes="(max-width: 767px) 100vw, 80vw" className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
