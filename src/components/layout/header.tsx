"use client";
import { useEffect, useState } from "react";
import { homeContent } from "@/content/home";
import { OutlineButton } from "@/components/ui/button";

const SCROLL_THRESHOLD = 50;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const navLinks = homeContent.nav.map((item) => `#${item.toLowerCase().replace(" ", "-")}`);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 h-[83px] border-b-[0.5px] transition-colors duration-300 ease-in-out ${scrolled || menuOpen ? "border-[var(--border-subtle)] bg-[var(--color-bg-base)]" : "border-transparent bg-transparent"}`}>
      <nav className="mx-auto flex h-full w-full max-w-[918px] items-center justify-between px-5 md:w-[918px] md:px-0">
        <a className="relative flex h-10 w-[52px] items-center justify-center font-display text-[29px] font-extrabold tracking-tight" href="#inicio" style={{ backgroundColor: "#FF57AB", color: "#0A0A0A" }}>NK</a>
        <div className="hidden items-center gap-8 font-sans text-[15px] uppercase tracking-[1px] text-white/85 md:flex">
          {homeContent.nav.map((item, i) => <a href={navLinks[i]} key={item}>{item}</a>)}
        </div>
        <div className="hidden md:block">
          <OutlineButton>Contactar</OutlineButton>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform duration-200 ease-linear ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity duration-200 ease-linear ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform duration-200 ease-linear ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-x-0 bottom-0 top-[83px] z-30 flex flex-col items-center justify-center gap-8 bg-[var(--color-bg-base)] md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {homeContent.nav.map((item, i) => (
            <a
              href={navLinks[i]}
              key={item}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] items-center px-6 font-sans text-3xl uppercase tracking-[1px] text-white"
            >
              {item}
            </a>
          ))}
          <OutlineButton>Contactar</OutlineButton>
        </div>
      )}
    </header>
  );
}
