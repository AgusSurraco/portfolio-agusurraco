const contacts = [
  { label: "Whatsapp", href: "https://wa.me/5492213199349", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/agustina-surraco-uxdesigner/", external: true },
  { label: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=agustinasurraco@gmail.com", external: true },
];
export function Footer() { return <footer id="contacto" className="mx-auto flex h-[372px] w-[960px] scroll-mt-[83px] flex-col justify-center gap-[88px]"><div className="flex flex-col items-center gap-8"><h2 className="font-display text-[64px] font-bold leading-[96px]">¿Hablamos?</h2><div className="flex gap-6">{contacts.map((contact) => <a className="border-2 border-white px-4 py-2 text-lg" href={contact.href} key={contact.label} {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{contact.label}</a>)}</div></div><div className="flex justify-between border-t border-[var(--border-subtle)] pt-10 text-base"><span>Powered by NK</span><span className="font-[var(--font-inter)] text-[11px] uppercase tracking-[1.5px] text-white/35">Términos y condiciones</span></div></footer>; }
