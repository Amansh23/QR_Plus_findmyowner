import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const TagMember = () => {
  return (
    <div className="tagmember_main_container">
      <div className="team-header">
        <span className="badge">Meet the Team</span>
        <h2>
          The People Behind <span>ParkQR</span>
        </h2>
        <p>
          A scrappy team of 20 across Bangalore, Mumbai & Delhi — obsessed with
          making Indian roads safer, one scan at a time.
        </p>
        <div className="stat-strip">
          <div className="stat-pill">
            <strong>20+</strong>
            <span>Team Members</span>
          </div>
          <div className="stat-pill">
            <strong>3</strong>
            <span>Cities</span>
          </div>
          <div className="stat-pill">
            <strong>50K+</strong>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>

      <div className="team-grid">
        <div className="team-card accent-purple founder-card">
          <div className="avatar-wrap">
            <div className="avatar av-indigo">RG</div>
          </div>
          <div className="card-name">Rahul Gupta</div>
          <span className="founder-label">🚀 Founder &amp; CEO</span>
          <p className="card-bio">
            Owns our NFC + QR dual-tech stack and the SOS emergency relay that's
            saved 200+ lives.
          </p>
          <div className="tags">
            <span className="tag">React Native</span>
            <span className="tag">Node.js</span>
            <span className="tag">NFC</span>
          </div>
          <div className="card-divider"></div>
          <div className="card-city">Bangalore</div>
          <div className="social-row">
            <Link className="soc-btn">
              <svg viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </Link>
            <Link
              className="soc-btn"
              // aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="team-card accent-purple">
          <div className="avatar-wrap">
            <div className="avatar av-indigo">RG</div>
          </div>
          <div className="card-name">Rahul Gupta</div>
          <div className="card-role">Lead Engineer</div>
          <p className="card-bio">
            Owns our NFC + QR dual-tech stack and the SOS emergency relay that's
            saved 200+ lives.
          </p>
          <div className="tags">
            <span className="tag">React Native</span>
            <span className="tag">Node.js</span>
            <span className="tag">NFC</span>
          </div>
          <div className="card-divider"></div>
          <div className="card-city">Bangalore</div>
          <div className="social-row">
            <Link
              className="soc-btn"
              // aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </Link>
            <Link
              className="soc-btn"
              // aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="team-card accent-purple">
          <div className="avatar-wrap">
            <div className="avatar av-indigo">RG</div>
          </div>
          <div className="card-name">Rahul Gupta</div>
          <div className="card-role">Lead Engineer</div>
          <p className="card-bio">
            Owns our NFC + QR dual-tech stack and the SOS emergency relay that's
            saved 200+ lives.
          </p>
          <div className="tags">
            <span className="tag">React Native</span>
            <span className="tag">Node.js</span>
            <span className="tag">NFC</span>
          </div>
          <div className="card-divider"></div>
          <div className="card-city">Bangalore</div>
          <div className="social-row">
            <Link
              className="soc-btn"
              // aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </Link>
            <Link
              className="soc-btn"
              // aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="team-card accent-purple">
          <div className="avatar-wrap">
            <div className="avatar av-indigo">RG</div>
          </div>
          <div className="card-name">Rahul Gupta</div>
          <div className="card-role">Lead Engineer</div>
          <p className="card-bio">
            Owns our NFC + QR dual-tech stack and the SOS emergency relay that's
            saved 200+ lives.
          </p>
          <div className="tags">
            <span className="tag">React Native</span>
            <span className="tag">Node.js</span>
            <span className="tag">NFC</span>
          </div>
          <div className="card-divider"></div>
          <div className="card-city">Bangalore</div>
          <div className="social-row">
            <Link
              className="soc-btn"
              // aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </Link>
            <Link
              className="soc-btn"
              // aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagMember;
