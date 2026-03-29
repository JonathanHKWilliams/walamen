import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';
import { CheckCircle2 } from 'lucide-react';

const WhatWeDoStrategy = () => {
  return (
    <div>
      <SectionWrapper background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Strategy & Management Consulting
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Guiding technology strategy and organizational transformation.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-bold text-[#BE000B] uppercase tracking-wider mb-4">
                  Use Cases
                </h3>
                <ul className="space-y-3">
                  {[
                    'Technology strategy and roadmapping',
                    'Digital operating model design',
                    'Vendor selection and assessment',
                    'Technology due diligence',
                  ].map((useCase) => (
                    <li key={useCase} className="flex items-start">
                      <CheckCircle2 className="text-[#043685] mt-1 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#BE000B] uppercase tracking-wider mb-4">
                  Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    'Strategic clarity',
                    'Aligned technology investments',
                    'Organizational readiness',
                    'Risk mitigation',
                  ].map((outcome) => (
                    <li key={outcome} className="flex items-start">
                      <CheckCircle2 className="text-[#043685] mt-1 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default WhatWeDoStrategy;
