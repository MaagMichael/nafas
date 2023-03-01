import React from "react";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="">
      <div className="logo">
        <img src="/images/Logo Nafas.jpg" alt="Nafas logo" />
      </div>

      <div className="text-and-navbar">
        <h3>Orientales Catering nach Ihren Wünschen</h3>
        <div className="navbar-text">
          <a href="#home" className="">
            Start
          </a>
          <a href="#products" className="">
            Produkte
          </a>
          <a href="#events" className="">
            Veranstaltungen
          </a>
          <a href="#about" className="">
            Über uns
          </a>
          <a href="#contact" className="">
            Anfrage
          </a>
        </div>
      </div>
    </nav>
  );
}
