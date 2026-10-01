import React from "react";
import "./About.css";

import "country-flag-icons/react/3x2";
import { IN } from "country-flag-icons/react/3x2"; // IN

const MissionSection = () => {
  return (
    <div className="mission-grid">
      <div className="mission-values-container">
        <div className="value-card">
          <div className="value-icon">🔐</div>
          <div>
            <h3 className="value-title">Privacy First</h3>
            <p className="value-description">
              Your number is never shown. Always.
            </p>
          </div>
        </div>
        <div className="value-card">
          <IN title="India" className="value-icon" style={{ width: "32px" }} />

          <div>
            <h3 className="value-title">Built for Bharat</h3>
            <p className="value-description">
              12 Indian languages. Indian payment methods. Indian conditions.
            </p>
          </div>
        </div>
        <div className="value-card">
          <div className="value-icon">💰</div>

          <div>
            <h3 className="value-title">Affordable</h3>
            <p className="value-description">
              Starting ₹99. Safety shouldn't be a luxury.
            </p>
          </div>
        </div>
        <div className="value-card">
          <div className="value-icon">♻️</div>

          <div>
            <h3 className="value-title">Lifetime Value</h3>
            <p className="value-description">
              One tag, update details forever. No wastage.
            </p>
          </div>
        </div>
      </div>
      <div className="mission-right-container">
        <div className="badge">🎯 Our Mission</div>

        <h2 className="mission-right-container_h2">
          Connecting India,
          <br />
          One Scan at a Time
        </h2>

        <p className="mission-description">
          India has 300+ million registered vehicles, 32 million pets, and 800
          million smartphone users. Yet every day, thousands face avoidable
          problems — wrong parking fines, lost pets, missed deliveries, accident
          victims without ICE contacts.
        </p>

        <p className="mission-description">
          QRPark bridges this gap with simple, affordable, privacy-first QR
          technology that works for every Indian — in every language, in every
          city.
        </p>

        <div className="mission-stats">
          <div>
            <strong
              data-target="50000"
              data-suffix="+"
              className="mission-stat-number"
            >
              50,000+
            </strong>

            <span className="mission-stat-label">Happy Customers</span>
          </div>

          <div>
            <strong
              data-target="120"
              data-suffix="+"
              className="mission-stat-number"
            >
              120+
            </strong>

            <span className="mission-stat-label">Cities Covered</span>
          </div>

          <div>
            <strong
              data-target="200"
              data-suffix="+"
              className="mission-stat-number"
            >
              200+
            </strong>

            <span className="mission-stat-label">Pets Reunited</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
