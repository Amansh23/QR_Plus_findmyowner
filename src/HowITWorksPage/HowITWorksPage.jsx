import React from "react";
import "./How_it_works.css";
import NavBar from "../component/NavBar";
import HowITWorksBanner from "./HowITWorksBanner";
import "../component/common.css";
import HowItWorks from "../component/HowItWorks";
import CTA from "../component/CTA";
import DetailSteps from "./DetailSteps";
import Footer from "../component/Footer";

const HowITWorksPage = () => {
  return (
    <>
      <div className="how_main_container">
        <NavBar />
        <HowITWorksBanner />
        <HowItWorks />
        <CTA />
        <DetailSteps />
        <CTA />
        <Footer />
      </div>
      ;
    </>
  );
};

export default HowITWorksPage;
