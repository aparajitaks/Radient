import React, { useState } from 'react';
import PackageCard from './PackageCard';

export default function PackageSection({
  id,
  titleFirst,
  titleHighlight,
  badgeText,
  subtitle,
  packages = [],
  onSelectPackage,
  isAltBg = false,
  initialCount = 6
}) {
  const [showAll, setShowAll] = useState(packages.length <= initialCount);

  const displayedPackages = showAll ? packages : packages.slice(0, initialCount);

  return (
    <section id={id} className={`package-section ${isAltBg ? 'alt-bg' : ''}`}>
      <div className="container">
        <div className="section-title-wrap">
          {badgeText && <span className="section-badge-tag">{badgeText}</span>}
          <h2 className="section-title">
            {titleFirst} <span>{titleHighlight}</span>
          </h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        <div className="package-grid">
          {displayedPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelectPackage={onSelectPackage}
            />
          ))}
        </div>

        {packages.length > initialCount && (
          <div style={{ textAlign: 'center' }}>
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
