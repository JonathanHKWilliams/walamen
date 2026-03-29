import { Link, Outlet, useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Container from '../components/Container';

const About = () => {
  const location = useLocation();

  const subPages = [
    { name: 'Overview', path: '/about/overview' },
    { name: 'Team', path: '/about/team' },
    { name: 'Vision & Values', path: '/about/vision-values' },
  ];

  return (
    <div>
      <PageHero
        title="Engineering the future of enterprise technology."
        subtitle="Specialized consultancy at the intersection of engineering, technology, and strategy."
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

export default About;
