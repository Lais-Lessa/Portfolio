'use client'

import { NavItem } from "./nav-item"
import { usePathname } from "next/navigation"

export const Header = () => {

    const pathname = usePathname();

    const handleScrollSection= (sectionId:string) => {
        const section = document.querySelector(`#${sectionId}`)
        if(section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className=" absolute top-0 w-full z-10 h-20 flex items-center justify-center">
            <div className="container flex items-center justify-end">

                <nav onClick={ () => handleScrollSection('projects')} className="flex items-center gap-6 m-5 sm:gap-10">
                    <NavItem
                        label={'Projetos'}
                        href="#projects"
                        isActive={pathname === '/'}
                         />
                </nav>

                <nav onClick={() => handleScrollSection('contact')} className="flex items-center gap-4 sm:gap-10">
                    <NavItem
                        label={'Contatos'}
                        href="#contact"
                        isActive={pathname === '/'} />
                </nav>
            </div>
        </header>
    )
}