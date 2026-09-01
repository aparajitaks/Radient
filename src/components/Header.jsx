import React, { useState } from 'react';
import { Menu, X, PhoneCall, Send } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

export default function Header({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Shirdi Tours', href: '#shirdi-packages' },
    { label: 'Kashi Tours', href: '#kashi-packages' },
    { label: 'Special Tours', href: '#special-packages' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#footer' }
  ];

  return (
    <header className="main-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo">
          <img
            src="/logo.png"
            alt="Radiant Expeditions Tours &amp; Travels logo"
            className="logo-img"
          />
          <div>
            <div className="brand-name">Radient Expeditions</div>
            <div className="brand-tagline">Tours & Travels – Bangalore</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a href={`tel:${contactInfo.phone1.tel}`} className="btn-gold" style={{ gap: '6px' }}>
            <PhoneCall size={15} /> Call Us
          </a>
          <button className="btn-primary" onClick={() => onOpenEnquiry()}>
            <Send size={15} /> Quick Enquiry
          </button>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="brand-logo">
            <img
              src="/logo.png"
              alt="Radiant Expeditions Tours &amp; Travels logo"
              className="logo-img"
              style={{ width: '40px', height: '40px' }}
            />
            <div>
              <div className="brand-name" style={{ fontSize: '18px' }}>Radient Expeditions</div>
            </div>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="drawer-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button 
            className="btn-primary" 
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
          >
            <Send size={16} /> Quick Enquiry
          </button>
          <a 
            href={`tel:${contactInfo.phone1.tel}`} 
            className="btn-gold" 
            style={{ width: '100%', textAlign: 'center' }}
          >
            <PhoneCall size={16} /> Call: {contactInfo.phone1.number}
          </a>
        </div>
      </div>
    </header>
  );
}
