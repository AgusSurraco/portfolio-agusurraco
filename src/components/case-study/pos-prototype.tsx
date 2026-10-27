"use client";
import { useEffect, useRef, useState } from "react";
import { PosDevice } from "@/components/case-study/pos-device";
import { PrototypeButton, brutalistButton } from "@/components/case-study/prototype-button";
import { SectionLabel } from "@/components/case-study/section-shell";
import type { CaseStudy } from "@/content/case-studies/postsmart";

// Margen fijo que agrega el embed de Figma alrededor del prototipo (en px).
const PAD_X = 48;
const PAD_TOP = 107;
const PAD_BOTTOM = 116;
const SCREEN_W = 360;
const SCREEN_H = 800;

function ScaledEmbed({ src, title, onLoad }: { src: string; title: string; onLoad: () => void }) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / SCREEN_W));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={screenRef} className="absolute inset-0 overflow-hidden">
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: SCREEN_W, height: SCREEN_H, transform: `scale(${scale})` }}>
        <iframe
          title={title}
          src={src}
          allowFullScreen
          onLoad={onLoad}
          className="absolute border-0"
          style={{ left: -PAD_X, top: -PAD_TOP, width: SCREEN_W + 2 * PAD_X, height: SCREEN_H + PAD_TOP + PAD_BOTTOM }}
        />
      </div>
    </div>
  );
}

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
  }, [live]);

  function toggleLive() {
    setLoaded(false);
    setLive((v) => !v);
  }

  return (
    <div className="mt-16 grid items-center gap-10 md:grid-cols-[2fr_3fr] md:gap-12">
      <div>
        <SectionLabel>{prototype.eyebrow}</SectionLabel>
        <h3 className="mt-5 font-display text-[28px] font-extrabold leading-[1.15] tracking-[-1px] md:text-[36px]">{prototype.title}</h3>
        <p className="mt-4 text-[var(--color-text-muted)]">{prototype.hint}</p>
        <div className="mt-8 hidden md:block">
          <button type="button" onClick={toggleLive} className={`${brutalistButton} bg-transparent`}>
            {live ? prototype.demoButton : prototype.liveButton}
          </button>
        </div>
      </div>

      <div>
        <PosDevice>
          {live ? (
            <>
              <ScaledEmbed src={prototype.embedSrc} title={prototype.embedTitle} onLoad={() => setLoaded(true)} />
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-surface-2)] text-sm text-[var(--color-text-muted)]">{prototype.loading}</div>
              )}
            </>
          ) : (
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
          )}
        </PosDevice>
        <div className="mt-10 flex justify-center md:hidden">
          <PrototypeButton href={prototype.href} label={prototype.label} />
        </div>
      </div>
    </div>
  );
}
