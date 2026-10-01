import React from "react";
import NavBar from "../component/NavBar";
import "./FAQ.css";
import FAQ_poster_banner from "./Faq_poster_banner";
import FAQ_Section from "./Faq_Section";
import CTA from "../component/CTA";
import Footer from "../component/Footer";

const FAQ = () => {
  return (
    <div className="FAQ_main_container">
      <NavBar />
      <FAQ_poster_banner />
      <FAQ_Section />
      <CTA />
      <Footer />
    </div>
  );
};

export default FAQ;
