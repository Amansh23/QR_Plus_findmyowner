import React from "react";
import "./Product.css";
import NavBar from "../component/NavBar";
import ProductPoster from "./ProductPoster";
import ProductSection from "./ProductSection";
import ProductBanner from "./ProductBanner";
import Footer from "../component/Footer";
const Product = () => {
  return (
    <div className="Product_main_container">
      <NavBar />
      <ProductPoster />
      <ProductSection />
      <ProductBanner />
      <Footer />
    </div>
  );
};

export default Product;
