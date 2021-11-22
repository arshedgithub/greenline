import React from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import "./navbarList.css";

const ListItem = () => {
  return (
    <li className="nav-item p-2">
      <NavLink className="nav-link text-dark" to="/home">
        HOME
      </NavLink>
    </li>
  );
};

const NavbarList = ({ mobileMenu }) => {
  console.log("list");
  return (
    <ul className={mobileMenu ? "w-50 bg-primary" : "navbar-nav"}>
      mobileMenu? <MobileMenu /> : ''
      <li className="nav-item p-2">
        <NavLink className="nav-link text-dark" aria-current="page" to="/home">
          HOME
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className="nav-link text-dark" aria-current="page" to="#">
          HOSTING
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className="nav-link text-dark" aria-current="page" to="#">
          DOMAIN
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className="nav-link text-dark" aria-current="page" to="#">
          SERVICES
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className="nav-link text-dark"
          aria-current="page"
          to="/contact"
        >
          CONTACT
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className="nav-link text-dark" aria-current="page" to="/about">
          ABOUT US
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className="nav-link text-dark" aria-current="page" to="#">
          SHOP
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarList;
