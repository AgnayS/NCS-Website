'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export function SupportHero() {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="absolute inset-0">
        <Image
          src="/api/placeholder/1920/1080" // Replace with actual support/community image
          alt="Supporting Conservation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Support Our Mission
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Join us in preserving wildlife and empowering communities. Every contribution makes a difference.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}