import React from 'react';
import { 
  Compass, 
  Plane, 
  Award, 
  Users, 
  Headphones, 
  ShieldCheck 
} from 'lucide-react';
import { pilgrimDestinations, trustBadges } from '../data/packagesData';

export default function PilgrimDestinations({ onOpenEnquiry }) {
  const badgeIcons = [
    <Compass size={22} />,
    <Plane size={22} />,
    <Award size={22} />,
    <Users size={22} />,
    <Headphones size={22} />,
    <ShieldCheck size={22} />
  ];

  return (
    <section id="destinations" className="destinations-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            Pilgrim <span>Destinations</span>
          </h2>
          <p className="section-subtitle">
            Holy pilgrimage shrines and holy dhams covered with direct flights and luxury ground transfers from Bangalore.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="destinations-grid">
          {pilgrimDestinations.map((dest) => (
            <div 
              key={dest.id} 
              className="dest-card"
              onClick={() => onOpenEnquiry(dest.name)}
              style={{ cursor: 'pointer' }}
            >
              <img src={dest.image} alt={dest.name} loading="lazy" />
              <div className="dest-overlay">
                <span style={{ fontSize: '11px', color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase' }}>
                  {dest.state}
                </span>
                <h3>{dest.name}</h3>
                <p>{dest.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Features */}
        <div className="trust-badges-grid">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="trust-badge-card">
              <div className="trust-icon-box">
                {badgeIcons[idx]}
              </div>
              <div>
                <h4>{badge.title}</h4>
                <p>{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
