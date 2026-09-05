import React from 'react';
import { Star, CheckCircle, ExternalLink, QrCode } from 'lucide-react';
import { googleReviews, contactInfo } from '../data/packagesData';

export default function GoogleReviews({ onOpenEnquiry }) {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            Client <span>Reviews & Ratings</span>
          </h2>
          <p className="section-subtitle">
            Read genuine experiences from families and devotees who traveled with Radiant Expeditions.
          </p>
        </div>

        <div className="reviews-container-grid">
          {/* Left Google Rating Box */}
          <div className="google-rating-box">
            <div className="google-logo-row">
              <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
            </div>
            
            <div className="google-score-row">
              <span className="score-num">{contactInfo.googleRating}</span>
              <div>
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <div className="review-count-text">Based on {contactInfo.googleReviewsCount} Google Reviews</div>
              </div>
            </div>

            {/* QR Code Mock Preview */}
            <div className="qr-code-box">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                {/* Patterned QR mock representation */}
                <rect width="100" height="100" fill="#ffffff" />
                <rect x="10" y="10" width="24" height="24" fill="#384166" />
                <rect x="14" y="14" width="16" height="16" fill="#ffffff" />
                <rect x="18" y="18" width="8" height="8" fill="#384166" />
                
                <rect x="66" y="10" width="24" height="24" fill="#384166" />
                <rect x="70" y="14" width="16" height="16" fill="#ffffff" />
                <rect x="74" y="18" width="8" height="8" fill="#384166" />
                
                <rect x="10" y="66" width="24" height="24" fill="#384166" />
                <rect x="14" y="70" width="16" height="16" fill="#ffffff" />
                <rect x="18" y="74" width="8" height="8" fill="#384166" />

                <rect x="42" y="12" width="6" height="12" fill="#384166" />
                <rect x="52" y="18" width="8" height="6" fill="#384166" />
                <rect x="40" y="40" width="20" height="20" fill="#0B735F" rx="4" />
                <circle cx="50" cy="50" r="5" fill="#ffffff" />

                <rect x="40" y="70" width="8" height="18" fill="#384166" />
                <rect x="54" y="66" width="12" height="8" fill="#384166" />
                <rect x="72" y="46" width="16" height="10" fill="#384166" />
                <rect x="66" y="78" width="22" height="10" fill="#384166" />
              </svg>
            </div>

            <div className="qr-instruction">SCAN QR CODE &amp; SEE OUR PROFILE</div>

            <a 
              href="https://share.google/sKJGscBnoFqiLYYus" 
              target="_blank" 
              rel="noreferrer" 
              className="google-profile-btn"
            >
              View on Google Maps ↗
            </a>
          </div>

          {/* Right Reviews Carousel/Grid */}
          <div className="reviews-carousel-track">
            {googleReviews.map((rev) => (
              <div key={rev.id} className="review-card-item">
                <div>
                  <div className="stars-row" style={{ marginBottom: '8px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p className="review-text">"{rev.text}"</p>
                </div>

                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {rev.name.charAt(0)}
                  </div>
                  <div className="reviewer-meta">
                    <h4>{rev.name}</h4>
                    <span>{rev.location} • <CheckCircle size={12} style={{ display: 'inline', color: '#16a34a' }} /> Verified Traveler</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
