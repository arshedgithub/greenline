import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarList from "./navbarList";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  window.addEventListener("resize", () => setMobileMenu(false));

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom shadow-sm bg-white"
      style={{ position: "sticky", top: 0, opacity: 0.98 }}
    >
      <div className="container-fluid ">
        <Link className="navbar-brand mb-2" to="/home">
          logo
        </Link>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
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
          <NavbarList mobileMenu={mobileMenu} />
        </div>
      </div>
      {/* {mobileMenu ? <NavbarList mobileMenu={mobileMenu} /> : ""} */}
    </nav>
  );
};

export default NavBar;
