import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Send, Calendar, ShieldCheck } from 'lucide-react';
import { heroSlides } from '../data/packagesData';

export default function HeroSlider({ onOpenEnquiry, onSelectPackage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section id="home" className="hero-slider-section">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="hero-bg-img"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="hero-overlay">
            <div className="hero-content">
              <span className="hero-badge">{slide.badge} • {slide.duration}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <div className="hero-price-tag">
                Starts @ <span style={{ color: 'var(--color-accent)' }}>Rs.{slide.price}</span>
              </div>
              <p className="hero-tagline">{slide.tagline}</p>
              <div className="hero-btn-group">
                <button
                  className="btn-primary"
                  style={{ padding: '14px 32px', fontSize: '16px' }}
                  onClick={() => onOpenEnquiry(slide.title)}
                >
                  <Send size={18} /> Book This Tour
                </button>
                <a
                  href="#shirdi-packages"
                  className="btn-gold"
                  style={{ padding: '14px 28px', fontSize: '16px' }}
                >
                  <Calendar size={18} /> Explore Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Controls */}
      <button
        className="hero-arrow prev"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="hero-arrow next"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
