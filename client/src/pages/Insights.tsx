import PageHero from '../components/PageHero';
import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';

const Insights = () => {
  const articles = [
    {
      title: 'Technical Debt: The Hidden Cost of Shortcuts',
      category: 'Engineering',
      date: 'March 15, 2024',
      excerpt:
        'Technical debt is not just a development problem—it\'s a strategic liability. We examine how accumulated shortcuts and workarounds compound over time, degrading system performance and constraining business agility.',
      image: '/src/assets/images/insight-cloud-transformation.jpg',
    },
    {
      title: 'Cloud Migration: Beyond Lift and Shift',
      category: 'Infrastructure',
      date: 'March 8, 2024',
      excerpt:
        'Moving to the cloud without rearchitecting systems is a missed opportunity. We explore strategies for cloud-native transformation that unlock scalability, resilience, and operational efficiency.',
      image: '/src/assets/images/insight-ai-revolution.jpg',
    },
    {
      title: 'AI Integration in Production Systems',
      category: 'Technology',
      date: 'February 28, 2024',
      excerpt:
        'Deploying machine learning models at scale requires more than data science expertise. We outline the engineering challenges of productionizing AI and strategies for reliable, maintainable ML systems.',
      image: '/src/assets/images/insight-cybersecurity.jpg',
    },
    {
      title: 'Modernizing Legacy Banking Infrastructure',
      category: 'Industry',
      date: 'February 20, 2024',
      excerpt:
        'Financial institutions face unique challenges when modernizing core systems. We share lessons from successful transformations that balanced innovation with regulatory compliance and operational continuity.',
      image: '/src/assets/images/work-enterprise-platform.jpg',
    },
    {
      title: 'Platform Engineering: Building Internal Developer Platforms',
      category: 'Engineering',
      date: 'February 12, 2024',
      excerpt:
        'Internal developer platforms can dramatically improve engineering productivity. We examine the organizational, technical, and cultural factors that determine platform success.',
      image: '/src/assets/images/work-ai-analytics.jpg',
    },
    {
      title: 'Data Mesh: When and Why to Decentralize',
      category: 'Data',
      date: 'February 5, 2024',
      excerpt:
        'Data mesh architectures promise better scalability and domain ownership, but they introduce new complexity. We analyze when centralized vs. decentralized data strategies make sense.',
      image: '/src/assets/images/work-cloud-migration.jpg',
    },
  ];

  return (
    <div>
      <PageHero
        title="Perspectives on technology, strategy, and enterprise transformation."
        subtitle="Thought leadership and insights from our expert team."
      />

      <SectionWrapper background="white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.title}
                className="cursor-pointer group"
              >
                <div className="overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-sm text-[#BE000B] font-semibold mb-2 uppercase tracking-wider">
                  {article.category}
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2 group-hover:text-[#043685] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{article.excerpt}</p>
                <span className="text-[#BE000B] font-semibold group-hover:underline">
                  Read More →
                </span>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default Insights;
