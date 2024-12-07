import { Header } from '@/components/layout/Header'
import { SupportHero } from '../../components/sections/support/SupportHero'
import { HowToHelp } from '@/components/sections/support/HowToHelp'
import { ContactSection } from '@/components/sections/support/ContactSection'

export const metadata = {
  title: 'Support Us | Nature Conservation Society',
  description: 'Join us in our mission to preserve wildlife and empower communities.',
}

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <SupportHero />
        <HowToHelp />
        <ContactSection />
      </main>
    </>
  )
}