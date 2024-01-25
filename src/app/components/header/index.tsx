'use client'

import { NavItem } from "./nav-item"
import { usePathname } from "next/navigation"
import { motion } from 'framer-motion'
import { FiAlignJustify } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";

export const Header = () => {

    const pathname = usePathname();

    const handleScrollSection= (sectionId:string) => {
        const section = document.querySelector(`#${sectionId}`)
        if(section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.header className=" absolute top-0 w-full z-10 h-20 flex items-center justify-center"
        initial={{ top: -100 }}
        animate={{ top: 0 }}
        transition={{ duration: 0.5 }}
>
            <div className="container flex items-center justify-center lg:justify-end">

                <FiAlignJustify className="text-sky-700 brightness-200" />
                <nav onClick={ () => handleScrollSection('projects')} className="flex items-center m-5 sm:gap-10">
                    <NavItem
                        label={'Projetos'}
                        href="#projects"
                        isActive={pathname === '/'}
                         />
                </nav>
                <RiContactsLine className="text-sky-700 brightness-200 mr-4"  />
                <nav onClick={() => handleScrollSection('contact')} className="flex items-center gap-4 sm:gap-10">
                    <NavItem
                        label={'Contatos'}
                        href="#contact"
                        isActive={pathname === '/'} />
                </nav>
            </div>
        </motion.header>
    )
}