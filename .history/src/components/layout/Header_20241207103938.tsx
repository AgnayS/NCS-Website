'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Work', href: '/our-work' },
  { name: 'About', href: '/about' },
  { name: 'Support Us', href: '/support-us' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const isLightPage = pathname === '/about'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height */}
          <Link 
            href="/" 
            className="flex items-center space-x-3"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden"> {/* Logo container */}
              <Image
                src="/images/logo/logo.jpg"
                alt="NCS Logo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <span className={`font-display font-extrabold text-3xl transition-colors ${
              isScrolled 
                ? 'text-primary-900' 
                : isLightPage
                  ? 'text-[#3E2723]'
                  : 'text-white'
            }`}>
              NCS
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-bold ${  // Made text larger and bolder
                  pathname === item.href
                    ? 'text-primary-600'
                    : isScrolled
                      ? 'text-gray-600 hover:text-primary-600'
                      : isLightPage
                        ? 'text-[#3E2723] hover:text-primary-600'
                        : 'text-white hover:text-primary-200'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled || isLightPage
                  ? 'text-[#3E2723]'
                  : 'text-white'
              }`}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-lg font-bold ${  // Made text larger and bolder
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}