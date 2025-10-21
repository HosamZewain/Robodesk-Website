
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import FeaturesPage from './pages/FeaturesPage';
import PartnersPage from './pages/PartnersPage';
import CustomersPage from './pages/CustomersPage';
import FreePilotPage from './pages/FreePilotPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/free-pilot" element={<FreePilotPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
