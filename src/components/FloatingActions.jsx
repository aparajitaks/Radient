import React from 'react';
import { MessageCircle, Send, Star } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
  </svg>
);


export default function FloatingActions({ onOpenEnquiry }) {
  return (
    <>
      {/* Floating Social Stack (left side) */}
      <div className="floating-social-stack">
        <a
          href="https://share.google/SyTVK9ImgMPvcO0un"
          target="_blank"
          rel="noreferrer"
          className="floating-soc-btn floating-google"
          aria-label="Google Reviews"
          title="See our Google Reviews"
        >
          <img 
            src="/images/google_transparent.png" 
            alt="Google Reviews" 
            style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }}
          />
        </a>
        <a
          href="https://www.instagram.com/radianttravels82?igsi=NmZucWlmeGxueDhn"
          target="_blank"
          rel="noreferrer"
          className="floating-soc-btn floating-instagram"
          aria-label="Instagram"
          title="Follow us on Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.youtube.com/@radiantairticketsandexpedition"
          target="_blank"
          rel="noreferrer"
          className="floating-soc-btn floating-youtube"
          aria-label="YouTube"
          title="Watch us on YouTube"
        >
          <YoutubeIcon />
        </a>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hello Radiant Expeditions, I would like to inquire about pilgrimage tour packages from Bangalore.')}`}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <img 
          src="/images/whatsapp_transparent.png" 
          alt="Chat on WhatsApp" 
          style={{ width: '38px', height: '38px', objectFit: 'contain', display: 'block' }}
        />
      </a>

      {/* Floating Side Enquiry Pill */}
      <button
        className="floating-enquiry-pill"
        onClick={() => onOpenEnquiry()}
        aria-label="Open Enquiry Form"
      >
        ENQUIRY
      </button>
    </>
  );
}
