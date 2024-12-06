import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReturnToHome = () => {
    setIsMenuOpen(false);
    navigate('/', { replace: true });
    window.scrollTo(0, 0);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={handleReturnToHome}
            className="flex items-center transition-opacity duration-200 hover:opacity-80"
          >
            <img 
              // src="/src/images/icon/Frame 6.svg"
              src="/assets/Frame 6.svg"
              alt="Laura Wu Logo" 
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {isHomePage ? (
              // Home page navigation
              ['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="relative text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base uppercase tracking-wider group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </button>
              ))
            ) : (
              // Other pages navigation
              <button
                onClick={handleReturnToHome}
                className="relative text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base uppercase tracking-wider group"
              >
                Back to Portfolio
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-2 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                // Home page navigation
                ['About', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item.toLowerCase())}
                    className="relative text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm uppercase tracking-wider py-2 text-left group pl-4"
                  >
                    {item}
                    <span className="absolute inset-y-0 left-0 w-1 bg-gray-900 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />
                  </button>
                ))
              ) : (
                // Other pages navigation
                <button
                  onClick={handleReturnToHome}
                  className="relative text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm uppercase tracking-wider py-2 text-left group pl-4"
                >
                  Back to Portfolio
                  <span className="absolute inset-y-0 left-0 w-1 bg-gray-900 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;