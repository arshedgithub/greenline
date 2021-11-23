import React from "react";
import FindDomain from "../components/findDomain";

const Home = () => {
  return (
    <React.Fragment>
      carousel
      <FindDomain />
      <div className="m-4 text-center">
        <p className="fs-2 fw-bolder"> Get Started with Just 650.00LKR</p>
        <p className="text-muted">
          There are no additional costs or risks. We guarantee 99.9% uptime and
          100% customer satisfaction when using our services.
        </p>
      </div>
      <div className="packages">
        <div>
          <table className="table"></table>
        </div>
      </div>
      <div className="m-auto text-center">
        <p className="fs-3 fw-bolder">
          How to build your Website Online Today?
        </p>
      </div>
      <div className="m-auto text-center">
        <p className="fs-3 fw-bolder">Frequently Asked Question (FAQ)</p>
      </div>
    </React.Fragment>
  );
};

export default Home;
