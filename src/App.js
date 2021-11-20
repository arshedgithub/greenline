import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import SigninBar from "./components/signinBar";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [scroll, setScroll] = useState(false);

  // window.addEventListener("scroll", () => {
  //   setScroll(true);
  //   setTimeout(() => setScroll(false), 3000);
  // });
  return (
    <React.Fragment>
      {/* {scroll ? <SigninBar /> : ""} */}
      <SigninBar />
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
