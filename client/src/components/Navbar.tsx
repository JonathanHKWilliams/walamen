import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [isCareersDropdownOpen, setIsCareersDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<number | null>(null);
  const [industriesDropdownTimeout, setIndustriesDropdownTimeout] = useState<number | null>(null);
  const [careersDropdownTimeout, setCareersDropdownTimeout] = useState<number | null>(null);
  const [aboutDropdownTimeout, setAboutDropdownTimeout] = useState<number | null>(null);
  const [isMobileWhatWeDoOpen, setIsMobileWhatWeDoOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileCareersOpen, setIsMobileCareersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
    setIsCareersDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  }, [location]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleIndustriesDropdownEnter = () => {
    if (industriesDropdownTimeout) {
      clearTimeout(industriesDropdownTimeout);
    }
    setIsIndustriesDropdownOpen(true);
  };

  const handleIndustriesDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsIndustriesDropdownOpen(false);
    }, 150);
    setIndustriesDropdownTimeout(timeout);
  };

  const handleCareersDropdownEnter = () => {
    if (careersDropdownTimeout) {
      clearTimeout(careersDropdownTimeout);
    }
    setIsCareersDropdownOpen(true);
  };

  const handleCareersDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsCareersDropdownOpen(false);
    }, 150);
    setCareersDropdownTimeout(timeout);
  };

  const handleAboutDropdownEnter = () => {
    if (aboutDropdownTimeout) {
      clearTimeout(aboutDropdownTimeout);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleAboutDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 150);
    setAboutDropdownTimeout(timeout);
  };

  const dropdownItems = [
    {
      category: 'Core Services',
      items: [
        { name: 'Engineering Solutions', path: '/what-we-do/engineering' },
        { name: 'Systems Architecture', path: '/what-we-do/architecture' },
        { name: 'Technology & Software', path: '/what-we-do/technology' },
        { name: 'AI & Data Engineering', path: '/what-we-do/ai-data' },
      ]
    },
    {
      category: 'Strategic Services',
      items: [
        { name: 'Strategy & Management Consulting', path: '/what-we-do/strategy' },
        { name: 'Digital Transformation', path: '/what-we-do/transformation' },
      ]
    }
  ];

  const industriesItems = [
    { name: 'Technology & SaaS', path: '/industries/technology-saas' },
    { name: 'Financial Services', path: '/industries/financial-services' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Energy & Infrastructure', path: '/industries/energy-infrastructure' },
    { name: 'Professional Services', path: '/industries/professional-services' },
    { name: 'Consumer & Retail', path: '/industries/consumer-retail' },
  ];

  const careersItems = [
    { name: 'Life at Walamen', path: '/careers/life' },
    { name: 'Current Openings', path: '/careers/openings' },
    { name: 'Students & Internships', path: '/careers/internships' },
  ];

  const aboutItems = [
    { name: 'Firm Overview', path: '/about/overview' },
    { name: 'Our Team', path: '/about/team' },
    { name: 'Vision & Values', path: '/about/vision-values' },
  ];

  const navLinks = [
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Industries', path: '/industries' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-24">
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <img 
              src="/src/assets/images/logo.png" 
              alt="Walamen" 
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              onError={(e) => {
                // Fallback to text logo if image not found
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div className="text-3xl font-bold tracking-tight" style={{display: 'none'}}>
              <span className="text-[#043685]">WALA</span>
              <span className="text-[#BE000B]">MEN</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center justify-end space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.name === 'What We Do' ? (
                  <div
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    ref={dropdownRef}
                  >
                    <button
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-200 relative group flex items-center gap-1 ${
                        location.pathname.startsWith('/what-we-do')
                          ? 'text-[#043685]'
                          : 'text-gray-700 hover:text-[#043685]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="fixed top-24 left-0 right-0 w-screen bg-white border-b border-gray-200 shadow-xl z-50">
                        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                          <div className="flex py-4">
                          {/* Left section - About Walamen */}
                          <div className="w-2/5 bg-gray-50 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-40">
                              <img 
                                src="/src/assets/images/what-we-do-dropdown.jpg"
                                alt="Engineering and Technology"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback to placeholder if image not found
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/src/assets/images/what-we-do-dropdown.jpg";
                                }}
                              />
                            </div>
                            <div className="pl-44 pr-4 py-4">
                              <h4 className="text-lg font-semibold text-[#043685] mb-3">
                                What We Do
                              </h4>
                              <p className="text-sm font-bold text-gray-600 leading-relaxed mb-4">
                                Walamen delivers integrated solutions at intersection of engineering, technology, and strategy. We transform complex challenges into competitive advantages through innovative approaches and deep expertise.
                              </p>
                              <Link
                                to="/what-we-do"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#BE000B] hover:text-[#9B0009] transition-colors"
                              >
                                Explore all services
                                <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                          
                          {/* Right section - Service categories */}
                          <div className="w-3/5 p-4">
                            <div className="grid grid-cols-2 gap-4">
                              {dropdownItems.map((category) => (
                                <div key={category.category}>
                                  <h4 className="text-xs font-bold text-[#BE000B] uppercase tracking-wider mb-3">
                                    {category.category}
                                  </h4>
                                  <div className="space-y-2">
                                    {category.items.map((item) => (
                                      <Link
                                        key={item.path}
                                        to={item.path}
                                        className="flex items-center justify-between group py-2 px-3 -mx-3 rounded-md hover:bg-gray-50 transition-colors"
                                      >
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#043685]">
                                          {item.name}
                                        </span>
                                        <ArrowRight size={14} className="text-gray-400 group-hover:text-[#BE000B] transition-colors" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : link.name === 'Industries' ? (
                  <div
                    className="relative"
                    onMouseEnter={handleIndustriesDropdownEnter}
                    onMouseLeave={handleIndustriesDropdownLeave}
                  >
                    <button
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-200 relative group flex items-center gap-1 ${
                        location.pathname.startsWith('/industries')
                          ? 'text-[#043685]'
                          : 'text-gray-700 hover:text-[#043685]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          isIndustriesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {isIndustriesDropdownOpen && (
                      <div className="fixed top-24 left-0 right-0 w-screen bg-white border-b border-gray-200 shadow-xl z-50">
                        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                          <div className="flex py-4">
                          {/* Left section - About Industries */}
                          <div className="w-2/5 bg-gray-50 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-40">
                              <img 
                                src="/src/assets/images/industries-dropdown.jpg"
                                alt="Business Industries"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback to placeholder if image not found
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/src/assets/images/industries-dropdown.jpg";
                                }}
                              />
                            </div>
                            <div className="pl-44 pr-4 py-4">
                              <h4 className="text-lg font-semibold text-[#043685] mb-3">
                                Industries
                              </h4>
                              <p className="text-sm font-bold text-gray-600 leading-relaxed mb-4">
                                We serve diverse industries with specialized expertise and tailored solutions. Our deep sector knowledge ensures we understand your unique challenges and opportunities.
                              </p>
                              <Link
                                to="/industries"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#BE000B] hover:text-[#9B0009] transition-colors"
                              >
                                Explore all industries
                                <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                          
                          {/* Right section - Industry list */}
                          <div className="w-3/5 p-4">
                            <div className="grid grid-cols-2 gap-4">
                              {industriesItems.map((industry) => (
                                <Link
                                  key={industry.path}
                                  to={industry.path}
                                  className="flex items-center justify-between group py-2 px-3 -mx-3 rounded-md hover:bg-gray-50 transition-colors"
                                >
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#043685]">
                                    {industry.name}
                                  </span>
                                  <ArrowRight size={14} className="text-gray-400 group-hover:text-[#BE000B] transition-colors" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : link.name === 'About' ? (
                  <div
                    className="relative"
                    onMouseEnter={handleAboutDropdownEnter}
                    onMouseLeave={handleAboutDropdownLeave}
                  >
                    <button
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-200 relative group flex items-center gap-1 ${
                        location.pathname.startsWith('/about')
                          ? 'text-[#043685]'
                          : 'text-gray-700 hover:text-[#043685]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          isAboutDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {isAboutDropdownOpen && (
                      <div className="fixed top-24 left-0 right-0 w-screen bg-white border-b border-gray-200 shadow-xl z-50">
                        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                          <div className="flex py-4">
                          {/* Left section - About Walamen */}
                          <div className="w-2/5 bg-gray-50 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-40">
                              <img 
                                src="/src/assets/images/about-dropdown.jpg"
                                alt="About Walamen"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback to placeholder if image not found
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/src/assets/images/about-dropdown.jpg";
                                }}
                              />
                            </div>
                            <div className="pl-44 pr-4 py-4">
                              <h4 className="text-lg font-semibold text-[#043685] mb-3">
                                About Walamen
                              </h4>
                              <p className="text-sm font-bold text-gray-600 leading-relaxed mb-4">
                                Learn about our story, meet our team, and discover the values that drive everything we do. We are committed to excellence and innovation in all that we undertake.
                              </p>
                              <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#BE000B] hover:text-[#9B0009] transition-colors"
                              >
                                Learn more about us
                                <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                          
                          {/* Right section - About options */}
                          <div className="w-3/5 p-4">
                            <div className="space-y-2">
                              {aboutItems.map((about) => (
                                <Link
                                  key={about.path}
                                  to={about.path}
                                  className="flex items-center justify-between group py-2 px-3 -mx-3 rounded-md hover:bg-gray-50 transition-colors"
                                >
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#043685]">
                                    {about.name}
                                  </span>
                                  <ArrowRight size={14} className="text-gray-400 group-hover:text-[#BE000B] transition-colors" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : link.name === 'Careers' ? (
                  <div
                    className="relative"
                    onMouseEnter={handleCareersDropdownEnter}
                    onMouseLeave={handleCareersDropdownLeave}
                  >
                    <button
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-200 relative group flex items-center gap-1 ${
                        location.pathname.startsWith('/careers')
                          ? 'text-[#043685]'
                          : 'text-gray-700 hover:text-[#043685]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          isCareersDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {isCareersDropdownOpen && (
                      <div className="fixed top-24 left-0 right-0 w-screen bg-white border-b border-gray-200 shadow-xl z-50">
                        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                          <div className="flex py-4">
                          {/* Left section - About Careers */}
                          <div className="w-2/5 bg-gray-50 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-40">
                              <img 
                                src="/src/assets/images/careers-dropdown.jpg"
                                alt="Careers at Walamen"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback to placeholder if image not found
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/src/assets/images/careers-dropdown.jpg";
                                }}
                              />
                            </div>
                            <div className="pl-44 pr-4 py-4">
                              <h4 className="text-lg font-semibold text-[#043685] mb-3">
                                Careers
                              </h4>
                              <p className="text-sm font-bold text-gray-600 leading-relaxed mb-4">
                                Join our team of talented professionals and help shape the future of technology and business. We offer challenging work, growth opportunities, and a collaborative environment.
                              </p>
                              <Link
                                to="/careers"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#BE000B] hover:text-[#9B0009] transition-colors"
                              >
                                Explore all opportunities
                                <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                          
                          {/* Right section - Career options */}
                          <div className="w-3/5 p-4">
                            <div className="space-y-2">
                              {careersItems.map((career) => (
                                <Link
                                  key={career.path}
                                  to={career.path}
                                  className="flex items-center justify-between group py-2 px-3 -mx-3 rounded-md hover:bg-gray-50 transition-colors"
                                >
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#043685]">
                                    {career.name}
                                  </span>
                                  <ArrowRight size={14} className="text-gray-400 group-hover:text-[#BE000B] transition-colors" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-200 relative group ${
                      isActivePath(link.path)
                        ? 'text-[#043685]'
                        : 'text-gray-700 hover:text-[#043685]'
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#BE000B] transform origin-left transition-transform duration-200 ${
                        isActivePath(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="group flex items-center gap-2 bg-[#BE000B] text-white px-6 py-3 font-semibold text-sm hover:bg-[#9B0009] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform" />
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#043685] p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div className={`lg:hidden fixed inset-0 z-50 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div 
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link 
                to="/" 
                className="flex items-center group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img 
                  src="/src/assets/images/logo.png" 
                  alt="Walamen" 
                  className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="text-2xl font-bold tracking-tight" style={{display: 'none'}}>
                  <span className="text-[#043685]">WALA</span>
                  <span className="text-[#BE000B]">MEN</span>
                </div>
              </Link>
              
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Navigation Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.name === 'What We Do' ? (
                    <div>
                      <button
                        onClick={() => setIsMobileWhatWeDoOpen(!isMobileWhatWeDoOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-all duration-200 rounded-md ${
                          location.pathname.startsWith('/what-we-do')
                            ? 'bg-[#043685] text-white'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-[#043685]'
                        }`}
                      >
                        {link.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            isMobileWhatWeDoOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Collapsible Content */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isMobileWhatWeDoOpen ? 'max-h-96' : 'max-h-0'
                      }`}>
                        <div className="ml-4 mt-2 space-y-1">
                          {dropdownItems.map((category) => (
                            <div key={category.category} className="py-2">
                              <h5 className="text-xs font-bold text-[#BE000B] uppercase tracking-wider mb-2 px-4">
                                {category.category}
                              </h5>
                              {category.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-[#043685] hover:bg-gray-50 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : link.name === 'Industries' ? (
                    <div>
                      <button
                        onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-all duration-200 rounded-md ${
                          location.pathname.startsWith('/industries')
                            ? 'bg-[#043685] text-white'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-[#043685]'
                        }`}
                      >
                        {link.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            isMobileIndustriesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Collapsible Content */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isMobileIndustriesOpen ? 'max-h-96' : 'max-h-0'
                      }`}>
                        <div className="ml-4 mt-2 space-y-1">
                          {industriesItems.map((industry) => (
                            <Link
                              key={industry.path}
                              to={industry.path}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[#043685] hover:bg-gray-50 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {industry.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : link.name === 'About' ? (
                    <div>
                      <button
                        onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-all duration-200 rounded-md ${
                          location.pathname.startsWith('/about')
                            ? 'bg-[#043685] text-white'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-[#043685]'
                        }`}
                      >
                        {link.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            isMobileAboutOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Collapsible Content */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isMobileAboutOpen ? 'max-h-96' : 'max-h-0'
                      }`}>
                        <div className="ml-4 mt-2 space-y-1">
                          {aboutItems.map((about) => (
                            <Link
                              key={about.path}
                              to={about.path}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[#043685] hover:bg-gray-50 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {about.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : link.name === 'Careers' ? (
                    <div>
                      <button
                        onClick={() => setIsMobileCareersOpen(!isMobileCareersOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-all duration-200 rounded-md ${
                          location.pathname.startsWith('/careers')
                            ? 'bg-[#043685] text-white'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-[#043685]'
                        }`}
                      >
                        {link.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            isMobileCareersOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Collapsible Content */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isMobileCareersOpen ? 'max-h-96' : 'max-h-0'
                      }`}>
                        <div className="ml-4 mt-2 space-y-1">
                          {careersItems.map((career) => (
                            <Link
                              key={career.path}
                              to={career.path}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[#043685] hover:bg-gray-50 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {career.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 text-base font-semibold transition-all duration-200 rounded-md ${
                        isActivePath(link.path)
                          ? 'bg-[#043685] text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-[#043685]'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-[#BE000B] text-white px-6 py-4 font-semibold text-sm hover:bg-[#9B0009] transition-all duration-200 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={16} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
