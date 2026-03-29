import React from 'react';
import PageHero from '../components/PageHero';
import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';

const Industries = () => {
  const industries = [
    {
      id: 'technology-saas',
      title: 'Technology & SaaS',
      image: '/images/what-we-do-dropdown.jpg',
      description: 'Accelerating product development, scaling infrastructure, and optimizing go-to-market for high-growth technology companies.',
      capabilities: [
        'Platform engineering and scalability',
        'Cloud-native architecture',
        'DevOps and CI/CD pipelines',
        'API integration and microservices'
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
      image: '/images/industries-dropdown.jpg',
      description: 'Building secure, compliant systems that power modern financial operations and customer experiences.',
      capabilities: [
        'Core banking modernization',
        'Regulatory compliance solutions',
        'Payment processing systems',
        'Risk management platforms'
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
      image: '/images/work-enterprise-platform.jpg',
      description: 'Transforming patient care through secure, interoperable systems and data-driven clinical insights.',
      capabilities: [
        'Electronic health records',
        'Telemedicine platforms',
        'Clinical decision support',
        'Healthcare data analytics'
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
      image: '/images/work-cloud-migration.jpg',
      description: 'Engineering resilient systems for energy management, smart infrastructure, and sustainable operations.',
      capabilities: [
        'Smart grid systems',
        'Infrastructure monitoring',
        'Energy management platforms',
        'Sustainability analytics'
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
      image: '/images/work-ai-analytics.jpg',
      description: 'Enabling service delivery excellence through automation, analytics, and integrated technology platforms.',
      capabilities: [
        'Service delivery automation',
        'Client management systems',
        'Analytics and reporting',
        'Workflow optimization'
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
      image: '/images/careers-dropdown.jpg',
      description: 'Creating seamless omnichannel experiences and intelligent supply chain operations.',
      capabilities: [
        'E-commerce platforms',
        'Inventory management',
        'Customer analytics',
        'Supply chain optimization'
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
            <p className="text-xl text-gray-600 mb-2 leading-relaxed">
              We bring deep domain expertise and technical excellence to every industry we serve. 
              Our solutions are tailored to address unique challenges while leveraging cross-industry 
              insights to drive innovation and competitive advantage.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Industry Sections */}
      {/* Add divider before Technology & SaaS */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="h-px bg-gray-300 my-2"></div>
      </div>
      {industries.map((industry, index) => (
        <React.Fragment key={industry.title}>
          <SectionWrapper
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
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[400px] object-cover rounded-lg"
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
        </React.Fragment>
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
            <div className="grid md:grid-cols-3 gap-0 mt-12 relative">
              {/* Vertical divider between card 1 and 2 */}
              <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gray-300"></div>
              {/* Vertical divider between card 2 and 3 */}
              <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gray-300"></div>
              
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-[#043685] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-[#043685] mb-3">Deep Discovery</h3>
                <p className="text-gray-600">
                  We immerse ourselves in your industry to understand unique challenges, 
                  regulations, and opportunities.
                </p>
              </div>
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-[#043685] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#043685] mb-3">Tailored Solutions</h3>
                <p className="text-gray-600">
                  We design solutions that address specific industry needs while leveraging 
                  cross-sector best practices.
                </p>
              </div>
              <div className="text-center px-6">
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
