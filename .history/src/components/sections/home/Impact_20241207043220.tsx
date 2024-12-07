'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

const stats = [
  { label: 'Years of Conservation', value: '45+' },
  { label: 'Protected Areas', value: '8' },
  { label: 'Youth Reached Annually', value: '5000+' },
  { label: 'Villages Supported', value: '180+' },
]

export function Impact() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/api/placeholder/1920/1080" // Replace with impact image
          alt="Our Impact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Our Impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}