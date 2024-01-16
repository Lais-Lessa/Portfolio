'use client'

import { SectionTitle } from "../section-title"
import { motion } from 'framer-motion'
import { TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb"


export const ContactForm = () => {

    return (
        <section id="contact" className="w-full max-h-full min-w-[400px] lg:flex lg:flex-row lg:justify-between pb-10 sm:pb-32 py-32 bg-gray-900/70 lg:w-full lg:p-10">
            <div className="container flex flex-col-reverse lg:flex lg:justify-between lg:w-[1200px]">
            <motion.div
                    className="w-full h-full lg:max-w-[530px] rounded-lg p-10 flex justify-center items-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >

                <SectionTitle
                    subtitle="Contato"
                    title="Vamos trabalhar juntos? Entre em contato"
                    className="items-center text-center"
                />
                </motion.div>
            </div>
            <motion.div
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="container min-w-[400px] p-10 flex flex-col lg:w-full lg:items-start lg:justify-start lg:flex-col"
                >

                <div className="flex flex-col items-center mb-20 lg:flex-row lg:gap-10">
                <a
                href='https://wa.me/5514996600746?text= Olá! Como posso ajudar você hoje? 😊'
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[100px] h-[100px] lg:w-auto lg:min-w-[100px] lg:h-[100px] bg-green-500 rounded-full transition-transform transform hover:scale-110 aspect-w-1 aspect-h-1">
                <i className="text-4xl"><TbBrandWhatsapp  /></i>
                </a>
                <p  className="text-gray-400 my-6"> Conecte-se instantaneamente! Toque no ícone do WhatsApp para iniciar uma conversa e explorar possibilidades ilimitadas. Estamos apenas a uma mensagem de distância. </p>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:gap-10">
                <a
                href='https://www.linkedin.com/in/lais-lessa/'
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[90px] h-[90px] lg:w-auto lg:min-w-[90px] lg:h-[90px] bg-sky-500 rounded-md transition-transform transform hover:scale-110 aspect-w-1 aspect-h-1">
                <i className="text-4xl"><TbBrandLinkedin /></i>
                </a>
                <p className="text-gray-400 my-6"> Estou interessado em estabelecer conexões significativas e explorar oportunidades colaborativas. Juntos, podemos contribuir para uma rede profissional enriquecedora, compartilhando experiências e conhecimentos.</p>
                </div>
                </motion.div>
        </section>
    )
}
