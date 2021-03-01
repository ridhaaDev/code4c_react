import React, { useState } from "react";
import "./css/Navbar.css";
import Hamburger from "hamburger-react";
import useWindowDimensions from './hooks/useWindowDimensions'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const {height, width} = useWindowDimensions();

  const handleClick = (e) => {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };




  const showList = () => {
  
    if (showNav || width >= 768) {

        console.log("happened");
      return (
        <ul>
          <li>
            <a href="https://www.c-sharpcorner.com/UploadFile/736bf5/bootstrap-navigation-bar-with-toggle-button/</li>">Home</a>
          </li>
          <li>
            <a href="https://www.c-sharpcorner.com/UploadFile/736bf5/bootstrap-navigation-bar-with-toggle-button/</li>">About</a>
          </li>
          <li>
            <a href="https://www.c-sharpcorner.com/UploadFile/736bf5/bootstrap-navigation-bar-with-toggle-button/</li>">Courses</a>
          </li>
          <li>
            <a href="https://www.c-sharpcorner.com/UploadFile/736bf5/bootstrap-navigation-bar-with-toggle-button/</li>">Portfolio</a>
          </li>
          <li>
            <a href="https://www.c-sharpcorner.com/UploadFile/736bf5/bootstrap-navigation-bar-with-toggle-button/</li>">Contact</a>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav id="main-container">
      <img src="images/code4ct-logo-1.jpg" alt="" />

      <div id="hamburger" onClick={handleClick}>
        <Hamburger />
      </div>

      {showList()}
    </nav>


  );
};

export default Navbar;
