"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { homeContent } from "@/content/home";
import { Section } from "@/components/ui/section";

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
    <>
    <Section id="intereses" ghost="03" label="03 — Otros intereses">
      <h2 className="mt-10 font-display text-[40px] font-extrabold leading-[1.1] tracking-[-1.5px] md:text-[56px]">Otros intereses</h2>
      <div className="mt-10 flex flex-wrap gap-3 md:gap-6">
        {homeContent.interests.map((item, index) => (
          <span className={`rounded-full px-4 py-2 text-lg uppercase tracking-[2px] ${index === 1 ? "bg-[var(--accent)] text-[var(--on-accent)]" : "border border-white/[0.18] bg-white/[0.06]"}`} key={item}>{item}</span>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-2 gap-3 lg:flex lg:items-center">
        {gallery.map((image, index) => (
          <button
            type="button"
            key={image.src}
            ref={(el) => { triggerRefs.current[index] = el; }}
            onClick={() => openAt(index)}
            aria-label={`Ampliar imagen: ${image.alt}`}
            className="group aspect-[230/410] w-full overflow-hidden rounded-[var(--radius-lg)] lg:h-[410px] lg:w-[230px]"
          >
            <Image src={image.src} alt={image.alt} width={230} height={410} className="h-full w-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] lg:h-[410px] lg:w-[230px]" />
          </button>
        ))}
      </div>
      <figure className="mb-20 mt-20 flex flex-col gap-6 md:mb-[120px] md:flex-row md:gap-8">
        <span aria-hidden="true" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--accent)] font-display text-[48px] font-extrabold leading-none text-[var(--on-accent)]">&ldquo;</span>
        <div>
          <blockquote className="font-sans text-[32px] font-light leading-[1.25] tracking-[-.5px] md:text-[48px] md:tracking-[-1px]">Encuentro en el dibujo y lettering un espacio de exploración y expresión.</blockquote>
          <p className="mt-8 border-l-2 border-[var(--accent-light)] pl-8 text-xl leading-[26px] text-white/70 md:text-2xl">Trabajo con formas y trazos como una manera de soltar lo racional y conectar con lo visual.</p>
        </div>
      </figure>
    </Section>

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
    </>
  );
}
