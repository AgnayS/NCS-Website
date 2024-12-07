'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container } from '../../ui/Container'

export function History() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24">
      <Container>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Our History
            </h1>
            <div className="prose prose-lg">
              <p>
                NCS is headquartered in Daltonganj, the district headquarters of Palamau
                district of Jharkhand state in India. The town is named after Colonel
                Dalton, Commissioner of Chhota Nagpur in 1861.
              </p>
              <p>
                The Palamau National Park was brought under Project Tiger in the year
                1974 and is among the original Tiger Reserves of India. The world's
                first tiger-census was done in the Palamau forests in the year 1932.
              </p>
              <p>
                The creation of Palamau Tiger Reserve in 1974 and implementation of
                Project Tiger Scheme was a significant challenge in forests where
                grazing, man-made forest fires, poaching and extraction of timber were
                prevalent. The need for people's participation was felt to convert this
                area into a no-poaching zone, with regulated grazing and reduced fire
                incidents.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/conservation/biodiversity.webp"
                alt="Palamau National Park"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className={`bg-primary-50 rounded-lg p-6 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="text-3xl font-bold text-primary-600 mb-2">1974</div>
                <div className="text-gray-600">Palamau Tiger Reserve established</div>
              </div>
              <div className={`bg-primary-50 rounded-lg p-6 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="text-3xl font-bold text-primary-600 mb-2">1976</div>
                <div className="text-gray-600">NCS founded to support conservation</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '400ms' }}>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-lg text-gray-600">
              Our mission is to mitigate negative pressure on biodiversity; sustainable
              environmental protection, natural resources management through scientific
              and sustainable approaches and to involve youths, students, teachers and
              local communities on such approaches.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}