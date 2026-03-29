import PageHero from '../components/PageHero';
import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';

const Industries = () => {
  const industries = [
    {
      id: 'technology-saas',
      title: 'Technology & SaaS',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      description: 'Accelerating product development, scaling infrastructure, and optimizing go-to-market for high-growth technology companies.',
      capabilities: [
        'Platform engineering and scalability',
        'Product-market fit optimization',
        'Technical due diligence',
        'Engineering team augmentation',
      ],
      caseStudies: [
        'Scaled SaaS platform to 10M+ users',
        'Reduced infrastructure costs by 40%',
        'Improved deployment frequency by 300%',
      ],
    },
    {
      id: 'financial-services',
      title: 'Financial Services',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      description: 'Building secure, compliant systems that power modern financial operations and customer experiences.',
      capabilities: [
        'Core banking modernization',
        'Trading and risk systems',
        'Regulatory compliance',
        'Digital banking platforms',
      ],
      caseStudies: [
        'Modernized legacy banking system',
        'Implemented real-time fraud detection',
        'Achieved SOC 2 compliance',
      ],
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      description: 'Transforming patient care through secure, interoperable systems and data-driven clinical insights.',
      capabilities: [
        'Electronic health records',
        'Clinical decision support',
        'Healthcare interoperability',
        'Patient engagement platforms',
      ],
      caseStudies: [
        'Integrated EHR across 5 hospitals',
        'Reduced patient wait times by 35%',
        'Improved diagnostic accuracy by 25%',
      ],
    },
    {
      id: 'energy-infrastructure',
      title: 'Energy & Infrastructure',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      description: 'Engineering resilient systems for energy management, smart infrastructure, and sustainable operations.',
      capabilities: [
        'Smart grid systems',
        'Asset management platforms',
        'Predictive maintenance',
        'Energy optimization',
      ],
      caseStudies: [
        'Deployed smart grid for 2M customers',
        'Reduced downtime by 45%',
        'Optimized energy distribution',
      ],
    },
    {
      id: 'professional-services',
      title: 'Professional Services',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      description: 'Enabling service delivery excellence through automation, analytics, and integrated technology platforms.',
      capabilities: [
        'Service delivery automation',
        'Knowledge management systems',
        'Client portal development',
        'Business intelligence',
      ],
      caseStudies: [
        'Automated 80% of service workflows',
        'Improved client satisfaction by 40%',
        'Reduced service delivery time by 50%',
      ],
    },
    {
      id: 'consumer-retail',
      title: 'Consumer & Retail',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      description: 'Creating seamless omnichannel experiences and intelligent supply chain operations.',
      capabilities: [
        'E-commerce platforms',
        'Supply chain optimization',
        'Personalization engines',
        'Inventory management',
      ],
      caseStudies: [
        'Increased online sales by 150%',
        'Reduced inventory costs by 30%',
        'Improved customer retention by 45%',
      ],
    },
  ];

  return (
    <div>
      <PageHero
        title="Deep expertise across sectors driving modern economies."
        subtitle="Industry-specific solutions for your business."
      />

      {/* Overview Section */}
      <SectionWrapper background="white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We bring deep domain expertise and technical excellence to every industry we serve. 
              Our solutions are tailored to address unique challenges while leveraging cross-industry 
              insights to drive innovation and competitive advantage.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Industry Sections */}
      {industries.map((industry, index) => (
        <SectionWrapper
          key={industry.title}
          background={index % 2 === 0 ? 'white' : 'gray'}
        >
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                      style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
                    >
                      {industry.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">{industry.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-[#BE000B] uppercase tracking-wider mb-4">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-3">
                        {industry.capabilities.map((capability) => (
                          <li key={capability} className="text-gray-700 border-l-2 border-[#043685] pl-4">
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[#BE000B] uppercase tracking-wider mb-4">
                        Recent Successes
                      </h3>
                      <ul className="space-y-2">
                        {industry.caseStudies.map((caseStudy) => (
                          <li key={caseStudy} className="text-gray-600 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#BE000B] rounded-full"></span>
                            {caseStudy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
                      style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
                    >
                      {industry.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">{industry.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-[#BE000B] uppercase tracking-wider mb-4">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-3">
                        {industry.capabilities.map((capability) => (
                          <li key={capability} className="text-gray-700 border-l-2 border-[#043685] pl-4">
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[#BE000B] uppercase tracking-wider mb-4">
                        Recent Successes
                      </h3>
                      <ul className="space-y-2">
                        {industry.caseStudies.map((caseStudy) => (
                          <li key={caseStudy} className="text-gray-600 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#BE000B] rounded-full"></span>
                            {caseStudy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Container>
        </SectionWrapper>
      ))}

      {/* Approach Section */}
      <SectionWrapper background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6 text-center"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Our Industry Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#043685] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-[#043685] mb-3">Deep Discovery</h3>
                <p className="text-gray-600">
                  We immerse ourselves in your industry to understand unique challenges, 
                  regulations, and opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#043685] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#043685] mb-3">Tailored Solutions</h3>
                <p className="text-gray-600">
                  We design solutions that address specific industry needs while leveraging 
                  cross-sector best practices.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#043685] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-[#043685] mb-3">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of industry trends and continuously evolve solutions to 
                  maintain competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default Industries;
