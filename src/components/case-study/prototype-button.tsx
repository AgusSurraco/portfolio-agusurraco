export const brutalistButton = "border-white shadow-[6px_6px_0_0_var(--color-white)] inline-flex min-h-[48px] items-center justify-center rounded-none border-2 px-8 font-sans text-base font-medium outline-none transition-[transform,box-shadow,background-color,color] duration-[120ms] ease-linear text-white! hover:bg-white hover:text-[var(--color-bg-base)]! hover:shadow-[6px_6px_0_0_var(--cs-accent-light)] active:bg-white active:text-[var(--color-bg-base)]! active:translate-x-1.5 active:translate-y-1.5 active:shadow-[0_0_0_0_var(--cs-accent-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cs-accent-light)]";

// Misma forma y estados, con borde gris y sombra celeste.
export const brutalistButtonAlt = brutalistButton.replace("border-white shadow-[6px_6px_0_0_var(--color-white)]", "border-[var(--border-strong)] shadow-[6px_6px_0_0_var(--cs-accent-light)]");

export function PrototypeButton({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${brutalistButton} bg-transparent ${className}`}>
      {label}
    </a>
  );
}
