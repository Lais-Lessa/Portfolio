import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/Lais-Lessa',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://www.linkedin.com/in/lais-lessa/',
        icon: <TbBrandLinkedin  />
    },
    {
        url: 'http://github.com.br',
        icon: <TbBrandWhatsapp  />
    }
]

export const Footer = () => {
    return (
        <footer className='h-14 w-full flex items-center justify-center bg-gray-950/80 '>
                        <div className="text-2xl text-gray-600 flex items-center h-30 gap-3">
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
        </footer>
    )
}