import React from "react";
import Button from "./button";
import "./servicePackages.css";

const Package = ({
  heading,
  bg,
  price,
  oldPrice,
  link,
  ssd,
  transfer,
  subdomains,
  db,
  mailBoxes,
  ftp,
  features,
  buildingTools,
  marketingTools,
  guarantee,
  moneyBack,
}) => {
  return (
    <div className="package col border text-center m-2 rounded p-0">
      <p className="fs-5 fw-bolder m-3">{heading}</p>
      <div className={bg}>
        <div className="container text-light py-3">
          <p className="mb-0">
            <span className="fs-1 fw-bolder">Rs.{price}</span>
            <span className="fw-light">&nbsp;/Yr</span>
          </p>
          <p className="fw-light" style={{ fontSize: "2vh" }}>
            Regularly Rs.{oldPrice}
          </p>
          {/* <button className="btn btn-light text-secondary border-0 fw-bold px-4">
            READ MORE
          </button> */}
          <Button value="READ MORE" />
        </div>
      </div>
      <table
        className="table table-striped"
        style={{ borderCollapse: "collapse" }}
      >
        <tbody>
          <tr>
            <td>{ssd} SSD Storage</td>
          </tr>
          <tr>
            <td>{transfer}/Mo Transfer</td>
          </tr>
          <tr>
            <td>Host 1 Websites</td>
          </tr>
          <tr>
            <td>{subdomains} Subdomains</td>
          </tr>
          <tr>
            <td>{db} Databases</td>
          </tr>
          <tr>
            <td>{mailBoxes} Mail Boxes</td>
          </tr>
          <tr>
            <td>{ftp} FTP Accounts</td>
          </tr>
          <tr>
            <td>Remote FTP & Databases</td>
          </tr>
          <tr>
            <td>Fully Equipped with cPanel</td>
          </tr>
          <tr>
            <td>PHP Functions enabled</td>
          </tr>
          <tr>
            <td>DDoS Protection</td>
          </tr>
          <tr>
            <td>Web Application Firewall (WAF)</td>
          </tr>
          <tr>
            <td>Spam/Malware Protection</td>
          </tr>
          <tr>
            <td>{features}</td>
          </tr>
          <tr>
            <td>{buildingTools} Site Building Tools</td>
          </tr>
          <tr>
            <td>{marketingTools} Marketing & SEO Tools</td>
          </tr>
          <tr>
            <td>{guarantee}% Service Uptime Guarantee</td>
          </tr>
          <tr>
            <td>{moneyBack}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ServicePackages = () => {
  return (
    <div className="container">
      <div className="row w-100">
        <Package
          heading="BASIC - STARTER"
          bg="bg-secondary"
          price="650"
          oldPrice="850"
          link=""
          ssd="2GB"
          transfer="500GB"
          subdomains="10"
          db="10"
          mailBoxes="10"
          ftp="5"
          features="Limited Technical Support"
          buildingTools="No"
          marketingTools="NO"
          guarantee="99.9"
          moneyBack="Cheap Price"
        />
        <Package
          heading="BUSINESS - BUSINESS"
          bg="bg-secondary"
          price="2150"
          oldPrice="2200"
          link=""
          ssd="12GB"
          transfer="1TB"
          subdomains="30"
          db="30 MySQL"
          mailBoxes="100"
          ftp="5"
          features="Unlimited Features"
          buildingTools="Free"
          marketingTools="Free"
          guarantee="99.9"
          moneyBack="15 Day Money Back Guarantee"
        />
        <Package
          heading="MANAGED - ADVANCE"
          bg="bg-green"
          price="3100"
          oldPrice="3400"
          link=""
          ssd="Unlimited"
          transfer="Unlimited"
          subdomains="Unlimited"
          db="Unlimited MySQL"
          mailBoxes="Unlimited"
          ftp="Unlimited"
          features="All Unlimited Features"
          buildingTools="Free"
          marketingTools="Free"
          guarantee="99.9"
          moneyBack="15 Day Money Back Guarantee"
        />
        <Package
          heading="CLOUD - FASTEST SILVER"
          bg="bg-secondary"
          price="12500"
          oldPrice="15000"
          link=""
          ssd="10GB"
          transfer="Unlimited"
          subdomains="10"
          db="10 MySQL"
          mailBoxes="10"
          ftp="10"
          features="Unlimited Features"
          buildingTools="Free"
          marketingTools="Free"
          guarantee="100"
          moneyBack="15 Day Money Back Guarantee"
        />
      </div>
    </div>
  );
};

export default ServicePackages;
