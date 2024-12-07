'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container } from '../../ui/Container'

const conservationAreas = [
  {
    title: 'Tiger Protection & Monitoring',
    description: 'Leading conservation efforts in the Palamau Tiger Reserve since 1976, implementing anti-poaching measures and conducting regular wildlife monitoring.',
    image: '/api/placeholder/600/400', // Replace with actual tiger image
    stats: {
      area: '1,000 km²',
      species: '100+ bird species',
      protected: 'Since 1974'
    }
  },
  {
    title: 'Anti-poaching Network',
    description: 'Developing and maintaining an extensive information network to prevent wildlife poaching and illegal trade across Jharkhand and Bihar.',
    image: '/api/placeholder/600/400',
    stats: {
      network: '300+ groups',
      coverage: '2 states',
      success: '90% reduction'
    }
  },
  {
    title: 'Biodiversity Surveys',
    description: 'Conducting comprehensive biodiversity surveys and monitoring in protected areas, documenting species diversity and population trends.',
    image: '/api/placeholder/600/400',
    stats: {
      surveys: '8 protected areas',
      documented: '1000+ species',
      ongoing: '45+ years'
    }
  }
]

export function Conservation() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <h2 className={`text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-12 text-center
          transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          Wildlife Conservation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conservationAreas.map((area, index) => (
            <div
              key={area.title}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden
                transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {area.description}
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(area.stats).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-2">
                      <div className="text-primary-600 font-bold">
                        {value}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}