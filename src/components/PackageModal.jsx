import React, { useState } from 'react';
import { X, Check, CheckCircle2, Calendar, MapPin, ShieldCheck, Clock, Users, PhoneCall, Send } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

export default function PackageModal({ pkg, onClose, onBookNow }) {
  const [passengers, setPassengers] = useState(2);
  const [selectedDate, setSelectedDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  if (!pkg) return null;

  const totalPrice = pkg.price * passengers;

  const getPackageWhatsAppUrl = () => {
    const text = `*Booking Request - Radiant Expeditions*\n\n` +
      `📍 *Package:* ${pkg.title}\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      (formData.email ? `✉️ *Email:* ${formData.email}\n` : '') +
      `👥 *Passengers:* ${passengers}\n` +
      (selectedDate ? `📅 *Preferred Date:* ${selectedDate}\n` : '') +
      `💰 *Estimated Total:* Rs.${totalPrice.toLocaleString('en-IN')}/-\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '');
    return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and contact phone number.');
      return;
    }
    // Automatically open WhatsApp with the complete booking details sent to 090199 85906
    const waUrl = getPackageWhatsAppUrl();
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-card" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className="duration-pill" style={{ position: 'static' }}>{pkg.duration}</span>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#16a34a', background: '#dcfce7', padding: '4px 10px', borderRadius: '4px' }}>
            Direct Flight / Train from Bangalore
          </span>
        </div>

        <h2 style={{ fontSize: '26px', color: 'var(--color-dark-navy)', marginBottom: '8px' }}>
          {pkg.title}
        </h2>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '20px' }}>
          <span style={{ fontSize: '15px', color: '#64748b' }}>Starts at</span>
          <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--color-primary)' }}>
            {pkg.priceDisplay}
          </span>
          <span style={{ fontSize: '13px', color: '#64748b' }}>/ per person (All inclusive)</span>
        </div>

        {/* Image & Key Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
          <img
            src={pkg.image}
            alt={pkg.title}
            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' }}
          />
          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--color-dark-navy)', marginBottom: '10px' }}>
              ✨ Tour Highlights
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {(pkg.highlights || []).map((h, i) => (
                <li key={i} style={{ fontSize: '13.5px', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--color-primary)" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Day-wise Itinerary */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', color: 'var(--color-dark-navy)', marginBottom: '14px' }}>
            📅 Detailed Day-Wise Itinerary
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(pkg.itinerary || []).map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#f8fafc',
                  borderLeft: '4px solid var(--color-primary)',
                  padding: '14px 16px',
                  borderRadius: '0 8px 8px 0'
                }}
              >
                <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '14px', marginBottom: '4px' }}>
                  {item.day}
                </div>
                <div style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }}>
          <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#166534', marginBottom: '8px' }}>
              ✓ Inclusions
            </h4>
            <ul style={{ listStyle: 'none', fontSize: '13px', color: '#14532d', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {(pkg.inclusions || []).map((inc, i) => (
                <li key={i}>• {inc}</li>
              ))}
            </ul>
          </div>

          <div style={{ background: '#fef2f2', padding: '16px', borderRadius: '8px', border: '1px solid #fecaca' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#991b1b', marginBottom: '8px' }}>
              ✕ Exclusions
            </h4>
            <ul style={{ listStyle: 'none', fontSize: '13px', color: '#7f1d1d', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {(pkg.exclusions || []).map((exc, i) => (
                <li key={i}>• {exc}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instant Booking / Pricing Calculator */}
        <div style={{ background: '#ffffff', border: '2px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
          <h3 style={{ fontSize: '17px', color: 'var(--color-dark-navy)', marginBottom: '16px' }}>
            Instant Quote & Booking Request
          </h3>

          {submitted ? (
            <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <CheckCircle2 size={40} color="#059669" style={{ margin: '0 auto 10px' }} />
              <h4 style={{ color: '#065f46', fontSize: '18px', marginBottom: '6px' }}>Booking Request Received!</h4>
              <p style={{ color: '#047857', fontSize: '14px' }}>
                Thank you <strong>{formData.name}</strong>! Our tour executive will contact you shortly on <strong>{formData.phone}</strong> with your customized itinerary and flight tickets.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
                <a
                  href={getPackageWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Open in WhatsApp
                </a>
                <button
                  className="btn-gold"
                  onClick={onClose}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Number of Pilgrims</label>
                  <select
                    className="form-select"
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'Persons'}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Preferred Travel Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#f8fafc', borderRadius: '8px', margin: '16px 0' }}>
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#334155' }}>
                  Estimated Total ({passengers} {passengers === 1 ? 'Person' : 'Persons'}):
                </span>
                <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--color-primary)' }}>
                  Rs.{totalPrice.toLocaleString('en-IN')}/-
                </span>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                  <Send size={16} /> Submit Booking Request
                </button>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(`Hi Radiant Expeditions, I am interested in ${pkg.title} for ${passengers} persons.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                  style={{ gap: '6px' }}
                >
                  WhatsApp Us
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
