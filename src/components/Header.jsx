import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, PhoneCall, Send, ChevronDown } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

export default function Header({ onOpenEnquiry, onSelectPackageTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [drawerPackagesOpen, setDrawerPackagesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const packageOptions = [
    {
      title: 'South Indian Packages',
      desc: 'Kerala, Tirupati, Ooty, Coorg & Coastal Temples',
      href: '#packages',
      tabId: 'south'
    },
    {
      title: 'North India Package',
      desc: 'Kashmir, Himachal, Delhi-Agra-Jaipur & Rajasthan',
      href: '#packages',
      tabId: 'north'
    },
    {
      title: 'Pilgrimage',
      desc: 'Shirdi Sai Baba, Kashi Ayodhya, Chardham & Jyotirlingas',
      href: '#packages',
      tabId: 'pilgrimage'
    },
    {
      title: 'International',
      desc: 'Bhutan, Nepal, Dubai, Bali & Sri Lanka',
      href: '#packages',
      tabId: 'international'
    }
  ];

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPackagesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href, tabId) => {
    setMobileMenuOpen(false);
    setPackagesDropdownOpen(false);
    if (tabId && onSelectPackageTab) {
      onSelectPackageTab(tabId);
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="main-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" onClick={() => handleNavClick('#home')}>
          <img
            src="/logo.png"
            alt="Radiant Expeditions Tours &amp; Travels logo"
            className="logo-img"
          />
          <div>
            <div className="brand-name">Radiant Expeditions</div>
            <div className="brand-tagline">Tours & Travels – Bangalore</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-menu">
            {/* 1. Home */}
            <li>
              <a href="#home" className="nav-link" onClick={() => handleNavClick('#home')}>
                Home
              </a>
            </li>

            {/* 2. About Us */}
            <li>
              <a href="#about-us" className="nav-link" onClick={() => handleNavClick('#about-us')}>
                About Us
              </a>
            </li>

            {/* 3. Packages with Dropdown */}
            <li
              className="nav-item-dropdown"
              ref={dropdownRef}
              onMouseEnter={() => setPackagesDropdownOpen(true)}
              onMouseLeave={() => setPackagesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`nav-dropdown-toggle ${packagesDropdownOpen ? 'open' : ''}`}
                onClick={() => setPackagesDropdownOpen(!packagesDropdownOpen)}
                aria-expanded={packagesDropdownOpen}
              >
                Packages
                <ChevronDown size={15} className="dropdown-arrow" />
              </button>

              <div className={`nav-dropdown-menu ${packagesDropdownOpen ? 'show' : ''}`}>
                {packageOptions.map((pkg) => (
                  <div key={pkg.title} className="nav-dropdown-item">
                    <a
                      href={pkg.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(pkg.href, pkg.tabId);
                      }}
                    >
                      <span>{pkg.title}</span>
                      <span className="dropdown-subtext">{pkg.desc}</span>
                    </a>
                  </div>
                ))}
              </div>
            </li>

            {/* 4. Contact Us */}
            <li>
              <a href="#footer" className="nav-link" onClick={() => handleNavClick('#footer')}>
                Contact Us
              </a>
            </li>
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
              <div className="brand-name" style={{ fontSize: '18px' }}>Radiant Expeditions</div>
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
          {/* Home */}
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              Home
            </a>
          </li>

          {/* About Us */}
          <li>
            <a
              href="#about-us"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about-us');
              }}
            >
              About Us
            </a>
          </li>

          {/* Packages Dropdown Accordion */}
          <li>
            <button
              type="button"
              className="drawer-dropdown-btn"
              onClick={() => setDrawerPackagesOpen(!drawerPackagesOpen)}
            >
              <span>Packages</span>
              <ChevronDown
                size={18}
                style={{
                  transform: drawerPackagesOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>
            {drawerPackagesOpen && (
              <div className="drawer-submenu">
                {packageOptions.map((pkg) => (
                  <a
                    key={pkg.title}
                    href={pkg.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(pkg.href, pkg.tabId);
                    }}
                  >
                    <strong>{pkg.title}</strong>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                      {pkg.desc}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* Contact Us */}
          <li>
            <a
              href="#footer"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#footer');
              }}
            >
              Contact Us
            </a>
          </li>
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
