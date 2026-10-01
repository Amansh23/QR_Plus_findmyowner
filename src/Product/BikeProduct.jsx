import React from "react";
import NavBar from "../component/NavBar";
import ProductPoster from "./ProductPoster";
import BikeProductSection from "./BikeProductSection";
import ProductBanner from "./ProductBanner";
import Footer from "../component/Footer";

const BikeProduct = () => {
  return (
    <div className="Product_main_container">
      <NavBar />
      <ProductPoster />
      <BikeProductSection />
      <ProductBanner />
      <Footer />
    </div>
  );
};

export default BikeProduct;
