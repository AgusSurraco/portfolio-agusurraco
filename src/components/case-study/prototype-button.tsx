export function PrototypeButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[48px] items-center justify-center rounded-none border-2 border-white px-8 font-sans text-base font-medium shadow-[6px_6px_0_0_var(--color-white)] outline-none transition-[transform,box-shadow,background-color,color] duration-[120ms] ease-linear bg-transparent text-white! hover:bg-white hover:text-[var(--color-bg-base)]! hover:shadow-[6px_6px_0_0_var(--cs-accent-light)] active:bg-white active:text-[var(--color-bg-base)]! active:translate-x-1.5 active:translate-y-1.5 active:shadow-[0_0_0_0_var(--cs-accent-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cs-accent-light)]"
    >
      {label}
    </a>
  );
}
