export const glass = "border border-white/[0.16] bg-black/[0.72] backdrop-blur-[24px]";

export function Chip({ value, label, className }: { value: string; label: string; className: string }) {
  return (
    <div className={`${glass} rounded-2xl px-5 py-3 ${className}`}>
      <p className="font-display text-[34px] font-extrabold leading-none text-[var(--accent-light)]">{value}</p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}
