'use client'

import { useState, useEffect } from 'react'
import { Container } from '../../ui/Container'
import Image from 'next/image'

export function SupportHero() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-16 relative">
      <div className="absolute inset-0">
        <Image
          src="/src/public/images/support/community.webp"
          alt="Supporting Conservation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <Container>
        <div className={`relative text-center max-w-3xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Support Our Mission
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Join us in preserving wildlife and empowering communities. Every contribution makes a difference.
          </p>
        </div>
      </Container>
    </section>
  )
}