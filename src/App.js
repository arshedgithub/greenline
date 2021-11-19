import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import SigninBar from "./components/signinBar";
import NavBar from "./components/navBar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <SigninBar />
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
