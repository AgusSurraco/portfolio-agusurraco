import Image from "next/image";
import type { ProjectStatus } from "@/content/projects";

type Props = { project: { slug: string; tag: string; title: string; image: string; cardHeight: number; imageHeight: number; status: ProjectStatus } };

export function ProjectCard({ project }: Props) {
  const content = (
    <>
      <div className="overflow-hidden">
        <Image src={project.image} alt={`Vista previa del proyecto ${project.title}`} width={300} height={project.imageHeight} style={{ height: project.imageHeight }} className="w-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <span className="w-fit border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] px-3 py-1 text-[10px] text-[var(--color-accent)]">{project.tag}</span>
        <h3 className="font-display text-2xl leading-[31px] tracking-[-.5px]">{project.title}</h3>
        <span className="ml-auto mt-auto border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] px-[18px] py-[3px] text-[var(--color-accent)] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[6px]">→</span>
      </div>
    </>
  );

  if (project.status === "live") {
    return (
      <a href={`/proyectos/${project.slug}`} style={{ height: project.cardHeight }} className="group flex w-full flex-col border-2 border-white bg-[var(--color-bg-surface)] md:w-[300px]">
        {content}
      </a>
    );
  }

  if (project.status === "draft") {
    return (
      <div style={{ height: project.cardHeight }} className="group flex w-full cursor-pointer flex-col border-2 border-white bg-[var(--color-bg-surface)] md:w-[300px]">
        {content}
      </div>
    );
  }

  return (
    <div style={{ height: project.cardHeight }} className="group relative flex w-full cursor-not-allowed flex-col border-2 border-white bg-[var(--color-bg-surface)] md:w-[300px]">
      <div className="flex flex-1 flex-col opacity-[0.55]">{content}</div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/75 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100">
        <span className="text-sm uppercase tracking-[2px] text-white">En construcción</span>
      </div>
    </div>
  );
}
