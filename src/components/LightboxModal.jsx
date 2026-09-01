import React from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ imageItem, onClose }) {
  if (!imageItem) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 300 }}>
      <div 
        style={{ 
          maxWidth: '850px', 
          width: '100%', 
          position: 'relative',
          textAlign: 'center' 
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close"
          style={{ background: '#ffffff', top: '-15px', right: '-15px' }}
        >
          <X size={22} />
        </button>
        <img
          src={imageItem.image}
          alt={imageItem.title}
          style={{
            width: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        />
        <div style={{ color: '#ffffff', marginTop: '12px', fontSize: '16px', fontWeight: '600' }}>
          {imageItem.title} <span style={{ color: 'var(--color-accent)' }}>({imageItem.category})</span>
        </div>
      </div>
    </div>
  );
}
