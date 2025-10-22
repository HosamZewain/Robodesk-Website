
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsentBanner from './CookieConsentBanner';
import AIBuiltBanner from './AIBuiltBanner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const isRtl = language === 'ar';

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { language } as { language: 'en' | 'ar' });
    }
    return child;
  });

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-white text-gray-800 antialiased">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[101] focus:top-2 focus:left-2 focus:px-4 focus:py-2 bg-white text-gray-900 shadow-lg rounded-md"
      >
        Skip to main content
      </a>
      <AIBuiltBanner />
      <Header language={language} setLanguage={setLanguage} />
      <main id="main-content">{childrenWithProps}</main>
      <Footer language={language} />
      <CookieConsentBanner language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default Layout;
