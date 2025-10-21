
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Platform', path: '/platform' },
    { name: 'Features', path: '/features' },
    { name: 'Customers', path: '/customers' },
    { name: 'Contact', path: '/contact' },
  ];
  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }, // Assuming a terms page
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
             <h1 className="text-2xl font-bold text-gray-900">
              Robo<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">Desk</span>
            </h1>
            <p className="mt-4 text-gray-500 text-sm">
              The AI-First Customer Experience Platform for the Enterprise.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-500"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-500"><Facebook size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-base text-gray-500 hover:text-gray-900">{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Partners</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map(link => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-base text-gray-500 hover:text-gray-900">{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} RoboDesk Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
