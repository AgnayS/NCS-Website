'use client'

import { useState, useEffect } from 'react'
import { Container } from '../../ui/Container'
import { Droplets, Users, Leaf } from 'lucide-react'

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
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 -skew-y-6 transform origin-top-left" />
      
      <Container>
        <div className={`relative text-center mb-16
          transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Community Development
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering local communities through sustainable development initiatives
            that harmonize conservation goals with social progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.title}
              className={`bg-white rounded-xl shadow-lg p-8
                transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}