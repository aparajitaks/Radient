import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/packagesData';

const faqs = [
  {
    id: 1,
    question: "What pilgrimage tour packages are offered from Bangalore by Radiant Expeditions?",
    answer: "Radiant Expeditions offers all-inclusive group and customized flight and train tour packages from Bangalore to Shirdi Sai Baba, Kashi-Ayodhya-Prayagraj-Gaya, Chardham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath), Tirupati Balaji, Rameshwaram, Dwarka-Somnath, and Puri Jagannath."
  },
  {
    id: 2,
    question: "Are VIP darshan tickets and accommodation included in the packages?",
    answer: "Yes, our pilgrimage packages include confirmed VIP / special entry darshan tickets wherever applicable, comfortable star hotel accommodations, AC transfers, and dedicated tour coordination."
  },
  {
    id: 3,
    question: "Do you offer pure vegetarian food on group tours?",
    answer: "Yes, our group yatras feature delicious, freshly prepared South Indian pure vegetarian meals catered especially for families and senior citizen devotees."
  },
  {
    id: 4,
    question: "Can packages be customized for senior citizens and family groups?",
    answer: "Absolutely. We specialize in hassle-free senior-citizen-friendly itineraries with minimal walking, wheelchair assistance on request, direct flights, and flexible pace."
  },
  {
    id: 5,
    question: "How do I book a tour or request a custom quote?",
    answer: "You can request a free callback through our online enquiry form, chat with us on WhatsApp at +91 90199 85906, or visit our office at Arehalli, Banashankari, Bangalore."
  },
  {
    id: 6,
    question: "Which transport options are available from Bangalore?",
    answer: "We provide both direct flight tour packages (Bengaluru Kempegowda International Airport) and scenic train/AC coach packages depending on your travel preference and budget."
  }
];

export default function FAQSection({ onOpenEnquiry }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-title-wrap text-center">
          <span className="faq-badge">
            <HelpCircle size={14} /> Got Questions?
          </span>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about our pilgrimage yatras, bookings, darshan arrangements, and hotel stays from Bangalore.
          </p>
        </div>

        <div className="faq-accordion-grid">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`faq-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-ans-${faq.id}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`}
                  />
                </button>
                <div
                  id={`faq-ans-${faq.id}`}
                  className={`faq-answer-wrap ${isOpen ? 'expanded' : ''}`}
                >
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Support Card */}
        <div className="faq-support-card">
          <div className="faq-support-info">
            <h3>Still have questions?</h3>
            <p>Our pilgrimage travel consultants are available 7 days a week to assist you.</p>
          </div>
          <div className="faq-support-actions">
            <button
              className="btn-gold"
              onClick={() => onOpenEnquiry && onOpenEnquiry('General FAQ Enquiry')}
            >
              Ask an Expert
            </button>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hello Radiant Expeditions, I have a few questions about your tour packages.')}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ gap: '8px' }}
            >
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
