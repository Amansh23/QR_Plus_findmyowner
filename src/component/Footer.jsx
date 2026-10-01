import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_main_container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">
              <svg width="30" height="30" viewBox="0 0 24 24">
                <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm11 0h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-8h2v2h-2v-2zm4 0h2v2h-2v-2z" />
              </svg>
            </div>
            ParkQR
          </div>
          <p className="footer-desc">
            India's #1 smart QR parking tag solution. Protecting privacy,
            enabling connection, and saving lives — one scan at a time.
          </p>
          <div className="footer-social">
            <div className="social-btn">𝕏</div>
            <div className="social-btn">in</div>
            <div className="social-btn">f</div>
            <div className="social-btn">📷</div>
          </div>

          <div className="footer-col footer-contact">
            <h5>Contact Us</h5>
            <ul className="footer-links text_d_none">
              <li>
                <Link
                  className="text_d_none"
                  //   href="mailto:hello@parkqr.in"
                >
                  ✉️ hello@parkqr.in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-col">
          <h5>Products</h5>
          <ul className="footer-links">
            <li className="mobile-nav-sub">
              <Link
                className="text_d_none"
                //   href="./pages/products.html#car"
              >
                🚗 Car Tags
              </Link>
            </li>
            <li className="mobile-nav-sub">
              <Link
                className="text_d_none"
                //   href="./pages/products.html#bike"
              >
                🏍️ Bike Tags
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                Fleet Solutions
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                School Van Tags
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                Rider Safety Bundle
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul className="footer-links">
            <li>
              <Link
                className="text_d_none"
                //   href="./pages/aboutus.html"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="./pages/use_cases.html"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                Press Kit
              </Link>
            </li>
            <li>
              <Link to={"/FAQ"} className="text_d_none">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Support</h5>
          <ul className="footer-links">
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                Track Order
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="#"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className="text_d_none"
                //   href="mailto:hello@parkqr.in"
              >
                hello@parkqr.in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 ParkQR. Made with ❤️ in India.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
