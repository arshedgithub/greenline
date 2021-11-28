import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavbarList from "./navbarList";

const MobileMenu = ({ close }) => {
  return (
    <div
      className="menu bg-light p-5 h-100"
      style={{ zIndex: 3, position: "fixed", top: 0, right: 0 }}
    >
      <div style={{ top: 25, right: 25, position: "fixed" }} onClick={close}>
        <FontAwesomeIcon className="fs-3" icon={faTimesCircle} />
      </div>
      <NavbarList />
    </div>
  );
};

export default MobileMenu;
