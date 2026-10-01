import React from "react";
import { Link } from "react-router-dom";

const BikeProductSection = () => {
  return (
    <div className="center product_section_container">
      <div className="section-tag">Our Bike Tags</div>
      <h2 className="section-title">Smart Tags For Every Rider</h2>
      <p className="section-sub">
        Compact form factor, maximum protection. Every tag comes with our full
        feature set.
      </p>
      <div className="tags-grid">
        <div className="tag-card">
          <div className="tag-visual tag-visual-bike">🏍️</div>
          <div className="tag-info">
            <div className="tag-name">Motorbike Tag</div>
            <p className="tag-desc">
              Compact and vibration-proof. Designed to mount on your bike's
              number plate or handle. Waterproof and dustproof for all
              conditions.
            </p>
            <div className="tag-specs">
              <span className="spec-pill">7×5 cm</span>
              <span className="spec-pill">Vibration-proof</span>
              <span className="spec-pill">IP67 Rated</span>
              <span className="spec-pill">₹249</span>
            </div>
            <Link className="btn btn-primary text_d_none max_width_150">
              Order Now
            </Link>
          </div>
        </div>
        <div className="tag-card">
          <div className="tag-visual tag-visual-bike">🛵</div>
          <div className="tag-info">
            <div className="tag-name">Scooter & E-Bike Tag</div>
            <p className="tag-desc">
              Perfectly sized for scooters and electric bikes. Easy
              peel-and-stick installation. Ideal for daily commuters in city
              traffic.
            </p>
            <div className="tag-specs">
              <span className="spec-pill">6×4 cm</span>
              <span className="spec-pill">E-Bike Ready</span>
              <span className="spec-pill">City Edition</span>
              <span className="spec-pill">₹249</span>
            </div>
            <Link className="btn btn-primary text_d_none max_width_150">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeProductSection;
