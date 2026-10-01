import React from "react";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <div className="center product_section_container">
      <div className="section-tag">Our Car Tags</div>
      <h2 className="section-title">Choose Your Car Tag Style</h2>
      <p className="section-sub">
        Available in multiple sizes and mounting options.
        <br /> All include the same powerful features.
      </p>
      <div className="tags-grid">
        <div className="tag-card">
          <div className="tag-visual tag-visual-car">🚙</div>
          <div className="tag-info">
            <div className="tag-name">Premium Car Tag</div>
            <p className="tag-desc">
              Metallic finish with QR engraving. Comes with a magnetic mount for
              easy attachment and removal. Premium look for premium vehicles.
            </p>
            <div className="tag-specs">
              <span className="spec-pill">8×8 cm</span>
              <span className="spec-pill">Metal Finish</span>
              <span className="spec-pill">Magnetic</span>
              <span className="spec-pill">₹599</span>
            </div>
            <Link className="btn btn-primary text_d_none max_width_150">
              Order Now
            </Link>
          </div>
        </div>
        <div className="tag-card">
          <div className="tag-visual tag-visual-car">🚐</div>
          <div className="tag-info">
            <div className="tag-name">School Van Tag</div>
            <p className="tag-desc">
              Specially designed for school vans and buses. Parents can directly
              contact the driver with masked calls. Includes child-safety
              emergency contacts.
            </p>
            <div className="tag-specs">
              <span className="spec-pill">Large Size</span>
              <span className="spec-pill">Child Safety</span>
              <span className="spec-pill">Parent Alert</span>
              <span className="spec-pill">₹399</span>
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

export default ProductSection;
