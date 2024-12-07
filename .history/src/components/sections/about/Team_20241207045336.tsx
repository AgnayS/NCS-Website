'use client'

import { useState, useEffect } from 'react'
import { Container } from '../../ui/Container'

const leadership = {
  current: [
    {
      name: 'Sri Suresh Kumar Jain',
      role: 'President',
      org: 'Ratanlal Prakshchand Group'
    },
    {
      name: 'Dr. D.S. Srivastava',
      role: 'Secretary',
      org: 'Professor, Ranchi University and Principal, G. L. A. College, Daltonganj'
    },
    {
      name: 'Dr. R.D. Kejariwal',
      role: 'Vice President'
    },
    {
      name: 'Dr. M. Firoz',
      role: 'Vice President',
      org: 'Ranchi Office'
    },
    {
      name: 'Sri Sunit Kumar',
      role: 'Treasurer'
    }
  ],
  pastPresidents: [
    'Late Sri S.P. Shahi',
    'Late Sri Bhaia S.P. Deo',
    'Late Sri J.P. Sinha'
  ],
  executiveMembers: [
    {
      name: 'Sri Rajeswar Pandey',
      role: 'Advocate'
    },
    {
      name: 'Sri A.S. Walia',
    },
    {
      name: 'Sri S.E.H. Kazmi',
      role: 'IFS'
    }
  ]
}

export function Team() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              Our People
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated team leading our conservation efforts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.current.map((member, index) => (
              <div
                key={member.name}
                className={`bg-white rounded-lg shadow-sm p-6 transition-all duration-500 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-2">{member.role}</div>
                {member.org && (
                  <div className="text-sm text-gray-500">{member.org}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Past Presidents</h3>
              <ul className="space-y-4">
                {leadership.pastPresidents.map((president) => (
                  <li key={president} className="text-gray-600">{president}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Executive Members</h3>
              <ul className="space-y-4">
                {leadership.executiveMembers.map((member) => (
                  <li key={member.name} className="text-gray-600">
                    {member.name}
                    {member.role && (
                      <span className="text-gray-500 ml-2">({member.role})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}