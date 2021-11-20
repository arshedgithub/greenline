import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SigninBar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <div className="text-light">
          <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;
          <span className="fs-6">(+94) 11-7112-599</span>
        </div>
        <div className="text-light text-start">
          <FontAwesomeIcon icon={faEnvelope} /> &nbsp;info@greenline.lk
        </div>
        <Link to="https://manage.greenline.lk/login" target="_blank">
          <button className="signBtn btn border border-white text-light mx-2">
            <FontAwesomeIcon icon={faUser} /> &nbsp;login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default SigninBar;
