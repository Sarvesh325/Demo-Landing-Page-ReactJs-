import React from "react";
import Header from "./components/Header";
import "../src/App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import User from "./components/User";
import Github from "./components/Github";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="user/:userid" element={<User />} />
          <Route path="/github" element={<Github />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
