'use client'

import { useSpring, animated, a } from '@react-spring/web'
import Image from 'next/image'
import { Container } from '../../ui/Container'

export function History() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  })

  return (
    <section className="py-24">
      <Container>
        <a.div style={fadeIn}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Our History
              </h1>
              <div className="prose prose-lg">
                <p>
                  NCS is headquartered in Daltonganj, the district headquarters of Palamau
                  district of Jharkhand state in India. The town is named after Colonel
                  Dalton, Commissioner of Chhota Nagpur in 1861. The district is home to
                  the famous Palamau National Park known for its wild life.
                </p>
                <p>
                  The Palamau National Park was brought under Project Tiger in the year
                  1974 and is among the original Tiger Reserves of India. The world's
                  first tiger-census was done in the Palamau forests in the year 1932.
                </p>
              </div>
            </div>

            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/api/placeholder/800/600"
                  alt="Palamau National Park"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-primary-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1974</div>
                  <div className="text-gray-600">Palamau Tiger Reserve established</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1976</div>
                  <div className="text-gray-600">NCS founded to support conservation</div>
                </div>
              </div>
            </div>
          </div>
        </a.div>
      </Container>
    </section>
  )
}