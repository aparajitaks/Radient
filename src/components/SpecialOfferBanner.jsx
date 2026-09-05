import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, X } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

export default function SpecialOfferBanner({ onOpenEnquiry }) {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <section id="about-us" className="offer-about-section">
      <div className="container">
        <div className="offer-about-grid">
          {/* Left Special Offer Banner */}
          <div className="discount-banner-card">
            <span className="discount-ribbon-tag">(T&C*)</span>
            
            <div className="discount-heading-box">
              <h2>SPECIAL DISCOUNT OFFER</h2>
            </div>

            <div className="offer-items-wrap">
              <div className="offer-item-badge">
                <span className="free-text">100% FREE</span>
                <span className="free-text" style={{ fontSize: '13px', color: '#fff' }}>TICKET FOR</span>
                <span className="target-text">Infant Child</span>
                <span className="pkg-text">On All Flight Packages</span>
              </div>

              <div className="offer-item-badge">
                <span className="free-text">100% FREE</span>
                <span className="free-text" style={{ fontSize: '13px', color: '#fff' }}>TICKET FOR</span>
                <span className="target-text">Upto 10 year Kids</span>
                <span className="pkg-text">On All Train Packages</span>
              </div>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button 
                className="btn-gold" 
                style={{ width: '100%', fontSize: '15px', padding: '10px' }}
                onClick={() => onOpenEnquiry("Special Discount Offer (Infant/Kids Free)")}
              >
                Claim This Offer Now <Sparkles size={16} style={{ marginLeft: '6px' }} />
              </button>
            </div>
          </div>

          {/* Right About Radiant Expeditions Content */}
          <div className="about-subhayatra-content">
            <h2>Radiant Expeditions</h2>
            <p>
              <strong>Radiant Expeditions</strong> is one of the leading <strong>Pilgrimage tour operator in Bangalore</strong> at affordable cost in tourism industry and it was incorporated in the year <strong>2009</strong> with the objective of setting high travel standards and facilitating attractive Tour packages for travelling to <strong>Shirdi, Nasik, Pandharpur, Panch Jyotirlinga, Kolhapur, Mahabaleshwar, Mumbai, Lonavala, Ajanta &amp; Ellora, Kashi, Gaya, Allahabad, Ayodhya, Naimisharanya, Rameshwaram, Hyderabad Srisailam, Udupi, Kollur Mookambika, Odisha Puri Jagannath, Gujarat Dwarka, Madhya Pradesh, Agra, Mathura, Jaipur, Kedarnath, Nepal, Haridwar &amp; Rishikesh Tours</strong>.
            </p>
            <p>
              We are specialized in making Group and Customized tours to our privilege customers need and budgeted. We are organized more than 1000 group packages for <strong>Shirdi, Kashi & other pilgrimage</strong> places by around 200000+ satisfied devotees.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
              <button 
                className="read-more-btn"
                onClick={() => setShowAboutModal(true)}
              >
                Read More! <ArrowRight size={16} />
              </button>

              <a 
                href="https://share.google/sKJGscBnoFqiLYYus" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '13.5px', 
                  fontWeight: '600', 
                  color: 'var(--color-primary)', 
                  textDecoration: 'underline' 
                }}
              >
                📍 4.8 ★ on Google Maps (39 Reviews)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Read More Detail Modal */}
      {showAboutModal && (
        <div className="modal-backdrop" onClick={() => setShowAboutModal(false)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setShowAboutModal(false)}
            >
              <X size={20} />
            </button>
            
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '14px' }}>About Radiant Expeditions</h2>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
              Established in 2009 in Bangalore, Radiant Expeditions has grown to become Karnataka's premier pilgrimage tour management company. Over the past 15+ years, we have guided over 2,00,000 devout pilgrims across the most revered temple shrines across India and Nepal.
            </p>

            {/* Real group photo from Google Maps listing */}
            <div style={{ marginBottom: '18px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              <img 
                src="/images/radiant_pilgrim_tour_group.jpg" 
                alt="Radiant Expeditions Group Yatra Pilgrims" 
                style={{ width: '100%', maxHeight: '240px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '8px 12px', background: '#f8fafc', fontSize: '12.5px', color: '#64748b' }}>
                📷 <em>Real pilgrim group departure with Radiant Expeditions (Google Maps Verified)</em>
              </div>
            </div>
            
            <h3 style={{ fontSize: '17px', color: 'var(--color-dark-navy)', marginBottom: '10px' }}>Why Devotees Trust Us:</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {[
                "VIP Darshan Passes arranged with authorized temple protocols",
                "Senior citizen friendly pacing and wheelchair assistance wherever possible",
                "Direct flight connectivity and clean deluxe AC vehicle transfers",
                "Pure Satvik and South Indian vegetarian food provided",
                "Experienced Tamil, Kannada, Telugu and Hindi speaking tour coordinators"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#334155' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  {item}
                </li>
              ))}
            </ul>

            <button 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={() => {
                setShowAboutModal(false);
                onOpenEnquiry();
              }}
            >
              Plan Your Spiritual Yatra With Us
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
