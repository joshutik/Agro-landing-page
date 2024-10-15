import React from "react";
import "./Navigation.css";
import logo from "../Assets/Logo.png";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="nav-btn">
          <button>Get Started</button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
