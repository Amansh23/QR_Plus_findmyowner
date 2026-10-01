import React from "react";
import NavBar from "../component/NavBar";
import "./About.css";
import "../component/common.css";
import AboutusPoster from "./AboutusPoster";
import OurStory from "./OurStory";
import MissionSuccess from "./MissionSuccess";
import CTA from "../component/CTA";
import TagMember from "./TagMember";

import Footer from "../component/Footer";
const About = () => {
  return (
    <div className="about_main_conatiner">
      <NavBar />
      <AboutusPoster />
      <OurStory />
      <MissionSuccess />
      <CTA />
      <TagMember />
      <CTA />
      <Footer />
    </div>
  );
};

export default About;
