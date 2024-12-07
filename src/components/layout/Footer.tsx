import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-4">
                Nature Conservation Society
              </h3>
              <p className="text-gray-400 text-sm">
                Preserving wildlife and empowering communities in Jharkhand since 1976.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/our-work" className="hover:text-white transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/support-us" className="hover:text-white transition-colors">
                    Support Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-4">
                Contact
              </h3>
              <address className="text-gray-400 not-italic">
                Old I.T.O. Road, Redma,<br />
                Daltonganj - 822 101,<br />
                Palamau, Jharkhand<br /><br />
                <a href="tel:+916562231022" className="hover:text-white transition-colors">
                  (06562) 231022
                </a>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Nature Conservation Society. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}