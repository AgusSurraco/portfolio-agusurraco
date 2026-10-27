import Image from "next/image";
import { SectionShell, csCard } from "@/components/case-study/section-shell";
import type { CaseStudy } from "@/content/case-studies/postsmart";

export function CsProblem({ problem }: { problem: CaseStudy["problem"] }) {
  return (
    <SectionShell id="problema" ghost="02" label={problem.label}>
      <p className="mt-10 max-w-[760px] text-[20px] leading-[1.6] text-[var(--color-text-secondary)] md:text-[22px]">{problem.statement}</p>

      <figure className="mt-12 flex flex-col gap-6 md:flex-row md:gap-8">
        <span aria-hidden="true" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--cs-accent)] font-display text-[48px] font-extrabold leading-none">&ldquo;</span>
        <div>
          <blockquote className="font-sans text-[28px] font-light leading-[1.25] tracking-[-.5px] md:text-[48px] md:tracking-[-1px]">{problem.quote}</blockquote>
          <figcaption className="mt-6 text-sm uppercase tracking-[2px] text-[var(--color-text-muted)]">{problem.attribution}</figcaption>
        </div>
      </figure>

      <hr className="my-12 border-0 border-t border-[var(--border-subtle)] md:my-16" />

      <ul className="grid gap-4 md:grid-cols-3">
        {problem.cards.map((card, i) => (
          <li key={card.title} className={`flex h-full flex-col p-6 ${i === 0 ? "rounded-[var(--radius-xl)] bg-[var(--cs-accent)]" : csCard}`}>
            <span className={`font-display text-[20px] font-extrabold ${i === 0 ? "text-white/75" : "text-[var(--cs-accent-light)]"}`}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 font-display text-[22px] font-bold leading-tight">{card.title}</h3>
            <p className={`mt-3 text-[15px] leading-[1.6] ${i === 0 ? "text-white/75" : "text-[var(--color-text-secondary)]"}`}>{card.body}</p>
          </li>
        ))}
      </ul>

      <Image
        src={problem.image.src}
        alt={problem.image.alt}
        width={problem.image.width}
        height={problem.image.height}
        sizes="(min-width: 1024px) 960px, 100vw"
        className="mt-12 h-auto w-full rounded-[var(--radius-xl)] border border-[var(--border-subtle)]"
      />
    </SectionShell>
  );
}
