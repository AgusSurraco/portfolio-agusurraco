import type { ReactNode } from "react";

export function PosDevice({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-fit">
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cs-accent-mid)] opacity-40 blur-[120px]" />
      <div aria-hidden="true" className="relative mx-auto flex h-[22px] w-[60%] items-center justify-center rounded-t-[10px] bg-[var(--color-bg-surface-2)] text-white/40">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M8.5 16.5a6 6 0 0 0 0-9" />
          <path d="M12.5 19.5a10 10 0 0 0 0-15" />
          <path d="M16.5 22a14 14 0 0 0 0-20" />
        </svg>
      </div>
      <div className="relative rounded-[36px] border border-[var(--border-subtle)] bg-[var(--color-bg-surface)] px-4 pb-6 pt-[18px] shadow-[0_40px_80px_rgb(0_0_0_/_50%)]">
        <div className="relative mx-auto aspect-[360/800] h-[min(640px,calc(100vh-220px))] overflow-hidden rounded-[14px] bg-black">{children}</div>
        <div aria-hidden="true" className="mt-4 flex justify-center gap-3">
          <span className="h-7 w-16 rounded-lg bg-[var(--cs-accent)]" />
          <span className="h-7 w-16 rounded-lg bg-[var(--cs-accent)]" />
          <span className="h-7 w-16 rounded-lg bg-[var(--cs-accent)]" />
        </div>
      </div>
    </div>
  );
}
