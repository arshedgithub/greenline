import React from "react";
import Button from "./button";

const Tabs = () => {
  return (
    <div className="m-5 text-center">
      <p className="fs-4 fw-bold">What more we offer</p>

      <div className="row px-5">
        <div className="col">
          <Button value={"WEBSITES"} />
        </div>
        <div className="col">
          <Button value={"RESELLER"} />
        </div>
        <div className="col">
          <Button value={"DOMAINS"} />
        </div>
        <div className="col">
          <Button value={"POS"} />
        </div>
        <div className="col">
          <Button value={"GATEWAYS"} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
