'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Microscope, Birds, Leaf } from 'lucide-react'

const researchAreas = [
  {
    title: 'Wildlife Research',
    description: 'Scientific research on wildlife behavior, ecology and ethnology in Palamau Tiger Reserve and 8 Protected Areas in Jharkhand and Bihar. Studies focus on tiger prey species and elephant ecology.',
    icon: Microscope,
  },
  {
    title: 'Biodiversity Surveys',
    description: 'Comprehensive biodiversity surveys and monitoring of Palamau Tiger Reserve and forest areas (PA and Non-PA of Jharkhand) since 1976. Status surveys of tigers in Non-PA of Jharkhand for conservation awareness.',
    icon: Birds,
  },
  {
    title: 'Medicinal Plants',
    description: 'Documentation of medicinal plants used by tribal doctors in Jharkhand, and initiatives for insitu conservation of plants in protected forests through tribal farming practices.',
    icon: Leaf,
  }
]

export function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Research & Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our scientific research and documentation initiatives form the backbone of our conservation efforts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}