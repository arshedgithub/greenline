import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ menuClick }) => {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom shadow-sm bg-white"
      style={{ position: "sticky", top: 0, opacity: 0.98, zIndex: 3 }}
    >
      <div className="container-fluid ">
        <Link className="navbar-brand mb-2" to="/home">
          logo
        </Link>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          onClick={menuClick}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fs-4 text-light">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="me-auto"></div>
          {/* <NavbarList mobileMenu={mobileMenu} /> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
