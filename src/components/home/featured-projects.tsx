import { featuredProjects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/ui/section";
export function FeaturedProjects(){return <Section id="proyectos" ghost="01" label="01 — Proyectos"><h2 className="mt-10 font-display text-[40px] font-extrabold leading-[1.1] tracking-[-1.5px] md:text-[56px]">Proyectos</h2><div className="mt-10 flex flex-col items-stretch gap-7 lg:flex-row lg:items-start">{featuredProjects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></Section>}
