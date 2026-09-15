import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

const aboutImages = [
  {
    src: '/images/about_group_1.jpg',
    alt: 'Ayodhya & Kashi Holy Boat Darshan - Radiant Expeditions Pilgrims',
    tag: 'Ayodhya & Kashi Ghats',
    caption: 'Devotees during sacred holy river boat darshan'
  },
  {
    src: '/images/about_group_2.jpg',
    alt: 'Grand Temple Complex Group Darshan - Radiant Expeditions Pilgrims',
    tag: 'Grand Temple Yatra',
    caption: 'Devotees blessed with priority temple darshan'
  },
  {
    src: '/images/about_group_3.jpg',
    alt: 'Nepal Pashupatinath Temple Tour - Radiant Expeditions Pilgrims',
    tag: 'Kathmandu, Nepal',
    caption: 'Bangalore pilgrims at revered Pashupatinath shrine'
  },
  {
    src: '/images/about_group_4.jpg',
    alt: 'Mt. Everest Mountain Flight Tour - Radiant Expeditions Pilgrims',
    tag: 'Himalayan Flight Group',
    caption: 'Group holding Himalayan mountain flight certificates'
  },
  {
    src: '/images/radiant_pilgrim_tour_group.jpg',
    alt: 'Real Group Pilgrimages with Care - Radiant Expeditions',
    tag: 'Group Pilgrimage',
    caption: 'Organized group yatra with pure vegetarian catering'
  }
];

export default function SpecialOfferBanner({ onOpenEnquiry }) {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? aboutImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="about-us" className="offer-about-section">
      <div className="container">
        <div className="offer-about-grid">
          {/* Left: Verified Pilgrim Group Photo Carousel */}
          <div 
            className="about-image-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              boxShadow: '0 12px 30px rgba(0,0,0,0.12)', 
              border: '1px solid #e2e8f0',
              backgroundColor: '#0f172a'
            }}
          >
            {/* Top Counter Badge */}
            <div 
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                zIndex: 4,
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(6px)',
                color: '#ffffff',
                fontSize: '11.5px',
                fontWeight: '600',
                padding: '4px 10px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>📷 Real Groups</span>
              <span style={{ opacity: 0.6 }}>•</span>
              <span>{currentSlide + 1}/{aboutImages.length}</span>
            </div>

            {/* Horizontal Scroll / Slide Track */}
            <div 
              style={{
                display: 'flex',
                width: '100%',
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {aboutImages.map((slide, index) => (
                <div 
                  key={index}
                  style={{
                    minWidth: '100%',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={slide.src} 
                    alt={slide.alt} 
                    style={{ 
                      width: '100%', 
                      minHeight: '350px', 
                      maxHeight: '430px', 
                      height: '100%',
                      objectFit: 'cover', 
                      display: 'block' 
                    }}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous pilgrim photo"
              style={{
                position: 'absolute',
                left: '12px',
                top: '45%',
                transform: 'translateY(-50%)',
                zIndex: 4,
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(4px)',
                transition: 'background 0.2s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.6)'}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next pilgrim photo"
              style={{
                position: 'absolute',
                right: '12px',
                top: '45%',
                transform: 'translateY(-50%)',
                zIndex: 4,
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(4px)',
                transition: 'background 0.2s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.6)'}
            >
              <ChevronRight size={20} />
            </button>

            {/* Bottom Gradient & Info Overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.65) 60%, transparent 100%)',
              padding: '28px 20px 16px',
              color: '#ffffff',
              zIndex: 3
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                <span style={{ 
                  display: 'inline-block', 
                  background: 'var(--color-primary)', 
                  color: '#fff', 
                  fontSize: '11px', 
                  fontWeight: '700', 
                  padding: '3px 10px', 
                  borderRadius: '20px' 
                }}>
                  ✓ 8+ Years Trust (Since 2018)
                </span>
                <span style={{ 
                  display: 'inline-block', 
                  background: 'rgba(255, 255, 255, 0.2)', 
                  color: '#f8fafc', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  padding: '3px 10px', 
                  borderRadius: '20px',
                  backdropFilter: 'blur(4px)'
                }}>
                  📍 {aboutImages[currentSlide].tag}
                </span>
              </div>

              <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', marginBottom: '3px' }}>
                Real Group Pilgrimages with Care
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, lineHeight: '1.4' }}>
                {aboutImages[currentSlide].caption} • 2,00,000+ happy devotees.
              </p>

              {/* Slide Indicator Dots */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '12px'
                }}
              >
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      width: currentSlide === idx ? '22px' : '7px',
                      height: '7px',
                      borderRadius: '4px',
                      backgroundColor: currentSlide === idx ? 'var(--color-primary, #0d9488)' : 'rgba(255, 255, 255, 0.4)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
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
