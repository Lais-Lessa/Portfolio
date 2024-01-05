import './globals.css'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { BackToUp } from './components/back-to-top'
 
 
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
        <BackToUp />
        <Header />
        {children}
        <ContactForm />
        <Footer />
        </body>
    </html>
  )
}
