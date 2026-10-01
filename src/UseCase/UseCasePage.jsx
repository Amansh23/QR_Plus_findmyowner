import React from "react";
import "./UseCase.css";
import NavBar from "../component/NavBar";
import UseCasePoster from "./UseCasePoster";
import "../component/common.css";
import UseCaseContent from "./UseCaseContent";
import CTAUseCase from "./CTAUseCase";
import Footer from "../component/Footer";

const UseCasePage = () => {
  return (
    <div className="use_case_main_container">
      <NavBar />
      <UseCasePoster />
      <UseCaseContent />
      <CTAUseCase />
      <Footer />
    </div>
  );
};

export default UseCasePage;
