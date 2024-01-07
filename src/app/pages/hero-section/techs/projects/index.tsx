import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"

export const Projects = () => {
    return (
        <section id="projects" className="container mb-20">
            <SectionTitle subtitle="destaques" title="Projetos em Destaque" className="mb-10 text-4xl" />
            <div>
                <ProjectCard />
            </div>
        </section>
    )
}