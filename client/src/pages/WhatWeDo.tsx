import { Link, Outlet, useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Container from '../components/Container';

const WhatWeDo = () => {
  const location = useLocation();

  const subPages = [
    { name: 'Engineering Solutions', path: '/what-we-do/engineering' },
    { name: 'Systems Architecture', path: '/what-we-do/architecture' },
    { name: 'Technology & Software', path: '/what-we-do/technology' },
    { name: 'AI & Data Engineering', path: '/what-we-do/ai-data' },
    { name: 'Strategy & Consulting', path: '/what-we-do/strategy' },
    { name: 'Digital Transformation', path: '/what-we-do/transformation' },
  ];

  return (
    <div>
      <PageHero
        title="Integrated capabilities across engineering, technology, and strategy."
        subtitle="Designing and delivering intelligent systems for modern enterprises."
      />

      <div className="bg-white border-b border-gray-200">
        <Container>
          <nav className="flex space-x-4 sm:space-x-8 py-4 overflow-x-auto">
            {subPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className={`pb-2 border-b-2 transition-colors font-medium whitespace-nowrap text-sm sm:text-base ${
                  location.pathname === page.path
                    ? 'border-[#BE000B] text-[#043685]'
                    : 'border-transparent text-gray-600 hover:text-[#043685]'
                }`}
              >
                {page.name}
              </Link>
            ))}
          </nav>
          {/* Mobile scroll indicator */}
          <div className="sm:hidden flex justify-center mt-2">
            <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </Container>
      </div>

      <Outlet />
    </div>
  );
};

export default WhatWeDo;
