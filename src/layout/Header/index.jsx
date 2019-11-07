import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <nav className="main-nav">
      <a href="/" className="main-nav__item main-nav__item--logo">
        <img src={logo} alt="logo" />
      </a>
      <Link className="main-nav__item main-nav__item--active" to="/">
        Home
      </Link>
      <Link className="main-nav__item" to="/">
        Services
      </Link>
      <Link className="main-nav__item" to="/">
        Product
      </Link>
      <Link className="main-nav__item" to="/">
        Contact
      </Link>
      <Link className="main-nav__item main-nav__item--signup" to="/">
        <span>Sign Up</span>
      </Link>
    </nav>
  );
};

export default Header;
