'use client'

import Image from "next/image"
import { Tech } from "../../components/tech-badge"
import { Button } from "../../components/button"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { motion } from 'framer-motion'


const MOCK_CONTACTS = [
    {
        url: 'https://github.com/Lais-Lessa',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://www.linkedin.com/in/lais-lessa/',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'http://github.com.br',
        icon: <TbBrandWhatsapp />
    }
]


export const HeroSection = () => {

    const handleContact = () => {
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="w-full lg:h-[755px] flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[80px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <motion.div
                    className="w-full h-full lg:max-w-[530px] bg-gray-900/70 rounded-lg p-10 "
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-mono text-sky-700 text-[20px] brightness-200 font-bold" >Olá, meu nome é</p>
                    <h2 className="text-[40px] font-medium mt-2">Laís Lessa</h2>

                    <p className="text-gray-300 my-6 text-sm sm:text-base">Sou uma desenvolvedora fullstack, no início da minha jornada no mundo do Desenvolvimento Web. Descobri minha paixão por tecnologia e estou animada para aprofundar meus conhecimentos e enfrentar desafios. Busco constantemente aprender e contribuir para projetos inovadores. Estou entusiasmada em fazer parte dessa comunidade dinâmica e colaborativa, pronta para explorar e crescer neste empolgante campo da tecnologia.</p>

                    <Tech
                        name="Next.js"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    />

                    <div className="mt-4 lg:mt-6 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button" onClick={handleContact}>
                            Entre em Contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="origin-center grid place-items-center w-full h-full lg:max-w-[530px]"
                >
                    <Image className="rounded-full w-[400px] h-[400px] lg:w[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl object-cover"
                        width={428}
                        height={404}
                        src={"/images/lais.JPG"}
                        alt="Foto de Laís Lessa"
                    />
                </motion.div>
            </div>
        </section>
    )
}