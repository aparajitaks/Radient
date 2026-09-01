import React, { useState } from 'react';
import './styles/index.css';
import './styles/components.css';

import TopAnnouncementBar from './components/TopAnnouncementBar';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import SpecialOfferBanner from './components/SpecialOfferBanner';
import PackageSection from './components/PackageSection';
import GoogleReviews from './components/GoogleReviews';
import PilgrimDestinations from './components/PilgrimDestinations';
import TourGallery from './components/TourGallery';
import Footer from './components/Footer';

import PackageModal from './components/PackageModal';
import EnquiryModal from './components/EnquiryModal';
import LightboxModal from './components/LightboxModal';
import FloatingActions from './components/FloatingActions';

import { shirdiPackages, kashiPackages, specialPackages } from './data/packagesData';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryPackageTitle, setEnquiryPackageTitle] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleOpenEnquiry = (packageTitle = '') => {
    setEnquiryPackageTitle(packageTitle);
    setEnquiryOpen(true);
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleSelectImage = (img) => {
    setLightboxImage(img);
  };

  return (
    <div className="app-wrapper">
      {/* 1. Top Announcement Marquee */}
      <TopAnnouncementBar />

      {/* 2. Main Navigation Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      <main>
        {/* 3. Hero Section Slider */}
        <HeroSlider
          onOpenEnquiry={handleOpenEnquiry}
          onSelectPackage={handleSelectPackage}
        />

        {/* 4. Special Discount Offer & About Radient Expeditions */}
        <SpecialOfferBanner onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Shirdi Tour Packages */}
        <PackageSection
          id="shirdi-packages"
          titleFirst="Shirdi"
          titleHighlight="Tour Packages"
          packages={shirdiPackages}
          onSelectPackage={handleSelectPackage}
          initialCount={6}
        />

        {/* 6. Kashi Tour Packages */}
        <PackageSection
          id="kashi-packages"
          titleFirst="Kashi"
          titleHighlight="Tour Packages"
          packages={kashiPackages}
          onSelectPackage={handleSelectPackage}
          isAltBg={true}
          initialCount={6}
        />

        {/* 7. Special Tour Packages */}
        <PackageSection
          id="special-packages"
          titleFirst="Special"
          titleHighlight="Tour Packages"
          packages={specialPackages}
          onSelectPackage={handleSelectPackage}
          initialCount={6}
        />

        {/* 8. Client Reviews / Google 4.8 Rating */}
        <GoogleReviews onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. Pilgrim Destinations & Trust Highlights */}
        <PilgrimDestinations onOpenEnquiry={handleOpenEnquiry} />

        {/* 10. Tour Gallery */}
        <TourGallery onSelectImage={handleSelectImage} />
      </main>

      {/* 11. Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

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

      {lightboxImage && (
        <LightboxModal
          imageItem={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}
