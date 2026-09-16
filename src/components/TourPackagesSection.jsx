import React, { useState } from 'react';
import PackageCard from './PackageCard';
import {
  southIndianPackages,
  northIndianPackages,
  pilgrimagePackages,
  internationalPackages
} from '../data/packagesData';

// Map route icon matching dreams2heaventoursandtravels.com
const TabRouteIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M7.69526 6.83593C7.75561 6.87913 7.75561 6.87913 7.81717 6.92321C8.88012 7.70033 9.55073 8.80859 9.78419 10.1022C10.0143 11.5892 9.58714 13.3382 8.71088 14.5703C8.63117 14.6613 8.60066 14.6854 8.48139 14.7217C8.33583 14.7275 8.27801 14.6973 8.16401 14.6094C8.10322 14.4878 8.09741 14.3885 8.12494 14.2578C8.18265 14.1455 8.24901 14.04 8.31522 13.9325C9.0021 12.7825 9.39119 11.282 9.08241 9.95713C8.77562 8.80316 8.09721 7.84179 7.07026 7.22655C6.05837 6.65852 4.92872 6.5125 3.80121 6.78466C3.16386 6.9703 2.62435 7.27881 2.10932 7.6953C2.07065 7.72431 2.03198 7.75331 1.99213 7.78319C1.81013 7.93696 1.66856 8.13285 1.52338 8.3203C1.49951 8.35092 1.47565 8.38153 1.45106 8.41308C0.919436 9.13161 0.646945 10.013 0.651801 10.9033C0.652021 10.9461 0.652241 10.9889 0.652468 11.033C0.665146 11.8878 0.916139 12.7111 1.28901 13.4766C1.30374 13.5072 1.31848 13.5378 1.33366 13.5694C1.79688 14.5223 2.42258 15.4171 3.14921 16.1893C3.22168 16.2671 3.2909 16.3459 3.35993 16.4267C3.54153 16.635 3.73665 16.8299 3.93197 17.0252C3.9962 17.0895 4.06011 17.1541 4.12401 17.2188C4.3645 17.4605 4.6097 17.6851 4.88276 17.8906C5.01274 17.8286 5.106 17.759 5.21235 17.6611C5.24644 17.6299 5.28053 17.5986 5.31565 17.5664C5.35326 17.5316 5.39088 17.4968 5.42963 17.4609C5.47208 17.4221 5.51455 17.3833 5.55704 17.3445C5.86768 17.0603 6.17214 16.7747 6.44663 16.4548C6.52073 16.3702 6.597 16.288 6.67384 16.2059C6.89125 15.9731 7.09061 15.73 7.2848 15.4776C7.58631 15.0874 7.58631 15.0874 7.76606 15.0635C7.89057 15.0781 7.89057 15.0781 8.00287 15.1611C8.10286 15.2964 8.10695 15.3431 8.08588 15.5078C8.03095 15.5971 7.97914 15.6701 7.91254 15.7495C7.89482 15.7715 7.87709 15.7935 7.85883 15.8162C7.82231 15.8613 7.78554 15.9063 7.74853 15.9511C7.69999 16.0099 7.65233 16.0694 7.60477 16.129C7.42394 16.3545 7.23414 16.569 7.0376 16.7808C6.96509 16.8616 6.8992 16.9432 6.83588 17.0312C6.87647 17.0454 6.91705 17.0596 6.95887 17.0743C7.45994 17.2532 8.04399 17.4776 8.30073 17.9809C8.41265 18.2561 8.45176 18.4898 8.33735 18.772C8.06616 19.3088 7.56128 19.535 7.01655 19.7192C6.4718 19.8962 5.91011 20.0045 5.33625 20.0079C5.30584 20.0082 5.27543 20.0085 5.2441 20.0088C5.14644 20.0094 5.04878 20.0097 4.95112 20.0098C4.91782 20.0098 4.88452 20.0098 4.85021 20.0099C4.3576 20.0095 3.88043 19.9933 3.39838 19.8828C3.3595 19.8743 3.3595 19.8743 3.31984 19.8657C2.62961 19.7121 1.95135 19.4609 1.52338 18.8672C1.40229 18.6262 1.40125 18.3312 1.46937 18.0725C1.70493 17.5472 2.26132 17.3091 2.76468 17.1133C2.89057 17.0703 2.89057 17.0703 3.00776 17.0703C2.83456 16.854 2.66011 16.6426 2.47065 16.4404C1.12453 14.9715 -0.0224586 12.9679 -0.0122616 10.9277C-0.0119737 10.8587 -0.0119737 10.8587 -0.0116799 10.7884C-0.00678699 10.4224 0.027581 10.0812 0.117133 9.72655C0.123629 9.70079 0.130124 9.67502 0.136817 9.64847C0.245644 9.23069 0.418147 8.85436 0.624945 8.47655C0.645137 8.43949 0.665329 8.40243 0.686133 8.36425C0.82498 8.12212 0.992268 7.90846 1.17182 7.6953C1.19483 7.66746 1.21784 7.63961 1.24155 7.61092C2.06797 6.63391 3.31151 6.10306 4.56537 5.98632C5.65879 5.92961 6.80211 6.17883 7.69526 6.83593Z"
      fill={color}
    />
  </svg>
);

