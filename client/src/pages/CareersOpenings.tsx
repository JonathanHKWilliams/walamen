import SectionWrapper from '../components/SectionWrapper';
import { MapPin, Clock } from 'lucide-react';

const CareersOpenings = () => {
  const openings = [
    {
      title: 'Senior Cloud Architect',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description:
        'Lead the design and implementation of cloud-native architectures for enterprise clients. Requires deep experience with AWS/Azure/GCP, infrastructure as code, and distributed systems.',
    },
    {
      title: 'Principal Software Engineer',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description:
        'Build mission-critical software systems across the full stack. Requires expertise in modern programming languages, system design, and leadership of technical initiatives.',
    },
    {
      title: 'Strategy Consultant',
      location: 'Chicago, IL / Remote',
      type: 'Full-time',
      description:
        'Guide technology strategy and digital transformation for Fortune 500 clients. Requires consulting experience, business acumen, and technical literacy.',
    },
    {
      title: 'Data Engineering Lead',
      location: 'Boston, MA / Remote',
      type: 'Full-time',
      description:
        'Design and build data platforms that enable analytics and machine learning at scale. Requires experience with modern data stacks, streaming systems, and cloud data warehouses.',
    },
    {
      title: 'DevOps Engineer',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      description:
        'Implement CI/CD pipelines, infrastructure automation, and monitoring systems. Requires expertise in containerization, Kubernetes, and observability tools.',
    },
    {
      title: 'AI/ML Engineer',
      location: 'Seattle, WA / Remote',
      type: 'Full-time',
      description:
        'Develop and deploy machine learning systems for production environments. Requires experience with ML frameworks, model deployment, and MLOps practices.',
    },
  ];

  return (
    <div>
      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're always looking for exceptional talent. If you don't see a role that matches your background,
              we encourage you to reach out. We evaluate candidates based on capability and potential, not just
              job titles.
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.title}
                className="border border-gray-200 p-8 hover:border-[#043685] transition-colors cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">{job.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{job.description}</p>
                <button className="text-[#BE000B] font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Application Process
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our hiring process is rigorous but respectful. We evaluate technical capability, strategic thinking,
              and cultural alignment. Expect multiple rounds including technical assessments, case discussions, and
              conversations with team members. We move quickly for candidates who demonstrate excellence.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CareersOpenings;
