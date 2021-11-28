import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./tabs.css";

const btns = ["websites", "reseller", "domains", "pos", "gateways"];
const contents = [
  {
    img: "",
    title: "Innovative new ways of internet marketing, SEO, and Web design.",
    desc: "With a fresh, user-friendly and modern design and relevant digital marketing strategies, our goal is to create websites that drive your business forward. We listen to your business goals and develop an online strategy from the ground up – from logo design to website creation and Google marketing of your website – we offer a comprehensive service to interest and convert your visitors into profitable leads and sales, increase brand awareness and help grow your business.",
    link: "#",
  },
  {
    img: "",
    title:
      "We provide you with all the things you need to start your own hosting business.",
    desc: "Reseller web hosting is a service that allows you to own a web hosting business without having to go through server management procedures. Reseller web hosting is suits for entrepreneurs and web designers who need one or more shared web hosting accounts for different sites and would like to have full control over each account. The main benefit of ordering reseller accounts is saving money by bulk ordering accounts.",
    link: "#",
  },
  {
    img: "",
    title:
      "Buy a domain name by choosing from all the most popular top-level domains (TLDs)",
    desc: "A domain name is just a human-readable application of an IP address. In a function, it is the destination that you enter in your web browser to visit a website such as www.youtube.com It is very easy to buy a domain name with greenline.lk. Just use the search bar at the top of this page to check domain availability, then follow the instructions to complete the domain registration process.",
    link: "#",
  },
  {
    img: "",
    title:
      "Many of Sri Lanka’s top retailers rely on Green POS on a daily basis to support their business.",
    desc: "You don’t need extra hands to manage additional sales channels. We integrate your online business with Green POS. View sales orders received on the site directly from the POS and process shipments. Synchronize inventory and pricing information from your brick-and-mortar store to your online store. Take control of your online business and run it professionally.",
    link: "#",
  },
  {
    img: "",
    title:
      "SMS is an easy and effective way to reach prospects and clients. We’d love to talk about how we can assist you.",
    desc: "Provide timely, personalized information via SMS alerts, reminders, notifications, invitations, one-time passwords (OTP), and other automated texts directly from websites or mobile apps. Experience enhanced user engagement, satisfaction levels, customer lifetime value (CLV), and faster growth.",
    link: "#",
  },
];

const Btn = ({ txt, onclick }) => {
  return (
    <div className="tab col">
      <button id={txt} className="tabBtn btn btn-light" onClick={onclick}>
        {txt.toUpperCase()}
      </button>
    </div>
  );
};

const Content = ({ content }) => {
  return (
    <div className="bg-light m-2 p-2">
      <img src={content.img} className="text-center" alt="img" />
      <div className="text-left p-3">
        <h5 className="py-2">{content.title}</h5>
        <p>{content.desc}</p>
        <Link to={content.link}>
          <button className="greenBtn">LEARN MORE</button>
        </Link>
      </div>
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState("websites");
  const [index, setIndex] = useState(0);

  const onclick = (e) => {
    setSelected(e.target.id);
    for (let i = 0; i < btns.length; i++) {
      if (btns[i] === selected) setIndex(i);
    }
  };

  return (
    <div className="my-5">
      <p className="fs-4 fw-bold text-center">What more we offer</p>

      <div className="tab-container row mx-1">
        {btns.map((txt) => (
          <Btn key={txt} txt={txt} onclick={onclick} />
        ))}
      </div>
      <Content content={contents[index]} />
    </div>
  );
};

export default Tabs;
