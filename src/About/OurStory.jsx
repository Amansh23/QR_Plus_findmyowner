import React from "react";
import "./About.css";

const OurStory = () => {
  return (
    <div className="our_story_container">
      <div className="about-grid">
        <div>
          <div className="section-tag">Our Story</div>
          <h2 className="section-title">Born Out Of Parking Frustration</h2>
          <p className="our_story_para">
            In 2022, our founder Ankit Jain couldn't leave his apartment
            building because a random car was blocking his gate — with no
            contact information. That 45-minute delay sparked an idea.
          </p>
          <p className="our_story_para">
            We built ParkQR to solve a problem that affects millions of Indians
            every single day. Our mission is simple: make it easy and safe for
            any vehicle owner to be reached — without sacrificing their privacy.
          </p>
          <div className="about-values">
            <div className="value-item">
              <div className="value-num">1</div>
              <div>
                <div className="value-title">Privacy First</div>
                <p className="value-text">
                  Your personal number is never exposed. We use encrypted relay
                  technology to keep you safe.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-num">2</div>
              <div>
                <div className="value-title">Built for India</div>
                <p className="value-text">
                  Weatherproof for monsoons, designed for Indian vehicles,
                  priced for every pocket.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-num">3</div>
              <div>
                <div className="value-title">Life-Saving Technology</div>
                <p className="value-text">
                  Our emergency SOS feature is not a gimmick — it's saved real
                  lives. That drives everything we build.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="team-visual">
            <div className="team-stat">50K+</div>
            <div className="team-stat-label">Happy Customers Across India</div>
            <div className="team-avatars">
              <div
                className="team-avatar"
                //   style="background:#524FD5"
              >
                AJ
              </div>
              <div className="team-avatar2">SK</div>
              <div className="team-avatar3">MR</div>
              <div className="team-avatar4">PP</div>
              <div className="team-avatar5">RG</div>
            </div>
            <div className="teamcontent_text">
              Team of 20 across Bangalore, Mumbai & Delhi
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">2022</div>
                <div className="stat-label">Founded</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">28</div>
                <div className="stat-label">Cities Served</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Avg Rating</div>
              </div>

              <div className="stat-card">
                <div className="stat-number stat-number-sos">200+</div>
                <div className="stat-label">SOS Assists</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
