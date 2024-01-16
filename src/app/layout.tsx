import './globals.css'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { Header } from './components/header'
import { ContactForm } from './components/contact'
import { Footer } from './components/footer'
import { BackToUp } from './components/back-to-top'
import { Toaster } from './components/toaster'
 
export const metadata = {
  title: {
    default: "Portfólio Laís Lessa",
  },
  icons: [
    {
      url: 'front/public/images/iconetecnologia.png'
    }
  ]
}
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToUp />
        <Header />
        {children}
        <ContactForm />
        <Footer />
        </body>
    </html>
  )
}
