import React from "react";
import "./UseCase.css";
import { Link } from "react-router-dom";

const CTAUseCase = () => {
  return (
    <div className="cta-banner section-alt">
      <h2>Your Use Case Covered</h2>
      <p>
        No matter how you use it, ParkQR has a plan that fits. Try it risk-free
        with our 30-day guarantee.
      </p>
      <div className="cta-btns">
        <Link className="btn btn-white btn-lg text_d_none margin-top_20  ">
          Order Your Tag Now
        </Link>
      </div>
    </div>
  );
};

export default CTAUseCase;
