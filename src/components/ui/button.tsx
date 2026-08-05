import type { ReactNode } from "react";
export function OutlineButton({ children, href = "#contacto" }: { children: ReactNode; href?: string }) { return <a href={href} className="inline-flex h-10 items-center justify-center border-2 border-[var(--border-strong)] px-8 font-sans text-base uppercase">{children}</a>; }
