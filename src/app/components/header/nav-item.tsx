import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/app/lib/utils"

type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname()

    const isActive = pathname === href

    return(
        <Link href={href} className={cn(
            "text-gray-400 flex items-center gap-2 font-medium font-mono text-lg hover:text-xl",
            isActive && 'text-gray-50'
        )}>
        <i className="fa-solid fa-bars text-sky-700 brightness-200"></i>
        {label}
        </Link>
    )
}
