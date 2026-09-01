import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart, ShieldCheck, Star } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const YoutubeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
  </svg>
);


export default function Footer({ onOpenEnquiry }) {
  return (
    <footer id="footer" className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About */}
          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '16px' }}>
              <img
                src="/logo.png"
                alt="Radiant Expeditions Tours &amp; Travels logo"
                className="logo-img"
                style={{ width: '56px', height: '56px', filter: 'brightness(1.05)' }}
              />
              <div>
                <div className="brand-name" style={{ color: '#ffffff' }}>Radient Expeditions</div>
                <div className="brand-tagline">Tours & Travels</div>
              </div>
            </div>
            <p>
              Bangalore's trusted pilgrimage tour operator since {contactInfo.establishedYear}. We specialize in customized and group flight/train tours to Shirdi, Kashi, Ayodhya, Puri, and Chardham with complete VIP darshan arrangements.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
              <button
                className="btn-gold"
                style={{ fontSize: '13px', padding: '6px 14px' }}
                onClick={() => onOpenEnquiry("Callback Request")}
              >
                Request Callback
              </button>
            </div>
            {/* Social Media Links */}
            <div className="footer-social-row">
              <a
                href="https://share.google/SyTVK9ImgMPvcO0un"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn footer-social-google"
                aria-label="Google Reviews"
                title="See our Google Reviews"
              >
                <Star size={16} />
              </a>
              <a
                href="https://www.instagram.com/radianttravels82?igsi=NmZucWlmeGxueDhn"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn footer-social-instagram"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.youtube.com/@radiantairticketsandexpedition"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn footer-social-youtube"
                aria-label="YouTube"
                title="Watch us on YouTube"
              >
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#shirdi-packages">Shirdi Tour Packages</a></li>
              <li><a href="#kashi-packages">Kashi & Ayodhya Tours</a></li>
              <li><a href="#special-packages">Special Tour Packages</a></li>
              <li><a href="#destinations">Holy Destinations</a></li>
              <li><a href="#reviews">Google Reviews (4.8 ★)</a></li>
              <li><a href="#gallery">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Tours */}
          <div className="footer-col">
            <h3>Popular Yatras</h3>
            <ul className="footer-links-list">
              <li><a href="#shirdi-packages" onClick={() => onOpenEnquiry("One Day Shirdi Tour")}>One Day Shirdi Flight Tour</a></li>
              <li><a href="#shirdi-packages" onClick={() => onOpenEnquiry("Shirdi 2 Days Tour")}>Shirdi 2 Days VIP Darshan</a></li>
              <li><a href="#kashi-packages" onClick={() => onOpenEnquiry("Kashi & Ayodhya Tour")}>Kashi & Ayodhya 3 Days Tour</a></li>
              <li><a href="#kashi-packages" onClick={() => onOpenEnquiry("Kashi, Gaya, Ayodhya")}>Kashi Gaya Ayodhya (6 Days)</a></li>
              <li><a href="#special-packages" onClick={() => onOpenEnquiry("Puri Jagannath Tour")}>Puri Jagannath Tour</a></li>
              <li><a href="#special-packages" onClick={() => onOpenEnquiry("Gujarat Dwarka Tour")}>Gujarat Dwarka & Somnath</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="footer-col">
            <h3>Bangalore Office</h3>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <strong>Booking Helpline:</strong>
                <div>{contactInfo.phone1.name}: <a href={`tel:${contactInfo.phone1.tel}`} style={{ color: 'var(--color-accent)' }}>{contactInfo.phone1.number}</a></div>
                <div>{contactInfo.phone2.name}: <a href={`tel:${contactInfo.phone2.tel}`} style={{ color: 'var(--color-accent)' }}>{contactInfo.phone2.number}</a></div>
                <div>{contactInfo.phone3.name}: <a href={`tel:${contactInfo.phone3.tel}`} style={{ color: 'var(--color-accent)' }}>{contactInfo.phone3.number}</a></div>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <strong>Email:</strong>
                <div><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={18} />
              <div>
                <strong>Location:</strong>
                <div>{contactInfo.address}</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} />
              <div>
                <strong>Timings:</strong>
                <div>Mon – Sun: 8:00 AM – 9:30 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Radient Expeditions. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://share.google/SyTVK9ImgMPvcO0un"
              target="_blank"
              rel="noreferrer"
              className="footer-bottom-social"
              aria-label="Google Reviews"
            >
              <Star size={14} /> Google Reviews
            </a>
            <span>•</span>
            <a
              href="https://www.instagram.com/radianttravels82?igsi=NmZucWlmeGxueDhn"
              target="_blank"
              rel="noreferrer"
              className="footer-bottom-social"
              aria-label="Instagram"
            >
              <InstagramIcon size={14} /> Instagram
            </a>
            <span>•</span>
            <a
              href="https://www.youtube.com/@radiantairticketsandexpedition"
              target="_blank"
              rel="noreferrer"
              className="footer-bottom-social"
              aria-label="YouTube"
            >
              <YoutubeIcon size={14} /> YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
