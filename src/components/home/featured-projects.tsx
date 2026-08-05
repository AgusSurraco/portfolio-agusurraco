import { featuredProjects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/project-card";
export function FeaturedProjects(){return <section id="proyectos" className="mx-auto mt-[110px] flex h-[626px] w-[960px] flex-col justify-center gap-[60px]"><h2 className="font-sans text-[80px] font-extrabold uppercase tracking-[-2px]">Proyectos</h2><div className="flex items-start gap-7">{featuredProjects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></section>}
