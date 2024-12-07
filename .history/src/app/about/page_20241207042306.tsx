import { Header } from '@/components/layout/Header'
import { History } from '@/components/sections/about/History'
import { Team } from '@/components/sections/about/Team'
import { Container } from '@/components/ui/Container'

export const metadata = {
  title: 'About | Nature Conservation Society',
  description: 'Learn about NCS\'s history, mission, and the team behind our conservation efforts.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Container>
          <History />
          <Team />
        </Container>
      </main>
    </>
  )
}