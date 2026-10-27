"use client";
import { useEffect, useRef, useState } from "react";
import { PosDevice } from "@/components/case-study/pos-device";
import { PrototypeButton, brutalistButton } from "@/components/case-study/prototype-button";
import { SectionLabel } from "@/components/case-study/section-shell";
import type { CaseStudy } from "@/content/case-studies/postsmart";

export function PosPrototype({ prototype }: { prototype: CaseStudy["prototype"] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [live, setLive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(query.matches);
      const video = videoRef.current;
      if (!video) return;
      if (query.matches) video.pause();
      else video.play().catch(() => {});
    };
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
          {live ? (
            <>
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-surface-2)] text-sm text-[var(--color-text-muted)]">{prototype.loading}</div>
              )}
              <iframe
                title={prototype.embedTitle}
                src={prototype.embedSrc}
                allowFullScreen
                onLoad={() => setLoaded(true)}
                className="relative h-full w-full border-0"
              />
            </>
          ) : (
            <>
              <video
                ref={videoRef}
                src={prototype.video}
                poster={prototype.poster}
                aria-label={prototype.videoLabel}
                muted
                loop
                playsInline
                preload="metadata"
                controls={reducedMotion}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
                <button type="button" onClick={() => setLive(true)} className={`${brutalistButton} pointer-events-auto bg-[var(--color-bg-base)]`}>
                  {prototype.liveButton}
                </button>
              </div>
            </>
          )}
        </PosDevice>
        <div className="mt-10 flex justify-center md:hidden">
          <PrototypeButton href={prototype.href} label={prototype.label} />
        </div>
      </div>
    </div>
  );
}
