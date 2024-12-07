'use client'

import { useState, useEffect } from 'react'
import { Container } from '../../ui/Container'
import { Microscope, Bird, Leaf } from 'lucide-react'

const researchAreas = [
  {
    title: 'Wildlife Research',
    description: 'Scientific research on wildlife behavior, ecology and ethnology in Palamau Tiger Reserve and 8 Protected Areas in Jharkhand and Bihar. Studies focus on tiger prey species and elephant ecology.',
    icon: Microscope,
  },
  {
    title: 'Biodiversity Surveys',
    description: 'Comprehensive biodiversity surveys and monitoring of Palamau Tiger Reserve and forest areas (PA and Non-PA of Jharkhand) since 1976. Status surveys of tigers in Non-PA of Jharkhand for conservation awareness.',
    icon: Bird,
  },
  {
    title: 'Medicinal Plants',
    description: 'Documentation of medicinal plants used by tribal doctors in Jharkhand, and initiatives for insitu conservation of plants in protected forests through tribal farming practices.',
    icon: Leaf,
  }
]

export function Research() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className={`text-center mb-16
          transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Research & Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our scientific research and documentation initiatives form the backbone of our conservation efforts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full bg-primary-50 group-hover:bg-primary-100 transition-colors">
                  <area.icon className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {area.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}