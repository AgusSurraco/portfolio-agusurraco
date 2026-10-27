"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PosDevice } from "@/components/case-study/pos-device";
import { PrototypeButton } from "@/components/case-study/prototype-button";
import { SectionLabel } from "@/components/case-study/section-shell";
import type { CaseStudy } from "@/content/case-studies/postsmart";

export function PosPrototype({ prototype, mobileImage }: { prototype: CaseStudy["prototype"]; mobileImage: string }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className="mt-16 grid items-center gap-10 md:grid-cols-[2fr_3fr] md:gap-12">
      <div>
        <SectionLabel>{prototype.eyebrow}</SectionLabel>
        <h3 className="mt-5 font-display text-[28px] font-extrabold leading-[1.15] tracking-[-1px] md:text-[36px]">{prototype.title}</h3>
        <p className="mt-4 text-[var(--color-text-muted)]">{prototype.hint}</p>
      </div>

      <div>
        <PosDevice>
          <div className="hidden h-full md:block">
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-surface-2)] text-sm text-[var(--color-text-muted)]">{prototype.loading}</div>
            )}
            {isDesktop && (
              <iframe
                title={prototype.embedTitle}
                src={prototype.embedSrc}
                loading="lazy"
                allowFullScreen
                onLoad={() => setLoaded(true)}
                className="relative h-full w-full border-0"
              />
            )}
          </div>
          <Image src={mobileImage} alt={prototype.mobileImageAlt} fill sizes="308px" className="object-cover object-[51%_50%] md:hidden" />
        </PosDevice>
        <div className="mt-10 flex justify-center md:hidden">
          <PrototypeButton href={prototype.href} label={prototype.label} />
        </div>
      </div>
    </div>
  );
}
