import { Container } from '../../ui/Container'

export function ContactSection() {
    return (
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
              Contact Us
            </h2>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Dr. D.S. Srivastava</h3>
                    <p className="text-gray-600">Secretary</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      Old I.T.O. Road, Redma,<br />
                      Daltonganj - 822 101,<br />
                      Palamau, Jharkhand.
                    </p>
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