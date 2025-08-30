import React from "react";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">PG Finder</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Rooms</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
