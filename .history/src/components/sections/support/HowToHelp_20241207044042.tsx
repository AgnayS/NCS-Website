import { Container } from '../../ui/Container'
export function HowToHelp() {
    return (
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
              How You Can Help
            </h2>
            <div className="prose prose-lg">
              <p>
                NCS is involved in a wide variety of activities, and we welcome any
                participation from well-wishers in our activities. You can contribute
                in many ways, including:
              </p>
              <ul>
                <li>Volunteering to help us in specific field activities</li>
                <li>Helping us interface with the government or funding agencies</li>
                <li>Supporting us with funds or helping in fundraising</li>
              </ul>
              <p>
                NCS chose to operate in an underdeveloped state of India where a small
                contribution goes a long way. We are not a "professional NGO" as much
                as a group of respectable individuals who are passionate about our
                beliefs, and we firmly believe that donations should go where they are
                intended to - the recipients of our activities.
              </p>
              <p>
                We take great care to ensure that administrative overheads are kept to
                a minimum. NCS has been audited every year since inception by a
                reputed Audit firm, thus providing full accountability for
                contributions.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg mt-8">
                <p className="text-primary-900 font-medium">
                  Donations made in India to NCS are tax-exempt under Section 80G of
                  the IT Act. We will be happy to provide a detailed breakdown of
                  usage of funds if needed.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }