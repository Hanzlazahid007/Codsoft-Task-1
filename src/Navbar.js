import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "@fontsource/poppins";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Home from "./Home";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <p className="h">
            H<span className="z">Z.</span>
          </p>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#title">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <p className="contact">
            <a className="yellow" href="#contact">
              Contact
            </a>{" "}
            |
          </p>
          <FaFacebook className="icon-links" />
          <FaLinkedin className="icon-links" />
          <FaInstagram className="icon-links" />
        </div>
        <FaBars className="bars" />
      </nav>
      <Home />
    </>
  );
};

export default Navbar;
