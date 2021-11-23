import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signinBar.css";
import {
  faEnvelope,
  faPhoneAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const fontSize = { fontSize: "2.5vh" };

const SigninBar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <div className="contact">
          <div className="text-light me-3">
            <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;
            <span style={fontSize}>(+94) 11-7112-599</span>
          </div>
          <div className="text-light">
            <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
            <span style={fontSize}>info@greenline.lk</span>
          </div>
        </div>
        <div>
          <Link to="https://manage.greenline.lk/login" target="_blank">
            <button className="signBtn btn border border-white text-light mx-2">
              <FontAwesomeIcon icon={faUser} /> &nbsp;
              <span className={fontSize}>login</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SigninBar;
