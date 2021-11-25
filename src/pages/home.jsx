import React from "react";
import Button from "../components/button";
import FindDomain from "../components/findDomain";
import ServicePackages from "../components/servicePackages";

const greenText = { color: "rgb(11, 197, 27)" };
const Home = () => {
  return (
    <React.Fragment>
      carousel
      <FindDomain />
      <div className="m-4 text-center">
        <p className="fs-3 fw-bolder">Get Started with Just 650.00LKR</p>
        <p className="text-muted">
          There are no additional costs or risks. We guarantee 99.9% uptime and
          100% customer satisfaction when using our services.
        </p>
      </div>
      <ServicePackages />
      <div className="m-5 text-center">
        <div className="fs-3 fw-bolder">
          <p>Get online instantly with simple pricing.</p>
          <p>
            WHMCS <span className="fw-normal">HOSTING</span>
          </p>
        </div>
        <p className="text-muted">
          WHMCS is the leading, all-in-one client billing and support management
          solution. Meaning, it handles Account Creation, Suspension &
          Termination, Support Tickets, and Knowledge Base, Payment Tracking and
          Statistical Reports, and Customizable Control Panel (With Templates).
        </p>
        <p className="fs-4 fw-light">
          For More{" "}
          <span className="fw-bold fs-1" style={greenText}>
            Information
          </span>
        </p>
        <Button value={"CLICK HERE"} />
      </div>
      <div className="m-5 text-center py-4">
        <div>
          <p className="fs-3 fw-bolder">Reseller Domain</p>
          <p className="fs-5 fw-light">Instantly starts selling Domains</p>
        </div>
        <p className="text-muted">
          WHMCS is the leading, all-in-one client billing and support management
          solution. Meaning, it handles Account Creation, Suspension &
          Termination, Support Tickets, and Knowledge Base, Payment Tracking and
          Statistical Reports, and Customizable Control Panel (With Templates).
        </p>
        <p className="fs-4">
          Starts as low cost as{" "}
          <span className="fs-1 fw-bold" style={greenText}>
            1800LKR
          </span>
        </p>
        <Button value={"READ MORE"} />
      </div>
      <div className="m-5 text-center">
        <div>
          <p className="fs-3 fw-bolder">Reseller Hosting</p>
          <p className="fs-5 fw-light">Your own Web hosting business</p>
        </div>
        <p className="text-muted">
          Our flexible reseller hosting plans support you to create unique
          hosting plans with unlimited disk space, ample bandwidth ad complete
          email solutions. WHM / cPanel is included with every plan and provides
          an intuitive GUI to guide you through the process of website hosting,
          one-click install scripts, and customer support.
        </p>
        <p className="fs-4 fw-light">
          For More{" "}
          <span className="fw-bold fs-1" style={greenText}>
            Information
          </span>
        </p>
        <Button value={"CLICK HERE"} />
      </div>
      <div className="m-auto text-center">
        <p className="fs-3 fw-bolder">
          How to build your Website Online Today?
        </p>
      </div>
      <div className="bg-light p-2 text-center">
        <iframe
          src="https://youtube.com/embed/WRdQo5pNqB0?autoplay=1&mute=1&loop=1"
          frameBorder="0"
          width="300"
          height="200"
        />
      </div>
      <div className="my-5 text-center">
        <p className="fs-3 fw-bolder">Frequently Asked Question (FAQ)</p>
        <div className="row row-cols-2">
          <div className="col">col1</div>
          <div className="col">col2</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
