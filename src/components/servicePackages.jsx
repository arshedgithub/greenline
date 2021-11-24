import React from "react";

const Package = () => {
  return (
    <div className="border flex-fill text-center m-2">
      <div className="bg-secondary">
        <span className="fs-1 fw-bolder text-light">Rs.650</span>
      </div>
      <table
        className="table table-striped"
        style={{ borderCollapse: "collapse" }}
      >
        <tbody>
          <tr>
            <th>2GB SSD Storage</th>
          </tr>
          <tr>
            <th>500GB/Mo Transfer</th>
          </tr>
          <tr>
            <th>Host 1 Websites</th>
          </tr>
          <tr>
            <th>10 Subdomains</th>
          </tr>
          <tr>
            <th>10 Databases</th>
          </tr>
          <tr>
            <th>10 Mail Boxes</th>
          </tr>
          <tr>
            <th>5 FTP Accounts</th>
          </tr>
          <tr>
            <th>Remote FTP & Databases</th>
          </tr>
          <tr>
            <th>Fully Equipped with cPanel</th>
          </tr>
          <tr>
            <th>PHP Functions enabled</th>
          </tr>
          <tr>
            <th>DDoS Protection</th>
          </tr>
          <tr>
            <th>Web Application Firewall (WAF)</th>
          </tr>
          <tr>
            <th>Spam/Malware Protection</th>
          </tr>
          <tr>
            <th>Limited Technical Support</th>
          </tr>
          <tr>
            <th>NO Site Building Tools</th>
          </tr>
          <tr>
            <th>NO Marketing & SEO Tools</th>
          </tr>
          <tr>
            <th>99.9% Service Uptime</th>
          </tr>
          <tr>
            <th>Cheap Price</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ServicePackages = () => {
  return (
    <div className="d-inline-flex w-100 p-4">
      <Package />
      <Package />
      <Package />
      <Package />
    </div>
  );
};

export default ServicePackages;
