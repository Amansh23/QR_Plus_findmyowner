import React from "react";

const TrustBar = () => {
  return (
    <section className="trust_container">
      <div className="container">
        <div className="trust-bar fade-up">
          <div className="trust-item">
            <div className="trust-num">50,000+</div>
            <div className="trust-label">Tags Delivered Pan-India</div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-num">200+</div>
            <div className="trust-label">Emergency SOS Assists</div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-num">8+</div>
            <div className="trust-label">Product Categories</div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-num">4.9★</div>
            <div className="trust-label">Customer Rating</div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-num">2–3 Days</div>
            <div className="trust-label">All-India Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
