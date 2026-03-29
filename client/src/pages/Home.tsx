import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, Shield, Lightbulb, Search, Layers, TrendingUp } from 'lucide-react';
import Container from '../components/Container';
import SectionWrapper from '../components/SectionWrapper';
import HeadingBlock from '../components/HeadingBlock';
import CTASection from '../components/CTASection';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    {
      src: "/images/hero-carousel-1.jpg",
      alt: "Engineering and technology solutions"
    },
    {
      src: "/images/hero-carousel-2.jpg",
      alt: "Innovative technology solutions"
    },
    {
      src: "/images/hero-carousel-3.jpg",
      alt: "Strategic business consulting"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const services = [
    {
      category: 'Engineering Solutions',
      icon: Cpu,
      items: [
        {
          title: 'Systems Engineering',
          description: 'Infrastructure design, and technical architecture for organizations that need precision thinking at every level of complexity. We deliver robust, scalable solutions that form the foundation of enterprise technology excellence.',
        },
      ],
    },
    {
      category: 'Technology & AI',
      icon: Lightbulb,
      items: [
        {
          title: 'Artificial Intelligence',
          description: 'Deploy intelligent systems for predictive insights and automated decision-making. We leverage cutting-edge machine learning and AI technologies to transform business operations and create competitive advantages.',
        },
      ],
    },
    {
      category: 'Strategy & Advisory',
      icon: Shield,
      items: [
        {
          title: 'Strategic Consulting',
          description: 'Guide organizations through technology evolution and digital transformation. Our strategic advisory services help align technology investments with business objectives for sustainable growth and market leadership.',
        },
      ],
    },
  ];

  const industries = [
    {
      title: 'Technology & SaaS',
      image: '/src/assets/images/what-we-do-dropdown.jpg',
    },
    {
      title: 'Financial Services',
      image: '/src/assets/images/industries-dropdown.jpg',
    },
    {
      title: 'Healthcare',
      image: '/src/assets/images/work-enterprise-platform.jpg',
    },
    {
      title: 'Energy & Infrastructure',
      image: '/src/assets/images/work-cloud-migration.jpg',
    },
    {
      title: 'Professional Services',
      image: '/src/assets/images/work-ai-analytics.jpg',
    },
    {
      title: 'Consumer & Retail',
      image: '/src/assets/images/careers-dropdown.jpg',
    },
  ];

  const processSteps = [
    {
      icon: Search,
      number: '01',
      title: 'Discover',
      description: 'Deep analysis of systems, challenges, and opportunities.',
    },
    {
      icon: Cpu,
      number: '02',
      title: 'Architect',
      description: 'Design resilient, scalable solutions aligned to business goals.',
    },
    {
      icon: Layers,
      number: '03',
      title: 'Build',
      description: 'Execute with precision, quality, and technical excellence.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Scale',
      description: 'Optimize, evolve, and drive sustained performance.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="min-h-[80vh] flex items-center bg-white relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 lg:pr-8">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.1' }}
              >
                Engineering.
                <br />
                <span className="text-[#000000]">Technology & Strategy.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Designing and delivering intelligent systems for modern enterprises. 
                We transform complex challenges into strategic advantages through 
                innovative engineering solutions and cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-[#BE000B] text-white px-6 py-3 text-base font-semibold hover:bg-[#9B0009] transition-all duration-200 text-center shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/what-we-do"
                  className="inline-flex items-center justify-center gap-2 text-[#043685] px-6 py-3 text-base font-semibold hover:text-[#BE000B] transition-all duration-200 text-center group w-full sm:w-auto"
                >
                  View Capabilities
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            {/* Right side - Image carousel */}
            <div className="order-1 lg:order-2 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2 lg:pl-8">
              <div className="relative w-full h-64 sm:h-80 lg:h-full">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-t-2xl lg:rounded-none"
                      style={{
                        objectPosition: 'left center',
                        imageRendering: '-webkit-optimize-contrast',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden' as any
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/src/assets/images/default-image.jpg";
                      }}
                    />
                  </div>
                ))}
                
                {/* Carousel controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 lg:opacity-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 lg:opacity-100"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 lg:opacity-100">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#043685] py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 text-center">
            <div className="text-white border-r border-white/20 pr-2">
              <div className="text-3xl md:text-4xl font-bold mb-2">3</div>
              <div className="text-sm md:text-base opacity-90">Core Disciplines</div>
            </div>
            <div className="text-white border-r border-white/20 px-2">
              <div className="text-3xl md:text-4xl font-bold mb-2">6+</div>
              <div className="text-sm md:text-base opacity-90">Industries</div>
            </div>
            <div className="text-white border-r border-white/20 px-2">
              <div className="text-3xl md:text-4xl font-bold mb-2">1</div>
              <div className="text-sm md:text-base opacity-90">Integrated Team</div>
            </div>
            <div className="text-white pl-2">
              <div className="text-3xl md:text-4xl font-bold mb-2">2026</div>
              <div className="text-sm md:text-base opacity-90">Founded</div>
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper background="gray" className="py-8 sm:py-12 lg:py-20 xl:py-40">
        <Container>
          <div className="text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
              What We Do
            </p>
            <div className="w-12 h-0.5 bg-[#BE000B] mb-6"></div>
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Three disciplines. One firm.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-3xl">
              Walamen is built around the belief that the most complex challenges require engineering discipline, strategic intelligence, and technology fluency — working together, not in silos.
            </p>
          </div>

          {/* Service categories - side by side below description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0">
            {services.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={category.category} className="bg-white p-4 sm:p-6 lg:p-8 h-full min-h-80 sm:min-h-96 relative">
                  {index < services.length - 1 && (
                    <div className="absolute right-0 top-0 h-full w-px bg-gray-200 hidden lg:block"></div>
                  )}
                  <div className="flex flex-col h-full mt-4 sm:mt-6 lg:mt-8">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                        <Icon size={20} className="text-[#043685] sm:hidden" />
                        <Icon size={24} className="text-[#043685] hidden sm:block" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#043685]">
                        {category.category}
                      </h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4 flex-grow">
                      {category.items.map((service, itemIndex) => (
                        <div key={service.title}>
                          {itemIndex > 0 && <div className="border-t border-gray-200 pt-3 sm:pt-4 mt-3 sm:mt-4"></div>}
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div className="w-2 h-2 bg-transparent rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                            <div>
                              <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      {/* Work Section */}
      <SectionWrapper background="gray" className="py-8 sm:py-12 lg:py-20">
        <Container>
          <div className="text-left mb-8 sm:mb-12">
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Our Work
            </p>
            <div className="w-12 h-0.5 bg-[#BE000B] mb-6"></div>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Transforming ideas into reality.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl">
              We partner with leading organizations to solve their most complex challenges, delivering innovative solutions that drive measurable business impact and sustainable growth.
            </p>
          </div>

          {/* Work Cards - 1 big, 2 small stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Big Card */}
            <div className="lg:col-span-3 bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/images/work-enterprise-platform.jpg"
                  alt="Enterprise platform transformation"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Core Banking Platform Re-Architecture for Regional Bank
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Walamen led the end-to-end technical architecture and implementation strategy for a regional bank's migration from legacy mainframe to a modern, cloud-native core banking system — reducing operational risk and cutting processing time by 68%.
                </p>
                <div className="border-t border-gray-200 pt-4 flex justify-end">
                  <Link
                    to="/work/banking-platform"
                    className="inline-flex items-center gap-2 text-[#043685] font-semibold hover:text-[#BE000B] transition-colors group underline"
                  >
                    View Work
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Small Cards Container */}
            <div className="lg:col-span-2 space-y-6">
              {/* Small Card 1 */}
              <div className="bg-white overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="/images/work-ai-analytics.jpg"
                    alt="AI-powered analytics dashboard"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Patient Operations Platform, Southeast Hospital System
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Strategy through deployment — we redesigned the patient intake process and built the platform that runs it.
                  </p>
                  <div className="border-t border-gray-200 pt-3 flex justify-end">
                    <Link
                      to="/work/analytics-engine"
                      className="inline-flex items-center gap-2 text-[#043685] font-semibold hover:text-[#BE000B] transition-colors group underline"
                    >
                      View Work
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Small Card 2 */}
              <div className="bg-white overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="/images/work-cloud-migration.jpg"
                    alt="Cloud infrastructure migration"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Smart Grid Readiness Assessment & Roadmap
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    Engineering assessment and 5-year modernization roadmap for a mid-Atlantic utility preparing for distributed energy integration.
                  </p>
                  <div className="border-t border-gray-200 pt-3 flex justify-end">
                    <Link
                      to="/work/cloud-migration"
                      className="inline-flex items-center gap-2 text-[#043685] font-semibold hover:text-[#BE000B] transition-colors group underline"
                    >
                      View Work
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper background="white" className="py-8 sm:py-12 lg:py-20">
        <Container>
          <HeadingBlock
            title="How We Work"
            subtitle="A disciplined approach to solving complex problems."
            label="Our Process"
          />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === processSteps.length - 1;
              
              return (
                <div key={step.title} className="text-center lg:text-left relative">
                  {/* Mobile Layout - Steps and Icon on Left */}
                  <div className="lg:hidden flex items-start gap-4 mb-6">
                    {/* Step Number and Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#043685] text-white flex items-center justify-center shadow-lg">
                        <Icon size={24} />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#BE000B] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content - Title above, Description below */}
                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Mobile Divider - only show if not last item */}
                  {!isLast && (
                    <div className="lg:hidden border-b border-gray-200 mb-6"></div>
                  )}
                  
                  {/* Desktop Layout - Original */}
                  <div className="hidden lg:block">
                    {/* Step Number and Icon */}
                    <div className="flex flex-col items-start mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-[#043685] text-white flex items-center justify-center shadow-lg">
                          <Icon size={32} />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#BE000B] text-white text-xs font-bold px-3 py-1 rounded-full">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="pr-6">
                      <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Divider - only show if not last item */}
                  {!isLast && (
                    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper background="gray" className="py-8 sm:py-12 lg:py-20 xl:py-40">
        <Container>
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
            >
              Our Expertise
            </h2>
            <div className="w-16 h-0.5 bg-[#BE000B] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Deep expertise across sectors driving modern economies. We bring specialized knowledge and tailored solutions to help organizations navigate complex challenges and drive transformation.
            </p>
          </div>
          
          {/* Expertise Cards - Side by Side */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div key={industry.title} className="text-center">
                <div className="w-full h-20 mb-3">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#0A0A0A] leading-tight">{industry.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Why Choose Walamen Section */}
      <SectionWrapper background="blue" className="py-8 sm:py-12 lg:py-20 bg-[#02183c]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title and CTA */}
            <div className="text-left">
              <h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Built to solve the
                <br />
                problems others
                <br />
                can't frame.
              </h2>
              <div className="w-16 h-0.5 bg-white mb-8"></div>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                Most firms make you choose between the strategist and the engineer. Walamen was founded on the belief that the most durable solutions come from practitioners who think in systems and build in reality — not one or the other.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#BE000B] text-white px-6 py-3 text-base font-semibold hover:bg-[#9B0009] transition-all duration-200 text-center shadow-lg hover:shadow-xl"
              >
                About Walamen
              </Link>
            </div>
            
            {/* Right side - Three cards vertically stacked */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-white border-opacity-20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#043685]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Successfully delivered over 200+ projects across various industries with measurable results and client satisfaction.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 pb-6 border-b border-white border-opacity-20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#043685]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our team consists of industry experts with decades of experience in engineering, technology, and strategic consulting.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#043685]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Client-Centric Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We prioritize your business goals and work closely with you to ensure solutions that drive real value and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Insights Section */}
      <SectionWrapper background="white" className="py-8 sm:py-12 lg:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12 gap-4">
            <div className="text-left">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                Latest Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Explore our latest thinking on technology trends, industry challenges, and strategic solutions that drive business transformation.
              </p>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-[#043685] px-6 py-3 font-semibold hover:text-[#032770] transition-colors underline whitespace-nowrap"
            >
              View All Insights
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-white rounded-lg overflow-hidden transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/images/insight-cloud-transformation.jpg"
                  alt="Cloud transformation strategies"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/hero-carousel-1.jpg";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time>March 15, 2026</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 hover:underline cursor-pointer">
                  Cloud Transformation: A Strategic Roadmap for Enterprise Success
                </h3>
                <Link
                  to="/insights/cloud-transformation-strategy"
                  className="inline-flex items-center gap-2 text-[#BE000B] font-semibold hover:text-[#9B0009] transition-colors"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-lg overflow-hidden transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/images/insight-ai-revolution.jpg"
                  alt="AI and machine learning in business"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/hero-carousel-2.jpg";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time>March 10, 2026</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 hover:underline cursor-pointer">
                  The AI Revolution: Transforming Business Operations with Intelligent Systems
                </h3>
                <Link
                  to="/insights/ai-revolution-business"
                  className="inline-flex items-center gap-2 text-[#BE000B] font-semibold hover:text-[#9B0009] transition-colors"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-lg overflow-hidden transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/images/insight-cybersecurity.jpg"
                  alt="Cybersecurity best practices"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/hero-carousel-3.jpg";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time>March 5, 2026</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 hover:underline cursor-pointer">
                  Cybersecurity in the Digital Age: Protecting Your Business Assets
                </h3>
                <Link
                  to="/insights/cybersecurity-digital-age"
                  className="inline-flex items-center gap-2 text-[#BE000B] font-semibold hover:text-[#9B0009] transition-colors"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default Home;
