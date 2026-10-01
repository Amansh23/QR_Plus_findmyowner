import React from "react";

const HowItWorks = () => {
  return (
    <div className="how_it_works_conatiner">
      <div className="section-header center">
        <div className="section-tag">Simple 3 Steps</div>
        <h2 className="section-title">How ParkQR Works</h2>
        <p className="section-sub">
          From purchase to protection in minutes. No app required for the
          scanner.
        </p>
      </div>
      <div className="steps-row fade-up">
        <div className="step-card">
          <div className="step-num">1</div>
          <div className="step-icon">🛒</div>
          <div className="step-title">Order Online</div>
          <p className="step-desc">
            Pick your tag type and quantity. We deliver a premium, weatherproof
            QR sticker to your door in 2–3 days.
          </p>
        </div>
        <div className="step-card">
          <div className="step-num">2</div>
          <div className="step-icon">📋</div>
          <div className="step-title">Register Your Tag</div>
          <p className="step-desc">
            Scan the tag and register your details on our secure platform —
            takes under 3 minutes. Set privacy preferences.
          </p>
        </div>
        <div className="step-card">
          <div className="step-num">3</div>
          <div className="step-icon">🏷️</div>
          <div className="step-title">Stick It On</div>
          <p className="step-desc">
            Peel and stick on your vehicle, door, keychain, pet collar, or bag.
            Premium 3M adhesive built for Indian weather.
          </p>
        </div>
        <div className="step-card">
          <div className="step-num">4</div>
          <div className="step-icon">✅</div>
          <div className="step-title">You're Protected</div>
          <p className="step-desc">
            Anyone who scans can contact you via call, WhatsApp, video, or SOS —
            your number stays completely private.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
