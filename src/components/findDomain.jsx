import React from "react";

const FlexItem = ({ domain, price }) => {
  return (
    <div className="flex-fill bd-highlight p-2 shadow">
      <span className="fw-bolder">{domain}&nbsp;</span>
      <span className="fw-lighter">{price}LKR</span>
    </div>
  );
};

const FindDomain = () => {
  return (
    <div className="my-5 text-center bg-dark p-3">
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
      <div className="d-flex flex-wrap text-light fs-5 mt-3">
        <FlexItem domain=".lk" price="2750" />
        <FlexItem domain=".com" price="1720" />
        <FlexItem domain=".net" price="2100" />
        <FlexItem domain=".org" price="2200" />
        <FlexItem domain=".info" price="1950" />
        <div className="fw-lighter p-3" style={{ fontSize: "2vh" }}>
          *All prices per annum
        </div>
      </div>
    </div>
  );
};

export default FindDomain;
