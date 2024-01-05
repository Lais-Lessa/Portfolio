import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

export const WorkExperience = () => {
    return (
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row ">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiências" title="Experiência Profissional" />
                <p className="text-gray-400 mt-6">Estou sempre aberto a novos desafios, pois vejo neles oportunidades para aprender, crescer e superar limites, construindo um caminho de constante evolução.</p>
            </div>

            <div className="flex flex-col gap-4">
                <ExperienceItem />
                <ExperienceItem />
            </div>
        </section>
    )
}