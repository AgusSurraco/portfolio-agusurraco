import Image from "next/image";
import type { ProjectStatus } from "@/content/projects";
import { card } from "@/components/ui/section";

type Props = { project: { slug: string; tag: string; title: string; image: string; cardHeight: number; imageHeight: number; status: ProjectStatus; theme: string } };

export function ProjectCard({ project }: Props) {
  const interactive = project.status !== "construction";
  const content = (
    <>
      <div className="overflow-hidden">
        <Image src={project.image} alt={`Vista previa del proyecto ${project.title}`} width={300} height={project.imageHeight} style={{ height: project.imageHeight }} className="w-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <span className="w-fit rounded-full border border-white/[0.18] bg-white/[0.06] px-3 py-1 text-[10px]">{project.tag}</span>
        <h3 className="font-display text-2xl leading-[31px] tracking-[-.5px]">{project.title}</h3>
        <span aria-hidden="true" className={`ml-auto mt-auto flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] transition-colors duration-200 ${interactive ? "group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-[var(--on-accent)]" : ""}`}>→</span>
      </div>
    </>
  );

  const base = `${project.theme} ${card} group flex w-full flex-col overflow-hidden lg:w-[300px]`;
  const hover = "transition-[transform,border-color] duration-200 hover:border-[var(--accent-light)] motion-safe:hover:-translate-y-1";

  if (project.status === "live") {
    return (
      <a href={`/proyectos/${project.slug}`} style={{ height: project.cardHeight }} className={`${base} ${hover}`}>
        {content}
      </a>
    );
  }

  if (project.status === "draft") {
    return (
      <div style={{ height: project.cardHeight }} className={`${base} ${hover} cursor-pointer`}>
        {content}
      </div>
    );
  }

  return (
    <div style={{ height: project.cardHeight }} className={`${base} relative cursor-not-allowed`}>
      <div className="flex flex-1 flex-col opacity-[0.55]">{content}</div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[inherit] bg-black/75 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100">
        <span className="text-sm uppercase tracking-[2px] text-white">En construcción</span>
      </div>
    </div>
  );
}
