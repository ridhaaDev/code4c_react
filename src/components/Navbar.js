import React, { useState } from "react";
import "./css/Navbar.css";
import Search from "./Search";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [showNav, setShowNav] = useState("inline");

  const handleClick = (e) => {};

  return (
    <nav id="main-container">
      <img src="images/code4ct-logo-1.jpg" alt="" />

      <div id="hamburger" onClick={handleClick}>
        <Hamburger />
      </div>

      <ul style={{ display: showNav }}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Courses</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <Search showNav={showNav} />
    </nav>
  );
};

export default Navbar;
