import Link from "next/link"
import { cn } from "@/app/lib/utils"

type NavItemProps = {
    label: string
    href: string
    isActive?: boolean
}

export const NavItem = ({ label, href, isActive}: NavItemProps) => {

    return(
        <>
        <Link href={href} className={cn(
            "text-gray-400 flex items-center gap-2 font-medium font-mono text-lg hover:text-xl",
            isActive && 'text-gray-50'
        )}>
        <i className="fa-solid fa-bars text-sky-700 brightness-200"></i>
        {label}
        </Link>
        </>
    )
}
