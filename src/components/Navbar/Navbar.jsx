import React from 'react'
import "./Navbar.css";

export default function Navbar() {
  return (
     <nav className="navbar">

      <div className="logo">
        TS
      </div>

      <ul className="navLinks">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>

      <button className="contactBtn">
        Get In Touch
      </button>

    </nav>
  )
}
