"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${className} motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${visible ? "motion-safe:opacity-100 motion-safe:translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-6"}`}>{children}</div>;
}
