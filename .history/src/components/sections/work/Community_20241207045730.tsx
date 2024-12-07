'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Users, Droplets, Leaf } from 'lucide-react'

const initiatives = [
  {
    title: 'Watershed Management',
    description: 'Managing watershed development across 24 micro watersheds in Palamau, Latehar and Garhwa districts to improve water conservation and agricultural productivity.',
    icon: Droplets,
    programs: [
      'Agricultural improvement',
      'Water conservation',
      'Soil management'
    ]
  },
  {
    title: 'Women Empowerment',
    description: 'Developing tribal women and youth through self-help groups and skill development programs, creating sustainable economic opportunities.',
    icon: Users,
    programs: [
      'Self-help groups',
      'Skill development',
      'Economic empowerment'
    ]
  },
  {
    title: 'Sustainable Agriculture',
    description: 'Promoting organic farming and sustainable agricultural practices to enhance food security and environmental conservation.',
    icon: Leaf,
    programs: [
      'Organic farming',
      'Horticulture',
      'Traditional practices'
    ]
  }
]

export function Community() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 -skew-y-6 transform origin-top-left" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Community Development
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering local communities through sustainable development initiatives
            that harmonize conservation goals with social progress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <initiative.icon className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {initiative.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {initiative.description}
              </p>
              <ul className="space-y-3">
                {initiative.programs.map((program) => (
                  <li key={program} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    {program}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}