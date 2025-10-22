import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

type Language = 'en' | 'ar';

interface FooterProps {
    language: Language;
}

const translations = {
    en: {
        slogan: "The AI-First Customer Experience Platform for the Enterprise.",
        product: "Product",
        company: "Company",
        legal: "Legal",
        copyright: `© ${new Date().getFullYear()} RoboDesk Inc. All rights reserved.`,
        nav: [
            { name: 'Platform', path: '#platform' },
            { name: 'Features', path: '#features' },
            { name: 'Customers', path: '#customers' },
            { name: 'Contact', path: '#contact' },
        ],
        companyLinks: [
            { name: 'Partners', path: '#partners' },
        ],
        legalLinks: [
            { name: 'Privacy Policy', path: '/privacy' },
        ],
    },
    ar: {
        slogan: "منصة تجربة العملاء الأولى القائمة على الذكاء الاصطناعي للمؤسسات.",
        product: "المنتج",
        company: "الشركة",
        legal: "قانوني",
        copyright: `© ${new Date().getFullYear()} RoboDesk Inc. جميع الحقوق محفوظة.`,
        nav: [
            { name: 'المنصة', path: '#platform' },
            { name: 'المميزات', path: '#features' },
            { name: 'العملاء', path: '#customers' },
            { name: 'اتصل بنا', path: '#contact' },
        ],
        companyLinks: [
            { name: 'الشركاء', path: '#partners' },
        ],
        legalLinks: [
            { name: 'سياسة الخصوصية', path: '/privacy' },
        ],
    }
};

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];
  const isRtl = language === 'ar';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="col-span-2 lg:col-span-1">
             <h1 className="text-2xl font-bold text-gray-900">
              Robo<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">Desk</span>
            </h1>
            <p className="mt-4 text-gray-500 text-sm">{t.slogan}</p>
            <div className={`mt-6 flex space-x-4 ${isRtl ? 'justify-end' : 'justify-start'}`}>
              <a href="#" className="text-gray-400 hover:text-gray-500"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-500"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-500"><Facebook size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t.product}</h3>
            <ul className="mt-4 space-y-3">
              {t.nav.map(link => (
                <li key={link.name}>
                  <a href={link.path} onClick={handleLinkClick} className="text-base text-gray-500 hover:text-gray-900">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t.company}</h3>
            <ul className="mt-4 space-y-3">
              {t.companyLinks.map(link => (
                <li key={link.name}>
                  <a href={link.path} onClick={handleLinkClick} className="text-base text-gray-500 hover:text-gray-900">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t.legal}</h3>
            <ul className="mt-4 space-y-3">
              {t.legalLinks.map(link => (
                <li key={link.name}>
                  {link.path.startsWith('/') ? 
                    <NavLink to={link.path} className="text-base text-gray-500 hover:text-gray-900">{link.name}</NavLink> :
                    <a href={link.path} onClick={handleLinkClick} className="text-base text-gray-500 hover:text-gray-900">{link.name}</a>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-sm text-gray-500 text-center">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;