import React, { useState } from 'react';
import { Eye, Image as ImageIcon } from 'lucide-react';
import { galleryImages } from '../data/packagesData';

export default function TourGallery({ onSelectImage }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Shirdi', 'Kashi', 'Ayodhya', 'Puri', 'Special'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            Tour <span>Gallery</span>
          </h2>
          <p className="section-subtitle">
            Memories and joyous moments captured with our pilgrim group departures.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  background: activeFilter === cat ? 'var(--color-primary)' : '#f1f5f9',
                  color: activeFilter === cat ? '#ffffff' : '#475569',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? 'var(--color-primary)' : '#e2e8f0'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => onSelectImage(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay-hover">
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Eye size={18} /> View Full Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
