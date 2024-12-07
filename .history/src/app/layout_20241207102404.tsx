import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: {
    default: 'Nature Conservation Society',
    template: '%s | Nature Conservation Society',
  },
  description: 'Preserving wildlife and empowering communities since 1976',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-white font-sans">
        {children}
        <Footer />
      </body>
    </html>
  )
}