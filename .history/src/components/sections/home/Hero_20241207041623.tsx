'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/api/placeholder/1920/1080" // Replace with your actual tiger reserve image
          alt="Palamau Tiger Reserve"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Nature Conservation Society
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Preserving wildlife and empowering communities since 1976. Join us in our mission to protect India's natural heritage.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-x-4"
          >
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
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}