import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';

const AboutTeam = () => {
  const leadership = [
    {
      name: 'Michael Chen',
      role: 'Managing Partner',
      expertise: 'Systems Architecture, Cloud Infrastructure',
      image: '/src/assets/images/team-michael-chen.jpg',
      bio: 'Former VP of Engineering at Fortune 500 tech company with 20+ years building scalable systems.'
    },
    {
      name: 'Sarah Williams',
      role: 'Partner, Strategy',
      expertise: 'Digital Transformation, Technology Strategy',
      image: '/src/assets/images/team-sarah-williams.jpg',
      bio: 'Ex-McKinsey senior partner specializing in enterprise technology strategy and digital transformation.'
    },
    {
      name: 'David Kumar',
      role: 'Partner, Engineering',
      expertise: 'Software Engineering, Platform Development',
      image: '/src/assets/images/team-david-kumar.jpg',
      bio: 'Former principal engineer at leading cloud provider with expertise in distributed systems and platform architecture.'
    }
  ];

  const principals = [
    {
      name: 'Jennifer Park',
      role: 'Principal, Data & AI',
      expertise: 'Machine Learning, Data Engineering',
      image: '/src/assets/images/team-jennifer-park.jpg',
      bio: 'PhD in Machine Learning from Stanford, former AI research lead at major tech company.'
    },
    {
      name: 'Robert Martinez',
      role: 'Principal, Infrastructure',
      expertise: 'DevOps, Site Reliability Engineering',
      image: '/src/assets/images/team-robert-martinez.jpg',
      bio: 'Former SRE director at scale-up company, expert in Kubernetes and cloud-native infrastructure.'
    },
    {
      name: 'Emily Thompson',
      role: 'Principal, Advisory',
      expertise: 'Enterprise Architecture, Technology Due Diligence',
      image: '/src/assets/images/team-emily-thompson.jpg',
      bio: 'Former CTO advisor with deep experience in enterprise architecture and technology M&A due diligence.'
    }
  ];

  return (
    <div>
      {/* Leadership Team Section */}
      <SectionWrapper background="white">
        <Container>
          <div className="max-w-4xl mx-auto mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our partners bring decades of combined experience from leading technology companies,
              top-tier consultancies, and enterprise environments. We combine technical mastery with strategic
              insight to deliver transformative outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {leadership.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">{member.name}</h3>
                  <p className="text-[#BE000B] font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Principals Section */}
      <SectionWrapper background="gray">
        <Container>
          <div className="max-w-4xl mx-auto mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Principals & Experts
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our principals are recognized experts in their domains, bringing deep specialized knowledge
              and hands-on experience to solve complex challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principals.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0A0A0A] mb-1">{member.name}</h3>
                  <p className="text-[#043685] font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Extended Network Section */}
      <SectionWrapper background="white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Extended Network
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Beyond our core team, we maintain a network of specialized practitioners across domains including
              cybersecurity, regulatory compliance, industry-specific technology, and emerging platforms. This
              allows us to assemble the precise expertise required for each engagement while maintaining the
              quality and rigor that defines our work.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-[#043685] mb-2">100+</div>
                <div className="text-gray-600">Specialized Experts</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-[#043685] mb-2">15+</div>
                <div className="text-gray-600">Industry Domains</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-[#043685] mb-2">25+</div>
                <div className="text-gray-600">Technology Areas</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-[#043685] mb-2">Global</div>
                <div className="text-gray-600">Coverage</div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default AboutTeam;
