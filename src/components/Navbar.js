import React, { useState } from "react";
import "./css/Navbar.css";
import Search from "./Search";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [showNav, setShowNav] = useState("none")
  const toggleNavShow = () => {
    if (showNav === "none") {
      setShowNav("flex")
    } else {
      setShowNav("none")
    }
  }

  return (
    <nav id="nav-container">
      <section className="top-container">
        <img src="images/code4ct-logo-1.jpg" alt="" />

        <div id="hamburger" onClick={toggleNavShow}>
          <Hamburger />
        </div>
      </section>

    <section className="nav-content" style={{ display: showNav }}>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <Search />
      </section>
    </nav>
  );
};

export default Navbar;
