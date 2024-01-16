'use client'

import { Link } from "@/app/components/link"
import Image from "next/image"
import { TbBrandGithub, TbBrandVercel } from "react-icons/tb"
import { motion } from 'framer-motion'
import  ContactHub from "../../../../../../../public/images/ContactHub.png"

export const ProjectCard = () => {

    const animProps = {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },

    }

    return (
        <motion.div
            className="flex gap-6 lg:gap-12 flex-col lg:flex-row "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
                <motion.div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-contain overflow-hidden rounded-lg"
                    initial={{ opacity: 0, y: 100, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.5 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <Image
                        width={600}
                        height={600}
                        src={ContactHub}
                        alt="Imagem"
                        className="w-full h-full object-fill rounded-lg opacity-80" />
                </motion.div>
            </div>

            <div>
                <motion.h3 className="flex items-center gap-3 font-medium text-lg text-gray-50 "
                    {...animProps}
                    transition={{ duration: 0.7 }}>
                    <Image
                        width={30}
                        height={30}
                        src={"/images/iconetecnologia.png"}
                        alt=""
                    />
                    ContactHub
                </motion.h3>

                <motion.p className="text-gray-400 my-6"
                    {...animProps}
                    transition={{ duration: 0.2, delay: 0.3 }}>
                O projeto ContactHub é uma aplicação completa que utiliza TypeScript e React para criar uma solução eficiente no frontend e backend. Desenvolvi um sistema CRUD robusto utilizando o TypeORM como ORM (Object-Relational Mapping) e um banco de dados PostgreSQL para armazenar os dados dos clientes e seus contatos. A aplicação permite o cadastro, leitura, atualização e exclusão de informações, proporcionando uma experiência completa de gerenciamento de dados para os usuários.
                </motion.p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <span className="bg-sky-700/80 text-sm text-slate-200 font-bold py-1 px-3 rounded-lg"> React </span>
                    <span className="bg-sky-700/80 text-sm text-slate-200 font-bold py-1 px-3 rounded-lg"> TypeScript </span>
                    <span className="bg-sky-700/80 text-sm text-slate-200 font-bold py-1 px-3 rounded-lg"> Postgres </span>
                    </div>
                <div className="flex flex-row lg:max-w-[350px] gap-4 ">
                <Link href="https://github.com/Lais-Lessa" target="_blank">
                    <TbBrandGithub className="text-3xl"/>
                </Link>
                <Link href=" https://frontend-lais-lessa.vercel.app" target="_blank">
                    <TbBrandVercel className="text-3xl"/>                
                </Link>
                </div>
            </div>

            
        </motion.div>
    )
}

