import PageHero from '../components/PageHero';
import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <PageHero
        title="Let's discuss how we can help you achieve your objectives."
        subtitle="Get in touch with our team."
      />

      <SectionWrapper background="white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We approach every conversation with curiosity and respect for your time. Whether you're
                exploring a specific challenge or seeking strategic guidance, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#043685] flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] mb-1">Email</h3>
                    <a
                      href="mailto:contact@walamen.com"
                      className="text-[#043685] hover:text-[#BE000B] transition-colors"
                    >
                      contact@walamen.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#043685] flex items-center justify-center mr-4 flex-shrink-0">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] mb-1">LinkedIn</h3>
                    <a
                      href="#"
                      className="text-[#043685] hover:text-[#BE000B] transition-colors"
                    >
                      linkedin.com/company/walamen
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#043685] flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] mb-1">Headquarters</h3>
                    <p className="text-gray-600">
                      New York, NY
                      <br />
                      With teams across North America
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F7FA] p-8">
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#043685] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#043685] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#043685] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#043685] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#BE000B] text-white px-6 py-3 text-base font-semibold hover:bg-[#9B0009] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1.2' }}
            >
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              After you reach out, we'll schedule an initial conversation to understand your challenges and
              objectives. If there's potential alignment, we'll propose a more detailed discovery engagement.
              We're selective about the work we take on—we only engage when we're confident we can deliver
              meaningful value. No sales pressure, just honest assessment of fit.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
