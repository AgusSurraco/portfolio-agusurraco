import Image from "next/image";
import { PrototypeButton } from "@/components/case-study/prototype-button";
import { SectionShell } from "@/components/case-study/section-shell";
import type { CaseStudy } from "@/content/case-studies/postsmart";

export function CsSolution({ solution, prototype }: { solution: CaseStudy["solution"]; prototype: CaseStudy["prototype"] }) {
  return (
    <SectionShell id="solucion" ghost="04" label={solution.label}>
      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-[36px] font-extrabold leading-[1.1] tracking-[-1.5px] md:text-[48px]">{solution.title}</h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-[var(--color-text-secondary)]">{solution.paragraph}</p>
        </div>
        <ul>
          {solution.list.map((item) => (
            <li key={item} className="flex items-start gap-4 border-b border-[var(--border-subtle)] py-4 text-[17px] leading-[1.5]">
              <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cs-accent-light)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={solution.image.src}
        alt={solution.image.alt}
        width={solution.image.width}
        height={solution.image.height}
        sizes="(min-width: 1024px) 960px, 100vw"
        className="mt-12 h-auto w-full rounded-[var(--radius-xl)]"
      />
      <div className="mt-10">
        <PrototypeButton href={prototype.href} label={prototype.label} />
      </div>
    </SectionShell>
  );
}
