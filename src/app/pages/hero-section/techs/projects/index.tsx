import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const Projects = () => {
    return (
        <section id="projects" className="container">
            <HorizontalDivider className="mb-16" />
            <p className="mb-10 text-4xl">Projetos em destaque</p>
            <div>
                <ProjectCard />
                <HorizontalDivider className="my-16"/>
            </div>
        </section>
    )
}