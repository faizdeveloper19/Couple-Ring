import React from "react";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images/logo.png" alt="Watch Logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Couple Sets</li>
        <li>Love Collection</li>
        <li>His & Hers</li>
        <li>Our Story</li>
        <li>Contact</li>
      </ul>

      <div className="icons">
        <FiShoppingBag className="icon" />
        <FiUser className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
