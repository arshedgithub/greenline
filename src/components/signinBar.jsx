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
      <div className="call text-light mx-2">
        <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;(+94) 11-7112-599
      </div>
      <div className="call text-light mx-2">
        <FontAwesomeIcon icon={faEnvelope} /> &nbsp;info@greenline.lk
      </div>
      <Link to="#">
        <button className="signBtn btn border border-white text-light mx-2">
          <FontAwesomeIcon icon={faUser} /> &nbsp;login
        </button>
      </Link>
    </nav>
  );
};

export default SigninBar;
