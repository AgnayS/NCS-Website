'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export function JoinUs() {
  return (
    <section className="py-24 bg-primary-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Support our conservation efforts and help us create a sustainable future for wildlife and communities in Jharkhand.
          </p>
          <Link
            href="/support-us"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Support Us
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}