import React from "react";
import { Link } from "react-router-dom";
import "country-flag-icons/react/3x2";
import { IN } from "country-flag-icons/react/3x2"; // IN

const CTA = () => {
  return (
    <div className=" cta_main_conatiner ">
      <section className="cta-section section-pad">
        <div className="badge">🚀 Start Today</div>
        <h2>Ready to Park Smarter?</h2>
        <p>
          Join 50,000+ vehicle owners who've upgraded to smart parking. Delivery
          in 2–3 days, all over India.
        </p>
        <div className="cta-actions">
          <Link href="#" className="btn btn-white btn-lg text_d_none">
            Shop Now 🛒
          </Link>
          <Link
            href="#"
            className="btn btn-outline btn-lg watch_demo text_d_none"
          >
            Watch Demo →
          </Link>
        </div>
        <div className="cta_flag">
          <span
            style={{
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            ✓ Made in India
          </span>
          <IN title="India" style={{ width: "32px" }} />
        </div>
      </section>
    </div>
  );
};

export default CTA;
