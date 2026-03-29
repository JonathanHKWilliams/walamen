import { Link, useLocation } from 'react-router-dom';

interface Breadcrumb {
  name: string;
  path: string;
  isLast?: boolean;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  secondaryTitle?: string;
}

const PageHero = ({ title, subtitle, secondaryTitle }: PageHeroProps) => {
  const location = useLocation();
  
  // Generate breadcrumb path
  const generateBreadcrumbs = (): Breadcrumb[] => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs: Breadcrumb[] = [
      { name: 'Home', path: '/' }
    ];
    
    let currentPath = '';
    pathnames.forEach((path, index) => {
      currentPath += `/${path}`;
      const isLast = index === pathnames.length - 1;
      
      // Convert path to readable name
      let name = path.charAt(0).toUpperCase() + path.slice(1);
      if (path.includes('-')) {
        name = path.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      }
      
      breadcrumbs.push({
        name,
        path: currentPath,
        isLast
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div
      className="relative pt-24 pb-16 bg-[#043685] flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Breadcrumbs */}
        <nav className="mb-6 mt-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-300">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.path} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
                {breadcrumb.isLast ? (
                  <span className="text-white font-medium">{breadcrumb.name}</span>
                ) : (
                  <Link 
                    to={breadcrumb.path}
                    className="hover:text-white transition-colors"
                  >
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            {secondaryTitle && (
              <h2 
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: 'Domine, serif', lineHeight: '1.2' }}
              >
                {secondaryTitle}
              </h2>
            )}
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Domine, serif', lineHeight: '1.1' }}
            >
              {title}
            </h1>
            <div className="w-12 h-0.5 bg-white mb-6"></div>
          </div>
          {subtitle && (
            <div className="lg:text-right text-left">
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
