import React from "react";

const Features = () => {
  return (
    <div className="features_container">
      <div className="section-header center">
        <div className="section-tag">Features</div>
        <h2 className="section-title">Everything You Need. Nothing You Don't.</h2>
        <p className="section-sub">
          ParkQR is packed with features that protect your privacy and keep you
          connected.
        </p>
      </div>
      <div className="features-grid fade-up">
        <div className="feature-card">
          <div className="feat-icon">🛡️</div>
          <div className="feat-title">Waterproof & Durable Tags</div>
          <p className="feat-desc">
            Our tags are UV-resistant, scratch-proof, and built to withstand
            rain, sun, and Indian road conditions. Lifetime durability
            guaranteed.
          </p>
          <span className="feat-badge">Military Grade</span>
        </div>
        <div className="feature-card">
          <div className="feat-icon">🔒</div>
          <div className="feat-title">100% Privacy Protection</div>
          <p className="feat-desc">
            Your real phone number is never shown. Scanners contact you through
            our encrypted relay — you stay completely anonymous until you choose
            to share.
          </p>
          <span className="feat-badge">Encrypted</span>
        </div>
        <div className="feature-card">
          <div className="feat-icon">📞</div>
          <div className="feat-title">Masked Calls</div>
          <p className="feat-desc">
            Receive calls from strangers about your vehicle without revealing
            your number. Block callers, set call hours, and control who can
            reach you.
          </p>
          <span className="feat-badge">Private</span>
        </div>
        <div className="feature-card">
          <div className="feat-icon">📹</div>
          <div className="feat-title">Video Calls</div>
          <p className="feat-desc">
            Let anyone initiate a video call directly from the QR scan page. See
            the situation with your own eyes before deciding how to respond.
          </p>
          <span className="feat-badge">Real-time</span>
        </div>
        <div className="feature-card">
          <div className="feat-icon">💬</div>
          <div className="feat-title">WhatsApp Integration</div>
          <p className="feat-desc">
            One tap opens WhatsApp to contact you — no number shared. Send
            photos, messages, or location for easier communication in parking
            situations.
          </p>
          <span className="feat-badge">Instant</span>
        </div>
        <div className="feature-card">
          <div className="feat-icon">🆘</div>
          <div className="feat-title">Emergency SOS</div>
          <p className="feat-desc">
            A dedicated emergency button alerts your family, shows blood group,
            and dials emergency services — a true lifesaver in accidents.
          </p>
          <span className="feat-badge">Life-Saving</span>
        </div>
        <div className="feature-card">
          <div className="feat-icon">🌐</div>
          <div className="feat-title">No App Required</div>
          <p className="feat-desc">
            Scanners don't need to download any app. Works on any smartphone
            browser instantly — maximum reach, zero friction.
          </p>
          <span className="feat-badge">Universal</span>
        </div>
        <div className="feature-card">
          <div className="feat-icon">⏰</div>
          <div className="feat-title">Call Scheduling</div>
          <p className="feat-desc">
            Set active hours for when you can be reached. After-hours scans show
            a custom message and let people leave a callback request.
          </p>
          <span className="feat-badge">Smart</span>
        </div>
        <div className="feature-card">
          <div className="feat-icon">📊</div>
          <div className="feat-title">Scan Analytics</div>
          <p className="feat-desc">
            Know when, where, and how often your QR was scanned. Get notified in
            real-time every time someone views your tag profile.
          </p>
          <span className="feat-badge">Insights</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
