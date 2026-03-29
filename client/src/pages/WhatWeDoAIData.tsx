import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';
import { CheckCircle2 } from 'lucide-react';

const WhatWeDoAIData = () => {
  return (
    <div>
      <SectionWrapper background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              AI & Data Engineering
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Transforming data into intelligence through advanced analytics and machine learning.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-bold text-[#BE000B] uppercase tracking-wider mb-4">
                  Use Cases
                </h3>
                <ul className="space-y-3">
                  {[
                    'Data pipeline architecture',
                    'Machine learning systems',
                    'Real-time analytics platforms',
                    'AI model deployment and operations',
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
                    'Data-driven decision making',
                    'Automated insights',
                    'Predictive capabilities',
                    'Operational intelligence',
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

export default WhatWeDoAIData;
