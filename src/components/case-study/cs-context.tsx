import { SectionShell, csCard } from "@/components/case-study/section-shell";
import type { CaseStudy } from "@/content/case-studies/postsmart";

export function CsContext({ context }: { context: CaseStudy["context"] }) {
  return (
    <SectionShell id="contexto" ghost="01" label={context.label}>
      <div className="mt-10 grid gap-10 md:grid-cols-[414fr_470fr] md:gap-[76px]">
        <div>
          <h2 className="font-display text-[36px] font-extrabold leading-[1.1] tracking-[-1.5px] md:text-[48px]">{context.title}</h2>
          {context.paragraphs.map((p) => <p key={p} className="mt-6 text-[18px] leading-[1.6] text-[var(--color-text-secondary)]">{p}</p>)}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 rounded-[var(--radius-xl)] bg-[var(--cs-accent)] p-6 md:p-8">
            <p className="font-sans text-[44px] font-bold leading-none tracking-[-1.5px] md:text-[64px]">{context.bigCard.title}</p>
            <p className="mt-4 text-base text-white/75">{context.bigCard.body}</p>
          </div>
          {context.cards.map((card) => (
            <div key={card.title} className={`${csCard} p-5 md:p-6`}>
              <p className="font-display text-[20px] font-bold leading-tight md:text-[24px]">{card.title}</p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
