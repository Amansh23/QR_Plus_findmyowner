import React, { useEffect, useState } from "react";
import "./common.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;

      if (!mobile) {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="NavBar_main_container">
      <Link to="/" className="nav_logo">
        <div className="nav_logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm11 0h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-8h2v2h-2v-2zm4 0h2v2h-2v-2z" />
          </svg>
        </div>
        <span>
          <strong>FindMyOwner</strong>
          <small>Smart Lost &amp; Found QR</small>
        </span>
      </Link>
      <NavLinks mobile={false} />
      <NavButtons mobile={false} />
      <div
        className="hamburger_container"
        onClick={() => setIsMobile(!isMobile)}
      >
        <FontAwesomeIcon
          className="project_dropdown_icon bganimate"
          icon={faBars}
        />
      </div>
      <div
        className={`hamburger_menu_container ${
          isMobile ? "hamburger_menu_open" : ""
        }`}
      >
        <NavLinks mobile={isMobile} />
        <NavButtons mobile={isMobile} />
      </div>
    </div>
  );
};

export default NavBar;
