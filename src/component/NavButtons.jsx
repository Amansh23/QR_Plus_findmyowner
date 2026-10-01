import React from "react";
import "./common.css";
import { useNavigate } from "react-router-dom";

const NavButtons = ({ mobile }) => {
  const navigate = useNavigate();

  const handleLoginNavigation = () => {
    navigate("/Login");
  };

  return (
    <div className={mobile ? "nav-cta-button-container" : "nav-cta"}>
      <button className={mobile ? "nav-cta-button" : "btn btn-primary"}>
        Get Your Tag
      </button>

      <button className={mobile ? "nav-cta-button" : "btn btn-outline"}>
        📞 Contact Us
      </button>

      <button
        onClick={handleLoginNavigation}
        className={mobile ? "nav-cta-button" : "btn btn-outline"}
      >
        Log In
      </button>
    </div>
  );
};

export default NavButtons;
