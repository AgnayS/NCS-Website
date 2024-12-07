'use client'

import { useState, useEffect } from 'react'
import { Container } from '../../ui/Container'

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24">
      <Container>
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Contact Us
          </h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="space-y-6">
                <div className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`} style={{ transitionDelay: '200ms' }}>
                  <h3 className="font-bold text-gray-900 mb-2">Dr. D.S. Srivastava</h3>
                  <p className="text-gray-600">Secretary</p>
                </div>
                <div className={`space-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`} style={{ transitionDelay: '300ms' }}>
                  <p className="text-gray-600">
                    Old I.T.O. Road, Redma,<br />
                    Daltonganj - 822 101,<br />
                    Palamau, Jharkhand.
                  </p>
                </div>
                <div className={`space-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`} style={{ transitionDelay: '400ms' }}>
                  <p className="text-gray-600">
                    <strong>Phone & Fax:</strong> (06562) 231022<br />
                    <strong>Email:</strong> <a href="mailto:ds@srivastavas.net" className="text-primary-600 hover:underline">
                      ds@srivastavas.net
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}