import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbarList.css";

const ListItem = ({ value, page }) => {
  return (
    <li className="nav-item p-2">
      <NavLink className="nav-link text-dark" to={page}>
        {value}
      </NavLink>
    </li>
  );
};

const NavbarList = () => {
  return (
    <ul className="navbar-nav">
      <ListItem value="HOME" page="/home" />
      <ListItem value="HOSTING" page="#" />
      <ListItem value="DOMAIN" page="#" />
      <ListItem value="SERVICES" page="#" />
      <ListItem value="PRODUCTS" page="#" />
      <ListItem value="CONTACT" page="/contact" />
      <ListItem value="ABOUT US" page="/about" />
      <ListItem value="SHOP" page="/shop" />
    </ul>
  );
};

export default NavbarList;
