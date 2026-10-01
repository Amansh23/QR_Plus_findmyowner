import React, { useState } from "react";
import "./common.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavLinks = ({ mobile }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className={mobile ? "nav_option_container_flex" : "nav_option_container"}
    >
      <Link
        className={
          mobile ? "nav_option_element_ismobile" : "nav_option_element"
        }
        to="/"
      >
        <span>Home</span>
      </Link>
      <div
        className="nav_project_wrapper"
        onClick={() => setDropdown(!dropdown)}
      >
        <Link
          className={
            mobile
              ? "nav_option_element_ismobile "
              : "nav_option_element_animated"
          }
        >
          <span>Projects</span>
          <FontAwesomeIcon
            className={
              mobile
                ? "project_dropdown_icon project_dropdown_icon_left"
                : "project_dropdown_icon"
            }
            icon={faChevronDown}
          />
        </Link>
        {dropdown && (
          <div className={mobile ? "mobile_dropdown_div" : "dropdown_div"}>
            <Link
              to={"/Car_Product"}
              className={
                mobile ? "mobile_dropdown_div_element" : "dropdown_div_element"
              }
            >
              🚗 Car Tags
            </Link>

            <Link
              to={"/Bike_Product"}
              className={
                mobile ? "mobile_dropdown_div_element" : "dropdown_div_element"
              }
            >
              🏍️ Bike Tags
            </Link>
          </div>
        )}
      </div>
      <Link
        className={
          mobile ? "nav_option_element_ismobile" : "nav_option_element"
        }
        to={"/Aboutus"}
      >
        <span>About Us</span>
      </Link>
      <Link
        to={"/how-it-works"}
        className={
          mobile ? "nav_option_element_ismobile" : "nav_option_element"
        }
      >
        <span>How It Works</span>
      </Link>
      <Link
        to={"/use-case"}
        className={
          mobile ? "nav_option_element_ismobile" : "nav_option_element"
        }
      >
        <span>Use Cases</span>
      </Link>
      <Link
        to={"/FAQ"}
        className={
          mobile ? "nav_option_element_ismobile" : "nav_option_element"
        }
      >
        <span>FAQ</span>
      </Link>
    </div>
  );
};

export default NavLinks;
