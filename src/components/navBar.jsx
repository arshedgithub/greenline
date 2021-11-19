import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLaptop } from "@fortawesome/free-solid-svg-icons";
import NavbarList from "./navbarList";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  window.addEventListener("resize", () => setMobileMenu(false));

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <Link className="navbar-brand mb-2" to="/home">
          <FontAwesomeIcon icon={faLaptop} size="2x" />
          &nbsp;logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fs-3 text-light">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="me-auto"></div>
          <NavbarList mobileMenu={mobileMenu} />
        </div>
      </div>
      {mobileMenu ? <NavbarList mobileMenu={mobileMenu} /> : ""}
    </nav>
  );
};

export default NavBar;
