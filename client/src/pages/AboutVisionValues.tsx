import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';

const AboutVisionValues = () => {
  const values = [
    {
      title: 'Technical Excellence',
      description:
        'We maintain the highest standards of technical rigor. Every architecture, every line of code, every system design reflects deep expertise and uncompromising quality. We believe that technical excellence is not optional—it is fundamental to creating lasting value.',
      icon: '🔧'
    },
    {
      title: 'Intellectual Honesty',
      description:
        'We tell the truth, even when uncomfortable. If a strategy is flawed, we say so. If a timeline is unrealistic, we push back. Our clients trust us because we prioritize their success over our own convenience. Honesty builds the foundation for effective partnership.',
      icon: '🎯'
    },
    {
      title: 'Outcome Orientation',
      description:
        'We measure success by results, not activity. A well-documented strategy that sits on a shelf is failure. A system that ships on time but fails operationally is failure. We stay engaged until objectives are achieved and value is realized.',
      icon: '📈'
    },
    {
      title: 'Pragmatic Innovation',
      description:
        'We embrace new technologies and methodologies when they deliver real advantage. We avoid hype and fashion. Our recommendations are grounded in proven principles, informed by emerging capabilities, and tailored to your specific context.',
      icon: '💡'
    },
    {
      title: 'Long-Term Partnership',
      description:
        'We build relationships that extend beyond individual engagements. Many of our clients return to us for multiple initiatives over years. This continuity allows us to develop deep institutional knowledge and deliver compounding value over time.',
      icon: '🤝'
    },
  ];

  return (
    <div>
      {/* Vision Section with Image */}
      <SectionWrapper background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We envision a world where enterprise technology enables rather than constrains, where systems
                are designed with intention and built with precision, and where technical strategy and business
                strategy are truly integrated.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Too often, organizations struggle with technology initiatives that fail to deliver, systems that
                cannot scale, and strategies that never translate into operational reality. We exist to change
                this. By bringing together deep technical capability, strategic insight, and execution discipline,
                we help organizations build the technology foundations that drive sustained competitive advantage.
              </p>
            </div>
            <div>
              <img
                src="/images/about-vision.jpg"
                alt="Our vision for the future"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-12 text-center"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <div className="text-sm font-bold text-[#BE000B] mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Mission Section */}
      <SectionWrapper background="white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              To bridge the gap between technology strategy and execution, helping enterprises build systems
              that not only work today but scale for tomorrow. We transform complex technical challenges into
              competitive advantages through disciplined engineering and strategic partnership.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-[#043685] text-white p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">Design</div>
                <p className="text-sm">Strategic architecture that aligns technology with business objectives</p>
              </div>
              <div className="bg-[#BE000B] text-white p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">Build</div>
                <p className="text-sm">Robust systems engineered for scale, security, and performance</p>
              </div>
              <div className="bg-[#043685] text-white p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">Transform</div>
                <p className="text-sm"> lasting organizational capability and competitive advantage</p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default AboutVisionValues;
