import { Inter, Montserrat } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata = {
  title: 'Nature Conservation Society',
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
        <main>{children}</main>
      </body>
    </html>
  )
}