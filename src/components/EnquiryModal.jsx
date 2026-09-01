import React, { useState } from 'react';
import { X, Send, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { contactInfo, shirdiPackages, kashiPackages, specialPackages } from '../data/packagesData';

export default function EnquiryModal({ isOpen, onClose, initialPackage = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageInterest: initialPackage || 'Shirdi 2 Days Tour',
    travelDate: '',
    persons: '2',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const allPackageTitles = [
    "Special Discount Offer (Infant/Kids Free)",
    ...shirdiPackages.map(p => p.title),
    ...kashiPackages.map(p => p.title),
    ...specialPackages.map(p => p.title),
    "Customized Pilgrimage Package"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-card" style={{ maxWidth: '580px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <CheckCircle2 size={56} color="#16a34a" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '24px', color: 'var(--color-dark-navy)', marginBottom: '8px' }}>
              Enquiry Received Successfully!
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
              Thank you <strong>{formData.name}</strong>! Our pilgrimage expert has received your enquiry for <strong>{formData.packageInterest}</strong>. We will call you back on <strong>{formData.phone}</strong> within 15 minutes.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(`Hi Radient Expeditions, I submitted an enquiry for ${formData.packageInterest}. My name is ${formData.name}.`)}`}
                target="_blank" 
                rel="noreferrer"
                className="btn-primary"
              >
                Chat on WhatsApp
              </a>
              <button className="btn-gold" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Quick Assistance & Best Fare Guarantee
              </span>
              <h2 style={{ fontSize: '24px', color: 'var(--color-dark-navy)', marginTop: '4px' }}>
                Enquire for Pilgrimage Tour
              </h2>
              <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
                Fill out the form below or directly call our reservation desk.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email (Optional)</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Interested Tour Package</label>
                <select
                  className="form-select"
                  value={formData.packageInterest}
                  onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                >
                  {allPackageTitles.map((title, i) => (
                    <option key={i} value={title}>{title}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Approx Travel Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Number of Persons</label>
                  <select
                    className="form-select"
                    value={formData.persons}
                    onChange={(e) => setFormData({ ...formData, persons: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'Persons'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Specific Requirements / Message</label>
                <textarea
                  className="form-textarea"
                  rows="2"
                  placeholder="Senior citizens traveling, special puja requirements, hotel preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                  <Send size={16} /> Send Free Enquiry
                </button>
                <a
                  href={`tel:${contactInfo.phone1.tel}`}
                  className="btn-gold"
                  style={{ gap: '6px' }}
                >
                  <PhoneCall size={16} /> Call Now
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
