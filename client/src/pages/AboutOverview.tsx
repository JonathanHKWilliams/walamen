import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';

const AboutOverview = () => {
  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Technology Experts' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div>
      {/* Hero Section with Image */}
      <SectionWrapper background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Walamen is a specialized consultancy at the intersection of engineering, technology, and strategy.
                We partner with enterprises to design, build, and scale systems that drive competitive advantage.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded on the principle that technology strategy and execution are inseparable, we bring deep
                technical expertise and strategic rigor to every engagement. Our team combines experience from
                leading technology companies, management consultancies, and enterprise environments.
              </p>
            </div>
            <div>
              <img
                src="/src/assets/images/about-overview-hero.jpg"
                alt="Walamen team collaborating"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-[#043685] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-12"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#043685] mb-3">Technical Depth</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't just advise on technology—we build it. Our consultants have shipped production systems,
                  managed large-scale infrastructure, and led engineering organizations. This hands-on experience
                  informs every recommendation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#043685] mb-3">Strategic Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Technology decisions are business decisions. We align technical architecture with business
                  objectives, ensuring that every system we design directly contributes to organizational goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#043685] mb-3">End-to-End Capability</h3>
                <p className="text-gray-600 leading-relaxed">
                  From strategy through implementation, we stay engaged. This continuity ensures that strategic
                  vision translates into operational reality without loss of intent or quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#043685] mb-3">Enterprise Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand the complexities of large-scale organizations: legacy systems, regulatory
                  constraints, organizational dynamics, and risk management. Our solutions are pragmatic and
                  executable in real enterprise contexts.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/src/assets/images/about-approach.jpg"
                alt="Our approach in action"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Our Approach
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every engagement begins with deep discovery. We invest time understanding your business context,
                technical landscape, organizational capabilities, and strategic objectives. This foundation informs
                disciplined analysis, rigorous design, and precise execution.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe in transparency, intellectual honesty, and long-term partnership. Our success is measured
                by your outcomes: systems that perform, teams that scale, and organizations that transform.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default AboutOverview;
