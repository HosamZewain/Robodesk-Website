import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

type Language = 'en' | 'ar';

const navLinks: { [key in Language]: { name: string; path: string }[] } = {
  en: [
    { name: 'Home', path: '#home' },
    { name: 'Platform', path: '#platform' },
    { name: 'Features', path: '#features' },
    { name: 'Customers', path: '#customers' },
    { name: 'Partners', path: '#partners' },
    { name: 'Numbers', path: '#numbers' },
    { name: 'Channels', path: '#channels' },
    { name: 'Contact', path: '#contact' },
  ],
  ar: [
    { name: 'الرئيسية', path: '#home' },
    { name: 'المنصة', path: '#platform' },
    { name: 'المميزات', path: '#features' },
    { name: 'العملاء', path: '#customers' },
    { name: 'الشركاء', path: '#partners' },
    { name: 'بالأرقام', path: '#numbers' },
    { name: 'القنوات', path: '#channels' },
    { name: 'اتصل بنا', path: '#contact' },
  ]
};

interface HeaderProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const currentNavLinks = navLinks[language];
  const isRtl = language === 'ar';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = currentNavLinks.map(link => document.getElementById(link.path.substring(1))).filter(Boolean);
      const scrollY = window.scrollY;
      let currentSectionId = '';
      for (const section of sections) {
        if (section) {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) currentSectionId = section.id;
        }
      }
      if (scrollY < 200) currentSectionId = 'home';
      setActiveSection(currentSectionId);
    };
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [currentNavLinks]);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close mobile menu if open
      }
    }
  };

  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');

  const activeLinkClass = "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600 font-semibold";
  const inactiveLinkClass = "text-gray-600 hover:text-gray-900 transition-colors";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <a href="#home" className="flex-shrink-0" onClick={handleLinkClick}>
            <h1 className="text-2xl font-bold text-gray-900">
              Robo<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">Desk</span>
            </h1>
          </a>
          <nav className="hidden lg:flex lg:space-x-8">
            {currentNavLinks.map((link) => (
              <a key={link.name} href={link.path} onClick={handleLinkClick} className={`text-sm font-medium ${activeSection === link.path.substring(1) ? activeLinkClass : inactiveLinkClass}`}>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
             <button onClick={toggleLanguage} className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5">
                <Globe size={20} />
                <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <a href="#contact" onClick={handleLinkClick} className="inline-block bg-gradient-to-r from-orange-500 to-violet-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
              {language === 'en' ? 'Request a Demo' : 'اطلب عرضًا'}
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-4">
             <button onClick={toggleLanguage} className="text-gray-700"><Globe size={24} /></button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`lg:hidden bg-white border-t border-gray-200 ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {currentNavLinks.map((link) => (
              <a key={link.name} href={link.path} onClick={handleLinkClick} className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === link.path.substring(1) ? activeLinkClass : 'text-gray-600 hover:bg-gray-50'}`}>
                {link.name}
              </a>
            ))}
             <a href="#contact" onClick={handleLinkClick} className="block w-full mt-4 px-3 py-3 rounded-md bg-gradient-to-r from-orange-500 to-violet-600 text-white font-semibold shadow-lg text-center">
              {language === 'en' ? 'Request a Demo' : 'اطلب عرضًا'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;