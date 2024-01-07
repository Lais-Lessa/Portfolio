'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react';


type TechProps = ComponentProps<typeof motion.span> & {
    name: string
    index?: number;
}

export const Tech = ({ name, index, ...props }: TechProps) => {

    const technologies = [
        'JavaScript',
        'TypeScript',
        'Python',
      ];


      return (
        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="bg-sky-700/80 text-sm text-slate-200 font-bold py-1 px-3 rounded-lg"
              {...props}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      );
    };