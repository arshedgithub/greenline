import React from "react";
import Button from "../components/button";
import FindDomain from "../components/findDomain";
import Question from "../components/question";
import ServicePackages from "../components/servicePackages";

const greenText = { color: "rgb(11, 197, 27)" };
const questions = [
  [
    "Do I have to pay in advance ?",
    "The first thing you need to consider when comparing two plans with the same price is the pay structure. Some plans require you to pay one year in advance, while others allow you to pay monthly. This can be the biggest difference in startup costs. It’s important to note that the more you pay in advance, the lower your monthly rate will be.",
  ],
  [
    "How can I find the best hosting plan",
    "Before you start your comparison journey, you have to decide what type of web host will suit your needs as a person. Your primary choices are Shared, Reseller, VPS, WordPress, Cloud and Dedicated Hosting.",
    "If you are just getting started online and don’t have many websites, then you can start comparing cheap Shared Hosting plans. If you want more freedom in your hosting account, you can opt for the more powerful VPS hosting plan instead. Finally, if you are very serious about your online success and want the best of the best, you should compare Dedicated Hosting plans.",
  ],
  [
    "Why are web servers important ?",
    "Web servers are critical elements of the Internet, as every website needs one to function. Basically, web servers are computers that are responsible for transferring data from a website to a site visitor’s computer. Without a web server, your website would not exist because there would be no place to store data and send it to your visitors’ computer.",
    "There are many web servers available in the market, each designed to meet different customer needs. If you want your site to perform optimally, you will need an appropriate web server. Make sure you are familiar with web servers and their use before you start using the network.",
  ],
  [
    "What kind of hosting is the cheapest ?",
    "If you need a cheap web hosting plan to get started on the Internet, you might want to consider the shared hosting option. Shared web hosting is the cheapest form of web hosting with rates starting at 650LKR per year.",
  ],
];
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
      <div className="my-5">
        <p className="fs-3 fw-bolder text-center">
          Frequently Asked Question (FAQ)
        </p>
        <div className="row row-cols-1 row-cols-sm-2 mx-3">
          {questions.map((q) => (
            <Question key={q[0]} question={q} />
          ))}
        </div>
      </div>
      <div className="my-5 text-center">
        <p className="fs-4 fw-bold">What more we offer</p>
        tabs
      </div>
      <div className="my-5 text-center bg-light py-4">
        <p className="text-muted p-0">Hosted over 1000 websites</p>
        <p className="fs-4 fw-bold">Get your website online today</p>
      </div>
      <div className="my-5 text-center">
        <p className="fs-4 fw-bold">The Cutting Edge Technologies</p>
      </div>
    </React.Fragment>
  );
};

export default Home;
