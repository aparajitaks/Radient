import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, X } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

export default function SpecialOfferBanner({ onOpenEnquiry }) {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <section id="about-us" className="offer-about-section">
      <div className="container">
        <div className="offer-about-grid">
          {/* Left: Verified Pilgrim Group Photo Card */}
          <div className="about-image-card" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
            <img 
              src="/images/radiant_pilgrim_tour_group.jpg" 
              alt="Radiant Expeditions Group Yatra Pilgrims" 
              style={{ width: '100%', minHeight: '340px', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 65%, transparent 100%)',
              padding: '24px 20px 18px',
              color: '#ffffff'
            }}>
              <span style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', fontSize: '11.5px', fontWeight: '700', padding: '4px 10px', borderRadius: '20px', marginBottom: '8px' }}>
                ✓ 8+ Years Trust (Since 2018)
              </span>
              <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
                Real Group Pilgrimages with Care
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
                Guiding 2,00,000+ satisfied devotees across the most sacred shrines of India &amp; Nepal.
              </p>
            </div>
          </div>

          {/* Right: About Radiant Expeditions Content */}
          <div className="about-subhayatra-content">
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              About Us
            </span>
            <h2 style={{ fontSize: '28px', color: 'var(--color-dark-navy)', marginTop: '4px', marginBottom: '12px' }}>
              Radiant Expeditions
            </h2>
            <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '14px' }}>
              <strong>Radiant Expeditions</strong> is one of the leading <strong>Pilgrimage tour operators in Bangalore</strong> at affordable cost. Incorporated in the year <strong>2018</strong>, we facilitate attractive, well-organized tour packages to <strong>Shirdi, Kashi, Gaya, Ayodhya, Chardham, Puri Jagannath, Gujarat Dwarka &amp; Somnath, Rameshwaram, Tirupati, Northeast India, Nepal, and Bhutan</strong>.
            </p>
            <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '18px' }}>
              We specialize in group and customized tours tailored to families and senior citizens, having successfully conducted more than 1,000 group packages for over 2,00,000+ satisfied devotees with dedicated pure vegetarian catering and VIP darshan arrangements.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                className="btn-primary"
                onClick={() => onOpenEnquiry()}
              >
                Plan Your Pilgrimage
              </button>

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
              Established in 2018 in Bangalore, Radiant Expeditions has grown to become Karnataka's premier pilgrimage tour management company. Over the past 8+ years, we have guided over 2,00,000 devout pilgrims across the most revered temple shrines across India and Nepal.
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
