import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="content m-5 text-center">
      <p className="fs-5">The page you are looking for is unavailable</p>
      <Link to="/home">
        <button className="btn btn-secondary">Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
