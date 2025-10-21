
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Platform', path: '/platform' },
  { name: 'Features', path: '/features' },
  { name: 'Partners', path: '/partners' },
  { name: 'Customers', path: '/customers' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const activeLinkClass = "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600 font-semibold";
  const inactiveLinkClass = "text-gray-600 hover:text-gray-900 transition-colors";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Robo<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">Desk</span>
            </h1>
          </NavLink>
          <nav className="hidden lg:flex lg:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:block">
            <NavLink to="/free-pilot" className="inline-block bg-gradient-to-r from-orange-500 to-violet-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
              Free Pilot
            </NavLink>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClass : 'text-gray-600 hover:bg-gray-50'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
             <NavLink to="/free-pilot" className="block w-full text-left mt-4 px-3 py-3 rounded-md bg-gradient-to-r from-orange-500 to-violet-600 text-white font-semibold shadow-lg">
              Free Pilot
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
