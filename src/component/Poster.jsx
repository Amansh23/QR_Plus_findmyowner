import React from "react";
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <section className="hero">
      <div className="hero-dots"></div>
      <div className="hero-circle1"></div>
      <div className="hero-circle2"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot"></div>India's #1 Smart QR Tag Company
            </div>
            <h1>
              Smart QR Tags
              <br />
              For
              <span>Every Moment</span>
              <br />
              Of Your Life
            </h1>
            <p>
              Vehicles, home doors, keychains, pets, luggage & more — our
              weatherproof QR tags keep you connected with complete privacy and
              emergency protection.
            </p>
            <div className="hero-actions">
              <Link
                className="btn btn-white btn-lg text_d_none"
                href="products.html"
              >
                🏷️ Explore All Products
              </Link>
              <Link
                className="btn btn-ghost btn-lg text_d_none"
                href="how-it-works.html"
              >
                How It Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;

// import React from "react";
// import "./common.css";

// const Poster = () => {
//   return (
//     <div className="Poster_main_container">
//       <div className="poster_left_container">
//         <div className="poster_left_container_subheading_container">
//           <div className="poster_left_container_circle"></div>
//           <span>India's #1 Smart QR Tag Company</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Poster;
