import { PrototypeButton, brutalistButtonAlt } from "@/components/case-study/prototype-button";
import { SectionShell, csCard } from "@/components/case-study/section-shell";
import type { CaseStudy } from "@/content/case-studies/postsmart";

export function CsResults({ results, prototype }: { results: CaseStudy["results"]; prototype: CaseStudy["prototype"] }) {
  return (
    <SectionShell id="resultado" ghost="05" label={results.label}>
      <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {results.stats.map((stat, i) => (
          <li key={stat.label} className={`flex h-full flex-col p-5 md:p-6 ${i === 0 ? "rounded-[var(--radius-xl)] bg-[var(--cs-accent)]" : csCard}`}>
            <p className={`font-display text-[40px] font-extrabold leading-none tracking-[-1.5px] md:text-[52px] ${i === 0 ? "text-white" : "text-[var(--cs-accent-light)]"}`}>{stat.value}</p>
            <p className="mt-4 font-display text-[17px] font-bold leading-tight">{stat.label}</p>
            <p className={`mt-1 text-sm ${i === 0 ? "text-white/75" : "text-[var(--color-text-secondary)]"}`}>{stat.detail}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-[12px] uppercase tracking-[3px] text-[var(--cs-accent-light)]">{results.eyebrow}</p>
          <h3 className="mt-4 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-1px] md:text-[40px]">{results.title}</h3>
          <p className="mt-6 text-[18px] leading-[1.6] text-[var(--color-text-secondary)]">{results.paragraph}</p>
          <div className="mt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <PrototypeButton href={prototype.href} label={prototype.label} className="w-full sm:w-auto" />
              <a href={prototype.behanceHref} target="_blank" rel="noopener noreferrer" className={`${brutalistButtonAlt} w-full bg-transparent sm:w-auto`}>{prototype.behanceLabel}</a>
            </div>
            <p className="mt-5 text-sm text-[var(--color-text-muted)]">{prototype.caption}</p>
          </div>
        </div>
        <ul className="flex flex-col gap-3">
          {results.learnings.map((card) => (
            <li key={card.title} className={`${csCard} relative overflow-hidden py-5 pl-8 pr-6`}>
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-[var(--cs-accent-mid)]" />
              <h4 className="font-display text-[19px] font-bold leading-tight">{card.title}</h4>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
