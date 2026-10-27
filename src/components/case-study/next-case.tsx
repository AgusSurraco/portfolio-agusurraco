import { csContainer, SectionLabel } from "@/components/case-study/section-shell";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/content/projects";

export function NextCase({ currentSlug }: { currentSlug: string }) {
  const index = featuredProjects.findIndex((p) => p.slug === currentSlug);
  const next = featuredProjects[(index + 1) % featuredProjects.length];
  if (!next || next.slug === currentSlug) return null;
  return (
    <section aria-label="Siguiente caso" className="pt-20 md:pt-[120px]">
      <div className={csContainer}>
        <SectionLabel>Siguiente caso</SectionLabel>
        <div className="mt-8">
          <ProjectCard project={next} />
        </div>
      </div>
    </section>
  );
}
