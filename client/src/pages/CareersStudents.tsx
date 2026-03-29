import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';

const CareersStudents = () => {
  return (
    <div>
      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Students & Recent Graduates
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We invest in developing the next generation of technical and strategic leaders. Our internship and
              entry-level programs provide structured learning, meaningful project work, and mentorship from
              experienced practitioners.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-8"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Internship Program
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">What You'll Do</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work on real client engagements alongside senior consultants and engineers. Contribute to
                  technical analysis, system design, implementation, and strategic recommendations. Interns
                  are not relegated to busywork—your contributions matter.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">What You'll Learn</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gain exposure to enterprise technology environments, consulting methodologies, and complex
                  problem-solving. Develop both technical skills and business acumen through structured training
                  and hands-on experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Timeline</h3>
                <p className="text-gray-600 leading-relaxed">
                  Summer internships run 10-12 weeks. We also offer part-time positions during the academic
                  year for students interested in extended engagement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Conversion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Many of our full-time hires come from our internship program. Strong performers receive return
                  offers, and we stay connected with students who continue their studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-8"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              What We Look For
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Technical Foundation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strong fundamentals in computer science, engineering, or related quantitative fields.
                  Demonstrated ability to write clean code, understand system architecture, and solve
                  complex problems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Intellectual Curiosity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Genuine interest in how systems work, why technology decisions matter, and how to think
                  strategically about complex challenges. We value people who ask good questions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Communication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ability to explain technical concepts clearly and work effectively with diverse stakeholders.
                  In consulting, technical excellence must be paired with strong communication.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Initiative</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track record of taking ownership, seeking out challenges, and driving results. We look for
                  people who don't wait to be told what to do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        title="Interested in joining as a student or recent graduate?"
        buttonText="Apply Now"
        buttonLink="/contact"
      />
    </div>
  );
};

export default CareersStudents;
