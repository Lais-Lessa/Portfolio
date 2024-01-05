'use client'

import Link from "next/link"
import { NavItem } from "./nav-item"
import { Button } from "../button"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Projetos',
        href: '/projects',
    },
]
export const Header = () => {

    return (
        <header className=" absolute top-0 w-full z-10 h-20 flex items-center justify-center">
            <div className="container flex items-center justify-end">
                <Link href="#projetos">
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label} />
                    ))}
                </nav>
            </div>
        </header>
    )
}