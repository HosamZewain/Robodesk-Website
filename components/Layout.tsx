
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsentBanner from './CookieConsentBanner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
};

export default Layout;
