'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container } from '../../ui/Container'

export function WorkHero() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/community/watershed.webp"
          alt="Conservation Work"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      <Container>
        <div className={`relative pt-32 pb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Our Conservation Work
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              For over four decades, we've been at the forefront of wildlife conservation,
              community development, and environmental research in Jharkhand and beyond.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}