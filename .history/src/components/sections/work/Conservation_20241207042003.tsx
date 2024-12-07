'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

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
    image: '/api/placeholder/600/400', // Replace with anti-poaching image
    stats: {
      network: '300+ groups',
      coverage: '2 states',
      success: '90% reduction'
    }
  },
  {
    title: 'Biodiversity Surveys',
    description: 'Conducting comprehensive biodiversity surveys and monitoring in protected areas, documenting species diversity and population trends.',
    image: '/api/placeholder/600/400', // Replace with survey image
    stats: {
      surveys: '8 protected areas',
      documented: '1000+ species',
      ongoing: '45+ years'
    }
  }
]

export function Conservation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-12 text-center">
            Wildlife Conservation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conservationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}