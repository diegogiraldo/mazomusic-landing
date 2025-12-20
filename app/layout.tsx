import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ModalProvider } from '@/context/ModalContext'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Mazo Music Academy | Cursuri de Muzică pentru Copii în România',
  description: 'Academia de muzică pentru copii. Cursuri de chitară, pian și canto în Constanța, Năvodari, Hârșova, Valu lui Traian și Cernavodă. Înscrie-te acum!',
  keywords: 'cursuri muzică copii, lecții chitară, lecții pian, lecții canto, Constanța, Năvodari, academie muzică România',
  authors: [{ name: 'Mazo Music Academy' }],
  openGraph: {
    title: 'Mazo Music Academy | Cursuri de Muzică pentru Copii',
    description: 'Descoperă muzica în tine! Academia de muzică pentru copii în România.',
    url: 'https://mazomusic.com',
    siteName: 'Mazo Music Academy',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  )
}
