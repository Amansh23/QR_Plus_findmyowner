import React from "react";

const Pricing = () => {
  return (
    <div className="Pricing_container">
      <div className="badge">💰 Transparent Pricing</div>
      <h2 className="section-title">Best Value in India</h2>
      <p className="section-sub text-center margin_bottom_40">
        Compare us honestly with alternatives. No hidden fees. Pay once, use
        forever.
      </p>
      <div
        className="pricing-grid "
        //   style={{ marginTop: "48px" }}
      >
        <div className="pricing-card competitor" data-aos>
          <div
            className="pricing-logo"
            //   style="color:#888"
          >
            Sticker Bros
          </div>
          <div
          //   style="font-size:0.8rem;color:#aaa;margin-bottom:8px"
          >
            Basic QR Sticker
          </div>
          <div
            className="pricing-price"
            //   style="color:#666"
          >
            ₹599 <span>/tag</span>
          </div>
          <p className="pricing-desc">
            Just a QR sticker. No privacy, no features.
          </p>
          <ul className="pricing-features">
            <li>
              <span className="cross">✗</span> Privacy / Masked Calls
            </li>
            <li>
              <span className="cross">✗</span> Emergency SOS
            </li>
            <li>
              <span className="cross">✗</span> WhatsApp Integration
            </li>
            <li>
              <span className="cross">✗</span> Scan Notifications
            </li>
            <li>
              <span className="cross">✗</span> Update Details
            </li>
            <li>
              <span className="cross">✗</span> Language Support
            </li>
          </ul>
          <button
            className="btn btn-secondary"
            //   style="width:100%;justify-content:center"
          >
            Not Recommended
          </button>
        </div>
        <div className="pricing-card popular" data-aos>
          <div className="popular-badge">⭐ Best Value</div>
          <div
            className="pricing-logo"
            //   style="color:var(--primary)"
          >
            🔐 QRPark
          </div>
          <div
          //   style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:8px"
          >
            Smart QR Tag
          </div>
          <div className="pricing-price">
            ₹299 <span>/tag</span>
          </div>
          <p className="pricing-desc">
            Full-featured smart tag with lifetime dashboard.
          </p>
          <ul className="pricing-features">
            <li>
              <span className="check">✓</span> Privacy / Masked Calls
            </li>
            <li>
              <span className="check">✓</span> Emergency SOS Alert
            </li>
            <li>
              <span className="check">✓</span> WhatsApp Integration
            </li>
            <li>
              <span className="check">✓</span> Real-time Scan Alerts
            </li>
            <li>
              <span className="check">✓</span> Update Details Forever
            </li>
            <li>
              <span className="check">✓</span> 12+ Indian Languages
            </li>
          </ul>
          <a
            href="pages/products.html"
            className="btn btn-primary"
            //   style="width:100%;justify-content:center"
          >
            Buy Now →
          </a>
        </div>
        <div className="pricing-card competitor" data-aos>
          <div
            className="pricing-logo"
            //   style="color:#888"
          >
            Track & Tell
          </div>
          <div
          //   style="font-size:0.8rem;color:#aaa;margin-bottom:8px"
          >
            GPS Tracker
          </div>
          <div
            className="pricing-price"
            //   style="color:#666"
          >
            ₹2,499 <span>/device</span>
          </div>
          <p className="pricing-desc">
            GPS tracker. Needs charging. Monthly fees.
          </p>
          <ul className="pricing-features">
            <li>
              <span className="cross">✗</span> Needs Monthly Subscription
            </li>
            <li>
              <span className="cross">✗</span> Needs Charging
            </li>
            <li>
              <span className="check">✓</span> GPS Tracking
            </li>
            <li>
              <span className="cross">✗</span> No WhatsApp
            </li>
            <li>
              <span className="cross">✗</span> No Masked Calls
            </li>
            <li>
              <span className="cross">✗</span> Visible & Stealable
            </li>
          </ul>
          <button
            className="btn btn-secondary"
            //   style="width:100%;justify-content:center"
          >
            Overpriced
          </button>
        </div>
      </div>
      <div className="pricing_tag">
        <p
        //   style="color:var(--primary);font-weight:800;font-size:1.05rem;"
        >
          🎁 Combo Deal: Car + Bike QR Tags at just ₹499 (Save ₹99) · Free
          shipping on all orders!
        </p>
      </div>
    </div>
  );
};

export default Pricing;