export default function TourPackagesSection({
  activeTab = 'south',
  onTabChange,
  onSelectPackage,
  initialCount = 6
}) {
  const [showAll, setShowAll] = useState(false);

  const tabs = [
    { id: 'south', label: 'South Indian Packages', anchor: '#south-indian-packages' },
    { id: 'north', label: 'North India Package', anchor: '#north-indian-packages' },
    { id: 'pilgrimage', label: 'Pilgrimage', anchor: '#pilgrimage-packages' },
    { id: 'international', label: 'International', anchor: '#international-packages' }
  ];

  const packageMap = {
    south: southIndianPackages,
    north: northIndianPackages,
    pilgrimage: pilgrimagePackages,
    international: internationalPackages
  };

  const currentPackages = packageMap[activeTab] || southIndianPackages;
  const displayedPackages = showAll ? currentPackages : currentPackages.slice(0, initialCount);

  const handleTabClick = (tabId) => {
    setShowAll(false);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <section id="packages" className="tour-services-section ptb-50">
      {/* Anchor targets so legacy or direct links scroll nicely */}
      <div id="south-indian-packages" style={{ position: 'relative', top: '-110px' }} />
      <div id="north-indian-packages" style={{ position: 'relative', top: '-110px' }} />
      <div id="pilgrimage-packages" style={{ position: 'relative', top: '-110px' }} />
      <div id="international-packages" style={{ position: 'relative', top: '-110px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-title-three text-center">
          <div className="sub-title-three">
            <span>Packages</span>
            <svg
              className="sub-title-shape"
              viewBox="0 0 125 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M61.0907 0.260691C34.2581 0.937045 9.51257 3.7364 0.493855 5.05153C-0.400564 6.17878 0.12118 7.39998 0.493855 7.86967C1.20939 8.32057 7.6492 7.49392 10.7797 7.02423C15.4306 6.34787 37.0159 5.2394 47.2272 4.76971C55.6347 3.64246 74.8796 3.7364 83.4511 3.92427C92.6189 3.07883 108.718 4.76971 113.414 4.76971C117.171 4.76971 122.135 5.14547 124.147 5.33334C126.115 3.07883 124.222 1.95157 123.029 1.66976C109.166 0.824319 94.6314 -0.584751 61.0907 0.260691Z"
                fill="#4DA627"
              />
            </svg>
          </div>
          <div className="title">
            <h2>Tour Packages from Bangalore – Pilgrimage &amp; Holidays</h2>
          </div>
        </div>

        {/* Tab Buttons Pill Bar */}
        <div className="nav-buttons-three">
          <ul className="nav-pills-bar" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li key={tab.id} className="nav-pill-item" role="presentation">
                  <button
                    type="button"
                    className={`nav-pill-link ${isActive ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab.id)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <TabRouteIcon size={18} color={isActive ? '#ffffff' : '#1e293b'} />
                    <span>{tab.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Packages Grid */}
        <div className="package-grid" style={{ marginTop: '40px' }}>
          {displayedPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelectPackage={onSelectPackage}
            />
          ))}
        </div>

        {/* Show More / Fewer */}
        {currentPackages.length > initialCount && (
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button
              className="btn-view-all"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Fewer Packages' : 'View All Packages'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
