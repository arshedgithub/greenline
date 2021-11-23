import React from "react";

const FindDomain = () => {
  return (
    <div className="my-5 text-center bg-dark p-3 opacity-75">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="FIND Your Domain Online Now !"
          aria-label="FIND Your Domain Online Now !"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary bg-success text-light"
          style={{ fontSize: "2vh", maxWidth: "20vh" }}
          type="button"
          id="button-addon2"
        >
          CHECK AVAILABILITY
        </button>
      </div>
      <div className="d-flex"></div>
    </div>
  );
};

export default FindDomain;
