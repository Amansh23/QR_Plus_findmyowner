import React from "react";
import "./Product.css";

const ProductBanner = () => {
  return (
    <div className="cta-banner">
      <h2 className="ProductBanner_h2">Protect Your Car Today</h2>
      <p>Free delivery across India. 30-day money-back guarantee.</p>
      <div className="cta-btns">
        <a className="btn btn-white btn-lg text_d_none  ">
          Order Standard — ₹299
        </a>
        <a className="btn btn-lg product_banner_button text_d_none">
          Order Premium — ₹599
        </a>
      </div>
    </div>
  );
};

export default ProductBanner;
