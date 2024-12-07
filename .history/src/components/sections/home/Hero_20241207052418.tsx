'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container } from '../../ui/Container'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="public/" // Replace with your actual hero image
          alt="Palamau Tiger Reserve"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <Container>
        <div className={`relative z-10 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Nature Conservation Society
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Preserving wildlife and empowering communities since 1976. Join us in our mission to protect India's natural heritage.
          </p>
          <div className={`space-x-4 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '200ms' }}>
            <a
              href="#about"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </a>
            <a
              href="/support-us"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium backdrop-blur-sm transition-colors"
            >
              Support Us
            </a>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} style={{ transitionDelay: '400ms' }}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}