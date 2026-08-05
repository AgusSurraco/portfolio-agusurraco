"use client";
import { useEffect, useState } from "react";
import { homeContent } from "@/content/home";
import { OutlineButton } from "@/components/ui/button";

const SCROLL_THRESHOLD = 50;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className={`fixed inset-x-0 top-0 z-40 h-[83px] border-b-[0.5px] transition-colors duration-300 ease-in-out ${scrolled ? "border-[var(--border-subtle)] bg-[var(--color-bg-base)]" : "border-transparent bg-transparent"}`}><nav className="mx-auto flex h-full w-[918px] items-center justify-between"><a className="flex h-10 w-[52px] items-center justify-center font-display text-[29px] font-extrabold tracking-tight" href="#inicio" style={{ backgroundColor: "#FF57AB", color: "#0A0A0A" }}>NK</a><div className="flex gap-8 font-sans text-[15px] uppercase tracking-[1px] text-white/85">{homeContent.nav.map((item) => <a href={`#${item.toLowerCase().replace(" ", "-")}`} key={item}>{item}</a>)}</div><OutlineButton>Contactar</OutlineButton></nav></header>;
}
