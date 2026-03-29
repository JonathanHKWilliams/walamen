import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001b46] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div className="lg:col-span-1 sm:col-span-2">
            <p className="text-gray-400 font-medium leading-tight">
              Walamen is a premier consulting firm delivering integrated engineering solutions, 
              cutting-edge technology services, and strategic business consulting to 
              transform complex challenges into competitive advantages.
            </p>
          </div>

          <div className="lg:col-span-3 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:ml-12">
            <div className="mt-0 md:mt-0">
              <h4 className="font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 font-medium">
              <li>
                <Link to="/what-we-do" className="hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/what-we-do#engineering-solutions" className="hover:text-white transition-colors">
                  Engineering Solutions
                </Link>
              </li>
              <li>
                <Link to="/what-we-do#technology-software" className="hover:text-white transition-colors">
                  Technology & Software
                </Link>
              </li>
              <li>
                <Link to="/what-we-do#strategy-consulting" className="hover:text-white transition-colors">
                  Strategy & Consulting
                </Link>
              </li>
              <li>
                <Link to="/what-we-do#integrated-engagements" className="hover:text-white transition-colors">
                  Integrated Engagements
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-0 md:mt-0">
            <h4 className="font-semibold mb-3 sm:mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400 font-medium">
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/industries#technology-saas" className="hover:text-white transition-colors">
                  Technology & SaaS
                </Link>
              </li>
              <li>
                <Link to="/industries#financial-services" className="hover:text-white transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link to="/industries#healthcare" className="hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/industries#energy-infrastructure" className="hover:text-white transition-colors">
                  Energy & Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-0 md:mt-0">
            <h4 className="font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 font-medium">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Walamen
                </Link>
              </li>
              <li>
                <Link to="/about/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-0 md:mt-0">
            <h4 className="font-semibold mb-3 sm:mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 font-medium gap-4">
          <p>&copy; 2026 Walamen. All rights reserved.</p>
          <div className="flex flex-wrap sm:flex-nowrap space-x-4 sm:space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
