import React, { useState } from "react";

const Faq_Section = () => {
  const faqData = [
    {
      question: "Is my phone number visible when someone scans?",
      answer:
        "No! Your real number is always hidden. When someone scans your QR and calls, they reach you through our secure virtual number bridge. Your private number is never shown to anyone.",
    },
    {
      question: "Does the person scanning need any app?",
      answer:
        "No app needed for the finder! Any smartphone camera can scan the QR code and it opens instantly in the browser. Your phone may have an app for managing your tags.",
    },
    {
      question: "What if I change my mobile number or sell my vehicle?",
      answer:
        "Simply log in to your QRPark dashboard and update your information. The sticker stays on your vehicle, but the details behind the QR update instantly. No need to buy a new tag.",
    },
    {
      question: "How long does the sticker last?",
      answer:
        "Our stickers use military-grade 3M adhesive and UV-resistant laminate. They are tested to last 5+ years in Indian weather conditions including monsoon rain, direct sunlight and heat up to 80°C.",
    },
    {
      question: "Is there a monthly subscription fee?",
      answer:
        "The basic plan is a one-time purchase with free forever access to your dashboard, unlimited profile updates and basic contact features. Premium plans with advanced analytics start at ₹49/month.",
    },
    {
      question: "Do you offer bulk orders for businesses?",
      answer:
        "Yes! We offer special pricing for fleets, logistics companies, housing societies and corporates. Orders of 10+ get 20% discount, 50+ get 35% discount. Contact us on WhatsApp for custom quotes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <div className="FAQ_section_container center">
      <div className="badge">❓ FAQs</div>

      <h2 className="section-title">Frequently Asked Questions</h2>

      <p className="section-sub">Everything you need to know about QRPark.</p>

      <div className="faq-list">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div className={`faq-item ${isOpen ? "open" : ""}`} key={index}>
              <div className="faq-q" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>

                <span className="arrow">▾</span>
              </div>
              <div className="faq-answer-wrapper">
                <div className="faq-a">{faq.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq_Section;
