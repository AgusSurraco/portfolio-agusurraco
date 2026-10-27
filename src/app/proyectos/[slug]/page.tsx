import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CsContext } from "@/components/case-study/cs-context";
import { CsHero } from "@/components/case-study/cs-hero";
import { CsMarquee } from "@/components/case-study/cs-marquee";
import { CsProblem } from "@/components/case-study/cs-problem";
import { CsProcess } from "@/components/case-study/cs-process";
import { CsResults } from "@/components/case-study/cs-results";
import { CsSolution } from "@/components/case-study/cs-solution";
import { Footer } from "@/components/layout/footer";
import { caseStudies } from "@/content/case-studies/postsmart";
import { featuredProjects } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

function getCaseStudy(slug: string) {
  return slug in caseStudies ? caseStudies[slug as keyof typeof caseStudies] : undefined;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.filter((p) => getCaseStudy(p.slug)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  return study ? study.meta : {};
}

export default async function CaseStudyPage({ params }: Params) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  return (
    <main className="case-study">
      <CsHero hero={study.hero} />
      <CsContext context={study.context} />
      <CsProblem problem={study.problem} />
      <CsMarquee words={study.marquee} />
      <CsProcess process={study.process} />
      <CsSolution solution={study.solution} />
      <CsResults results={study.results} />
      <div className="pt-20 md:pt-[120px]"><Footer /></div>
    </main>
  );
}
