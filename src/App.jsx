import React, { useState } from 'react';
import './styles/index.css';
import './styles/components.css';

import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import SpecialOfferBanner from './components/SpecialOfferBanner';
import TourPackagesSection from './components/TourPackagesSection';
import GoogleReviews from './components/GoogleReviews';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

import PackageModal from './components/PackageModal';
import EnquiryModal from './components/EnquiryModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryPackageTitle, setEnquiryPackageTitle] = useState('');
  const [activePackageTab, setActivePackageTab] = useState('south');

  const handleOpenEnquiry = (packageTitle = '') => {
    setEnquiryPackageTitle(packageTitle);
    setEnquiryOpen(true);
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="app-wrapper">
      {/* 1. Main Navigation Header */}
      <Header
        onOpenEnquiry={() => handleOpenEnquiry()}
        onSelectPackageTab={(tabId) => setActivePackageTab(tabId)}
      />

      <main>
        {/* 2. Hero Section Slider */}
        <HeroSlider
          onOpenEnquiry={handleOpenEnquiry}
          onSelectPackage={handleSelectPackage}
        />

        {/* 3. About Us & Special Offer */}
        <SpecialOfferBanner onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Packages Section with Tabbed Selector */}
        <TourPackagesSection
          activeTab={activePackageTab}
          onTabChange={(tabId) => setActivePackageTab(tabId)}
          onSelectPackage={handleSelectPackage}
          initialCount={6}
        />

        {/* 5. Client Reviews & Ratings (4.8 ★ on Google) */}
        <GoogleReviews onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Frequently Asked Questions */}
        <FAQSection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* 5. Footer */}
      <Footer
        onOpenEnquiry={handleOpenEnquiry}
        onSelectPackageTab={(tabId) => setActivePackageTab(tabId)}
      />

      {/* Floating Actions */}
      <FloatingActions onOpenEnquiry={handleOpenEnquiry} />

      {/* Modals */}
      {selectedPackage && (
        <PackageModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onBookNow={(pkgTitle) => {
            setSelectedPackage(null);
            handleOpenEnquiry(pkgTitle);
          }}
        />
      )}

      {enquiryOpen && (
        <EnquiryModal
          isOpen={enquiryOpen}
          onClose={() => setEnquiryOpen(false)}
          initialPackage={enquiryPackageTitle}
        />
      )}
    </div>
  );
}
