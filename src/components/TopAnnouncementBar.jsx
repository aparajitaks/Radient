import React from 'react';
import { Phone, Star } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

const InstagramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
  </svg>
);


export default function TopAnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-marquee">
        <span>🚩 <strong>Package Starts @ 34500/- (3 Days)</strong></span>
        <span>|</span>
        <span>Direct Flights &amp; Train Packages Available with VIP Darshan</span>
      </div>
      <div className="announcement-contacts">
        <span>Contact:</span>
        <a href={`tel:${contactInfo.phone1.tel}`} className="contact-link">
          <Phone size={13} /> {contactInfo.phone1.name} - {contactInfo.phone1.number}
        </a>
        <span>|</span>
        <a href={`tel:${contactInfo.phone2.tel}`} className="contact-link">
          {contactInfo.phone2.name} - {contactInfo.phone2.number}
        </a>
        <span>|</span>
        <a href={`tel:${contactInfo.phone3.tel}`} className="contact-link">
          {contactInfo.phone3.name} - {contactInfo.phone3.number}
        </a>
        <span className="announcement-divider">|</span>
        <div className="announcement-socials">
          <a
            href="https://share.google/SyTVK9ImgMPvcO0un"
            target="_blank"
            rel="noreferrer"
            className="contact-link announcement-social-link"
            aria-label="Google Reviews"
            title="See our Google Reviews"
          >
            <Star size={13} /> Reviews
          </a>
          <a
            href="https://www.instagram.com/radianttravels82?igsi=NmZucWlmeGxueDhn"
            target="_blank"
            rel="noreferrer"
            className="contact-link announcement-social-link"
            aria-label="Instagram"
            title="Follow us on Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/@radiantairticketsandexpedition"
            target="_blank"
            rel="noreferrer"
            className="contact-link announcement-social-link"
            aria-label="YouTube"
            title="Watch us on YouTube"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
