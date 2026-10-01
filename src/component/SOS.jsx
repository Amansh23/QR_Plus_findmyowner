import React from "react";
import { Link } from "react-router-dom";

const SOS = () => {
  return (
    <div className="emergency_wrapper_container">
      <div className="emergency-wrap">
        <div className="emergency-grid">
          <div className="section-tag_sos">🆘 Life-Saving Feature</div>
          <h2 className="section-title_sos">
            Emergency SOS
            <br />
            In One Scan
          </h2>
          <p className="emergency-grid_para">
            In accidents, medical crises, or missing-person situations, our SOS
            feature lets bystanders instantly notify your emergency contacts —
            no app needed.
          </p>
          <ul className="elist">
            <li>
              <div className="echk">✓</div> Emergency contacts notified
              instantly via SMS & WhatsApp
            </li>
            <li>
              <div className="echk">✓</div> Blood group & allergy info shown for
              paramedics
            </li>
            <li>
              <div className="echk">✓</div> One-tap ambulance & police call
              buttons
            </li>
            <li>
              <div className="echk">✓</div> GPS location shared with responders
            </li>
            <li>
              <div className="echk">✓</div> Works for pets, elderly parents &
              children too
            </li>
          </ul>
          <div>
            <Link
              className="btn btn-white btn-lg text_d_none em_button"
              // href="products.html"
            >
              Activate Emergency Feature →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOS;
