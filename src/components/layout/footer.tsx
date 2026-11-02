import { brutalistButtonAlt } from "@/components/ui/button";

const contacts = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/agustina-surraco-uxdesigner/" },
  { label: "Behance", href: "https://www.behance.net/agustinasurraco" },
  { label: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=agustinasurraco@gmail.com" },
];
export function Footer() { return <footer id="contacto" className="w-full scroll-mt-[83px]" style={{ backgroundColor: "var(--color-bg-base)", backgroundImage: "radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--accent-mid) 15%, transparent), transparent 50%)" }}><div className="mx-auto flex h-auto w-full max-w-[960px] flex-col justify-center gap-16 px-5 py-16 md:px-10 lg:h-[372px] lg:w-[960px] lg:gap-[88px] lg:px-0 lg:py-0"><div className="flex flex-col items-center gap-8"><h2 className="font-display text-4xl font-extrabold leading-tight md:text-[64px] md:leading-[96px]">¿Hablamos<span className="ml-[0.04em] text-[var(--accent-light)]">?</span></h2><div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6">{contacts.map((contact) => <a className={`${brutalistButtonAlt} bg-transparent`} href={contact.href} key={contact.label} target="_blank" rel="noopener noreferrer">{contact.label}</a>)}</div></div><div className="flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-10 text-base sm:flex-row sm:justify-between"><span>Powered by NK</span><span className="font-[var(--font-inter)] text-[11px] uppercase tracking-[1.5px] text-white/35">Términos y condiciones</span></div></div></footer>; }
