import { brutalistButton } from "@/components/ui/button";

export function PrototypeButton({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${brutalistButton} bg-transparent ${className}`}>
      {label}
    </a>
  );
}
