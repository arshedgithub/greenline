import React from "react";
import NavbarList from "./navbarList";

const MobileMenu = () => {
  return (
    <div
      className="menu bg-light p-5 h-100"
      style={{ zIndex: 3, position: "fixed", top: 0, right: 0 }}
    >
      <NavbarList />
    </div>
  );
};

export default MobileMenu;
