import React from "react";

const Home = () => {
  window.addEventListener("scroll", () => console.log("scrolling"));

  return <h1 className="m-5">home</h1>;
};

export default Home;
