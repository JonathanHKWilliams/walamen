import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';

const CareersLife = () => {
  const lifeAtWalamen = [
    {
      title: 'Collaborative Environment',
      message: 'Work alongside talented professionals who challenge and inspire you. Our open-door policy encourages direct communication and knowledge sharing.',
      image: '/src/assets/images/careers-dropdown.jpg'
    },
    {
      title: 'Innovation Hub',
      message: 'Be part of cutting-edge projects that push boundaries. We encourage experimentation and provide resources for exploring new ideas and approaches.',
      image: '/src/assets/images/careers-dropdown.jpg'
    },
    {
      title: 'Global Impact',
      message: 'Make a difference on projects that shape industries. Our work spans multiple sectors and geographies, offering diverse challenges and learning opportunities.',
      image: '/src/assets/images/careers-dropdown.jpg'
    },
    {
      title: 'Work-Life Balance',
      message: 'Enjoy flexible work arrangements and a culture that respects personal time. We believe sustainable performance requires balance and support our team.',
      image: '/src/assets/images/careers-dropdown.jpg'
    }
  ];

  return (
    <div>
      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-12"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Life at Walamen
            </h2>
          </div>
          
          {/* Four Cards Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 mb-12">
            {lifeAtWalamen.map((item, index) => (
              <div key={index} className="bg-white relative">
                {/* Vertical dividers for desktop */}
                {index < 3 && (
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 hidden lg:block"></div>
                )}
                {/* Vertical dividers for tablet */}
                {index === 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 md:block lg:hidden"></div>
                )}
                {/* Horizontal dividers for mobile */}
                {index === 1 && (
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-200 md:hidden"></div>
                )}
                {index === 3 && (
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-200 md:hidden"></div>
                )}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#043685] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
              Our Roles
            </p>
            <div className="w-12 h-0.5 bg-[#BE000B] mb-6"></div>
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Current Openings
            </h2>
          </div>
          <div className="space-y-0">
            <div className="bg-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 overflow-hidden rounded-lg">
                  <img 
                    src="/images/careers-dropdown.jpg"
                    alt="Cloud Architecture"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/careers-dropdown.jpg";
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Full-time</div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">Senior Cloud Architect</h3>
                  <div className="text-sm text-gray-500">New York, NY / Remote</div>
                </div>
              </div>
              <button className="text-[#BE000B] text-sm font-semibold underline hover:no-underline">View & Apply →</button>
            </div>
            
            <div className="h-px bg-gray-300"></div>
            
            <div className="bg-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 overflow-hidden rounded-lg">
                  <img 
                    src="/images/careers-dropdown.jpg"
                    alt="Software Engineering"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/careers-dropdown.jpg";
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Full-time</div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">Principal Software Engineer</h3>
                  <div className="text-sm text-gray-500">San Francisco, CA / Remote</div>
                </div>
              </div>
              <button className="text-[#BE000B] text-sm font-semibold underline hover:no-underline">View & Apply →</button>
            </div>
            
            <div className="h-px bg-gray-300"></div>
            
            <div className="bg-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 overflow-hidden rounded-lg">
                  <img 
                    src="/images/careers-dropdown.jpg"
                    alt="Strategy Consulting"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/careers-dropdown.jpg";
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Full-time</div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">Strategy Consultant</h3>
                  <div className="text-sm text-gray-500">Chicago, IL / Remote</div>
                </div>
              </div>
              <button className="text-[#BE000B] text-sm font-semibold underline hover:no-underline">View & Apply →</button>
            </div>
            
            <div className="h-px bg-gray-300"></div>
            
            <div className="bg-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 overflow-hidden rounded-lg">
                  <img 
                    src="/images/careers-dropdown.jpg"
                    alt="Data Engineering"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/careers-dropdown.jpg";
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Full-time</div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">Data Engineering Lead</h3>
                  <div className="text-sm text-gray-500">Boston, MA / Remote</div>
                </div>
              </div>
              <button className="text-[#BE000B] text-sm font-semibold underline hover:no-underline">View & Apply →</button>
            </div>
            
            <div className="h-px bg-gray-300"></div>
            
            <div className="bg-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 overflow-hidden rounded-lg">
                  <img 
                    src="/images/careers-dropdown.jpg"
                    alt="DevOps Engineering"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/careers-dropdown.jpg";
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Full-time</div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">DevOps Engineer</h3>
                  <div className="text-sm text-gray-500">Austin, TX / Remote</div>
                </div>
              </div>
              <button className="text-[#BE000B] text-sm font-semibold underline hover:no-underline">View & Apply →</button>
            </div>
            
            <div className="h-px bg-gray-300"></div>
            
            <div className="bg-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 overflow-hidden rounded-lg">
                  <img 
                    src="/images/careers-dropdown.jpg"
                    alt="AI/ML Engineering"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/careers-dropdown.jpg";
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Full-time</div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">AI/ML Engineer</h3>
                  <div className="text-sm text-gray-500">Seattle, WA / Remote</div>
                </div>
              </div>
              <button className="text-[#BE000B] text-sm font-semibold underline hover:no-underline">View & Apply →</button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Compensation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Competitive salary, performance-based bonuses, and equity participation for senior roles.
                  We believe in rewarding exceptional contribution.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Benefits</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive health coverage, retirement plans, and generous paid time off.
                  We take care of our team.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clear career progression, mentorship from senior leaders, and opportunities to develop
                  both technical and strategic capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#043685] mb-3">Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work on systems that matter, with clients that lead their industries. Your contributions
                  will be visible and meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        title="Ready to join us?"
        buttonText="View Open Positions"
        buttonLink="/careers/openings"
      />
    </div>
  );
};

export default CareersLife;
