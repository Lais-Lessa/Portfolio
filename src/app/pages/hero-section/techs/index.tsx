'use client'

import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { motion } from 'framer-motion'
import { TbBrandDjango, TbBrandNextjs, TbBrandNodejs, TbBrandPrisma, TbBrandReact, TbBrandTailwind } from "react-icons/tb"
import {FaServer, FaDatabase, FaCode, FaCss3Alt } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';

const knownTechs = [
    {
        icon: <FaCode /> ,
        name: 'HTML',
        startDate: '2023-03-01',
      },
      {
        icon: <FaCss3Alt />,
        name: 'CSS',
        startDate: '2023-03-01',
      },
    {
      icon: <TbBrandReact />,
      name: 'React',
      startDate: '2023-04-01',
    },
    {
      icon: <TbBrandNodejs />,
      name: 'Node.js',
      startDate: '2023-05-01',
    },
    {
      icon: <FaServer />,
      name: 'Express',
      startDate: '2023-05-01',
    },
    {
      icon: <FaDatabase />,
      name: 'PostgreSQL',
      startDate: '2023-06-01',
    },
    {
      icon: <FaCode />,
      name: 'TypeORM',
      startDate: '2023-07-01',
    },
    {
      icon: <TbBrandDjango />,
      name: 'Django',
      startDate: '2023-09-01',
    },
    {
      icon: <SiNestjs />,
      name: 'Nest.js',
      startDate: '2023-10-01',
    },
    {
      icon: <TbBrandNextjs />,
      name: 'Next.js',
      startDate: '2023-10-01',
    },
    {
      icon: <TbBrandPrisma />,
      name: 'Prisma',
      startDate: '2023-10-01',
    },
    {
      icon: <TbBrandTailwind />,
      name: 'Tailwind CSS',
      startDate: '2023-10-01',
    },
  ];


export const Techs = () => {
    return (
        <section className="py-16 container">
            <SectionTitle subtitle="experiências" title="Conhecimentos" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {knownTechs.map((tech, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.15, delay: index * 0.1 }}>
                        <KnownTech tech={tech} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
