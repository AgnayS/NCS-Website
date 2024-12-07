import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/home/Hero'
import { Initiatives } from '../components/sections/home/Initiatives'
import { Impact } from '../components/sections/home/Impact'
import { JoinUs } from '../components/sections/home/JoinUs'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Initiatives />
        <Impact />
        <JoinUs />
      </main>
    </>
  )
}