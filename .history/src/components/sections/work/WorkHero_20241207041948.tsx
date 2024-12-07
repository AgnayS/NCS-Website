'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function WorkHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/api/placeholder/1920/1080" // Replace with actual conservation work image
          alt="Conservation Work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Our Conservation Work
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            For over four decades, we've been at the forefront of wildlife conservation,
            community development, and environmental research in Jharkhand and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  )
}