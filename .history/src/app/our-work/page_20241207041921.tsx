import { Header } from '@/components/layout/Header'
import { WorkHero } from '@/components/sections/work/WorkHero'
import { Conservation } from '@/components/sections/work/Conservation'
import { Community } from '@/components/sections/work/Community'
import { Research } from '@/components/sections/work/Research'

export const metadata = {
  title: 'Our Work | Nature Conservation Society',
  description: 'Discover our wildlife conservation, community development, and research initiatives.',
}

export default function OurWorkPage() {
  return (
    <>
      <Header />
      <WorkHero />
      <Conservation />
      <Community />
      <Research />
    </>
  )
}