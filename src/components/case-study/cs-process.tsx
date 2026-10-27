import Image from "next/image";
import type { ReactNode } from "react";
import { SectionShell, csCard } from "@/components/case-study/section-shell";
import type { AuditRow, CaseStudy, ProcessStep } from "@/content/case-studies/postsmart";

function Step({ step, children }: { step: ProcessStep; children: ReactNode }) {
  return (
    <li className="pt-12 first:pt-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
        <h3 className="flex items-baseline gap-4 font-display text-[26px] font-bold leading-tight tracking-[-.5px] md:text-[32px]">
          <span className="text-[var(--cs-accent-light)]">{step.number}</span>
          {step.title}
        </h3>
        <span className="rounded-full border border-white/[0.18] bg-white/[0.06] px-4 py-1.5 text-[12px] uppercase tracking-[2px]">{step.tag}</span>
      </div>
      <p className="mt-6 max-w-[760px] text-[18px] leading-[1.6] text-[var(--color-text-secondary)]">{step.body}</p>
      <div className="mt-8">{children}</div>
    </li>
  );
}

function AuditTag({ tag }: { tag: AuditRow["tag"] }) {
  const style = tag === "REDUNDANTE" ? "bg-[var(--cs-accent-mid)] text-white" : "border border-white/[0.18] bg-white/[0.06]";
  return <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-medium tracking-[1.5px] ${style}`}>{tag}</span>;
}

export function CsProcess({ process }: { process: CaseStudy["process"] }) {
  const [empathize, ideate, test] = process.steps;
  return (
    <SectionShell id="proceso" ghost="03" label={process.label}>
      <ol>
        <Step step={empathize}>
          <div className="grid gap-4 sm:grid-cols-2">
            {process.images.map((img) => (
              <Image key={img.src} src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 1024px) 472px, (min-width: 640px) 50vw, 100vw" className="h-auto w-full rounded-[var(--radius-xl)]" />
            ))}
          </div>
        </Step>

        <Step step={ideate}>
          <div className={`${csCard} overflow-hidden`}>
            <p className="border-b border-[var(--border-subtle)] px-6 py-4 text-[12px] uppercase tracking-[3px] text-[var(--color-text-muted)]">{process.auditTitle}</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
                <caption className="sr-only">{process.auditTitle}</caption>
                <thead>
                  <tr className="text-[11px] uppercase tracking-[2px] text-[var(--color-text-muted)]">
                    {process.auditHeaders.map((h) => <th key={h} scope="col" className="px-6 py-3 font-medium">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {process.audit.map((row) => (
                    <tr key={row.screen} className="border-t border-[var(--border-subtle)] align-top">
                      <th scope="row" className="px-6 py-4 font-display text-[16px] font-bold">{row.screen}</th>
                      <td className="px-6 py-4"><AuditTag tag={row.tag} /></td>
                      <td className="px-6 py-4 text-[var(--color-text-secondary)]">{row.description}</td>
                      <td className="px-6 py-4 text-[var(--color-text-secondary)]">{row.diagnosis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Step>

        <Step step={test}>
          <ul className="grid gap-4 md:grid-cols-3">
            {process.testCards.map((card) => (
              <li key={card.title} className={`${csCard} h-full p-6`}>
                <h4 className="font-display text-[20px] font-bold leading-tight">{card.title}</h4>
                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">{card.body}</p>
              </li>
            ))}
          </ul>
        </Step>
      </ol>
    </SectionShell>
  );
}
