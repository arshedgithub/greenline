import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import NotFound from "./pages/notFound";
import SigninBar from "./components/signinBar";
import MobileMenu from "./components/mobileMenu";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  window.addEventListener("resize", () => setMobileMenu(false));

  return (
    <React.Fragment>
      <SigninBar />
      <NavBar menuClick={() => setMobileMenu(true)} />
      {mobileMenu ? <MobileMenu close={() => setMobileMenu(false)} /> : ""}
      <div className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
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
