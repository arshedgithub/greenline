import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ value, link = "#" }) => {
  return (
    <Link to={link}>
      <button className="btn btn-light fw-bold px-4">{value}</button>
    </Link>
  );
};

export default Button;
