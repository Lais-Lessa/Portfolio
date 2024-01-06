import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { TbBrandNextjs } from "react-icons/tb"

export const Techs = () => {
    return (
        <section className="py-16 container">
            <p className="mb-10 text-4xl">Experiências</p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {Array.from({ length: 8}).map((_, index) => (
                    <KnownTech key={index} tech={{
                        icon: <TbBrandNextjs />,
                        name: 'Next.js',
                        startDate: '2023-10-01'
                    }}/>
                ))}
            </div>
        </section>
    )
}
