import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode } from "react"

type KnownTechProps = {
    tech: {
        icon: ReactNode
        name: string
        startDate: string
    }
}


export const KnownTech = ({ tech }: KnownTechProps) => {

    const relativeTime = getRelativeTimeString(new Date(tech.startDate), 'pt-BR',
    ).replace('há ', ' ')

    return (
        <div className="bg-gray-900/70 p-6 rounded-lg text-white-silver flex flex-col gap-2 hover:text-text-sky-700 hover:bg-cyan-950/50 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                {tech.icon}
            </div>
            <span>{relativeTime} de experiência</span>
        </div>
    )
}