'use client'

import { useState, useEffect } from 'react'
import { Container } from '../../ui/Container'
import Image from 'next/image'

const stats = [
  { label: 'Years of Conservation', value: '45+' },
  { label: 'Protected Areas', value: '8' },
  { label: 'Youth Reached Annually', value: '5000+' },
  { label: 'Villages Supported', value: '180+' },
]

export function Impact() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/api/placeholder/1920/1080"
          alt="Our Impact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-display font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Our Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}