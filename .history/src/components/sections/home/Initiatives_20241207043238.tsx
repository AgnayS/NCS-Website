'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Shield, Users, Sprout } from 'lucide-react'

const initiatives = [
  {
    title: 'Wildlife Conservation',
    description: 'Protection and monitoring of wildlife in Palamau Tiger Reserve and 8 Protected Areas across Jharkhand and Bihar.',
    icon: Shield,
  },
  {
    title: 'Community Development',
    description: 'Sustainable development initiatives for tribal communities through watershed management and skill development programs.',
    icon: Users,
  },
  {
    title: 'Environmental Education',
    description: 'Building awareness about environmental conservation through youth participation and nature clubs in schools.',
    icon: Sprout,
  },
]

export function Initiatives() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6"
          >
            Our Key Initiatives
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-primary-50 rounded-full mb-6">
                <initiative.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {initiative.title}
              </h3>
              <p className="text-gray-600">
                {initiative.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}