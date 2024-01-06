import { Link } from "@/app/components/link"
import { Tech } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"


export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="rounded-lg flex bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-sky-500 opacity-70 hover:opacity-100 transition-all group">
                <div w-full h-48 overflow-hidden>
                <Image 
                width={420}
                height={304}
                src="/images/contactHub.jpeg"
                alt="Imagem"
                className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"/>
                </div>
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                    width={30}
                    height={30}
                    src={"/images/iconetecnologia.png"}
                    alt=""
                    />
                    ContactHub
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt animi ad distinctio! Corporis officiis minima omnis accusamus voluptatem dicta assumenda, atque eos laboriosam dolor placeat, maxime ducimus aperiam voluptates vel.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:">
                    <Tech name="Next.js" />
                    <Tech name="Next.js" />
                    <Tech name="Next.js" />
                    <Tech name="Next.js" />
                </div>

                <Link href="https://github.com/Lais-Lessa">
                Ver projeto
                <TbBrandGithub />
                </Link>
            </div>
        </div>
    )
}