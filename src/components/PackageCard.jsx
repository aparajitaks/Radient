import React from 'react';

export default function PackageCard({ pkg, onSelectPackage }) {
  return (
    <div className="package-card">
      <div className="card-img-wrap">
        <img
          src={pkg.image}
          alt={`${pkg.title} (${pkg.duration}) tour package from Bangalore - Radiant Expeditions`}
          className="card-img"
          loading="lazy"
        />
        <span className="duration-pill">{pkg.duration}</span>
        {pkg.badge && <span className="card-badge-tag">{pkg.badge}</span>}
      </div>

      <div className="card-content">
        <h3 className="card-title">{pkg.title}</h3>
        {pkg.route && (
          <div className="card-route-text" title={pkg.route}>
            📍 {pkg.route}
          </div>
        )}

        <div className="card-footer-row">
          <div className="card-price-label">
            Starts @ <span className="card-price-value">{pkg.priceDisplay}</span>
          </div>

          <button
            className="btn-gold"
            onClick={() => onSelectPackage(pkg)}
            aria-label={`View details for ${pkg.title}`}
          >
            View More!
          </button>
        </div>
      </div>
    </div>
  );
}
