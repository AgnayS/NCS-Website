'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'

export function History() {
  return (
    <section className="py-24">
      <Container>
      const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.8 }}
  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
>
          <div>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Our History
            </h1>
            <div className="prose prose-lg">
              <p>
                NCS is headquartered in Daltonganj, the district headquarters of Palamau
                district of Jharkhand state in India. The town is named after Colonel
                Dalton, Commissioner of Chhota Nagpur in 1861. The district is home to
                the famous Palamau National Park known for its wild life.
              </p>
              <p>
                The Palamau National Park was brought under Project Tiger in the year
                1974 and is among the original Tiger Reserves of India. The world's
                first tiger-census was done in the Palamau forests in the year 1932.
              </p>
              <p>
                The creation of Palamau Tiger Reserve in 1974 and implementation of
                Project Tiger Scheme was a significant challenge in forests where
                grazing, man-made forest fires, poaching and extraction of timber were
                prevalent. The need for people's participation was felt to convert this
                area into a no-poaching zone, with regulated grazing, reduced fire
                incidents and the creation of a framework where scientific management
                of the environment was possible.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/api/placeholder/800/600" // Replace with actual historical image
                alt="Palamau National Park"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">1974</div>
                <div className="text-gray-600">Palamau Tiger Reserve established</div>
              </div>
              <div className="bg-primary-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">1976</div>
                <div className="text-gray-600">NCS founded to support conservation</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-lg text-gray-600">
              Our mission is to mitigate negative pressure on biodiversity; sustainable
              environmental protection, natural resources management through scientific
              and sustainable approaches and to involve youths, students, teachers and
              local communities on such approaches.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}