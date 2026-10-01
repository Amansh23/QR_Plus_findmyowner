import React from "react";
import "./common.css";

const Reviews = () => {
  return (
    <div className="Review_main_container">
      <div className="section-header center">
        <div className="section-tag">Client Reviews</div>
        <h2 className="section-title">Loved By 50,000+ Vehicle Owners</h2>
        <p className="section-sub">
          Real stories from real customers across India.
        </p>
      </div>
      <div className="reviews-grid fade-up">
        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review-text">
            "Someone used the QR tag to contact me when my car was blocking
            their driveway. Resolved in 5 minutes — no tow truck drama. Worth
            every rupee!"
          </p>
          <div className="reviewer">
            <div
              className="reviewer-avatar"
              // style="background:#524FD5"
            >
              RS
            </div>
            <div>
              <div className="reviewer-name">Rahul Sharma</div>
              <div className="reviewer-role">Mumbai • Car Owner</div>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review-text">
            "The emergency SOS feature is incredible. After my accident, a
            bystander scanned my bike tag and my family was notified within
            seconds. Literally saved my life."
          </p>
          <div className="reviewer">
            <div
              className="reviewer-avatar"
              // style="background:#e0533d"
            >
              PK
            </div>
            <div>
              <div className="reviewer-name">Priya Kumar</div>
              <div className="reviewer-role">Bangalore • Bike Owner</div>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review-text">
            "I love that my number is completely private. I get WhatsApp
            messages about parking situations without anyone actually knowing
            who I am. Perfect product!"
          </p>
          <div className="reviewer">
            <div
              className="reviewer-avatar"
              // style="background:#059669"
            >
              AM
            </div>
            <div>
              <div className="reviewer-name">Arjun Mehta</div>
              <div className="reviewer-role">Delhi • Fleet Manager</div>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review-text">
            "Ordered for my entire company fleet of 12 cars. Setup was
            effortless and the analytics dashboard helps us track our vehicles
            efficiently. Highly recommend!"
          </p>
          <div className="reviewer">
            <div
              className="reviewer-avatar"
              // style="background:#7c3aed"
            >
              SK
            </div>
            <div>
              <div className="reviewer-name">Sunita Kapoor</div>
              <div className="reviewer-role">Hyderabad • Business Owner</div>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review-text">
            "The tag survived a monsoon season without fading at all. Superb
            quality. The video call feature is something no competitor offers —
            truly next level."
          </p>
          <div className="reviewer">
            <div
              className="reviewer-avatar"
              // style="background:#dc2626"
            >
              VR
            </div>
            <div>
              <div className="reviewer-name">Vikram Rao</div>
              <div className="reviewer-role">Chennai • Car Owner</div>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review-text">
            "Super fast delivery and easy setup. My building society now
            recommends ParkQR to all residents. Finally a solution that actually
            works for Indian parking chaos!"
          </p>
          <div className="reviewer">
            <div
              className="reviewer-avatar"
              // style="background:#0891b2"
            >
              NP
            </div>
            <div>
              <div className="reviewer-name">Neha Patel</div>
              <div className="reviewer-role">Pune • Apartment Resident</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
