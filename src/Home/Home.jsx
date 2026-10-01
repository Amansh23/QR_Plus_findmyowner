import React from "react";
import "./Home.css";
import NavBar from "../component/NavBar";
import Poster from "../component/Poster";
import TrustBar from "../component/TrustBar";
import HowItWorks from "../component/HowItWorks";
import CTA from "../component/CTA";
import SOS from "../component/SOS";
import Pricing from "../component/Pricing";
import IndiaBest from "../component/IndiaBest";
import Features from "../component/Features";
import Reviews from "../component/Reviews";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <div className="home_main_conatiner">
        <NavBar />
        <Poster />
        <TrustBar />
        <HowItWorks />
        <CTA />
        <SOS />
        <Pricing />
        <div className="padding_wrapper">
          <CTA />
        </div>
        <IndiaBest />
        <Features />
        <Reviews />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;
