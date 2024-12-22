import React from "react";
import css from "./Nav.module.css";

const Nav: React.FC = () => {
  const closeNav = () => {
    const nav = document.querySelector(".navbar-collapse");
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className={`bi bi-buildings ${css.orangeColor} me-4`}></i>
          Edifice
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link " href="#home" onClick={closeNav}>
              Home
            </a>
            <a className="nav-link" href="#aboutus" onClick={closeNav}>
              About
            </a>
            <a className="nav-link" href="#projects" onClick={closeNav}>
              Projects
            </a>
            <a className="nav-link" href="#services" onClick={closeNav}>
              Services
            </a>
            <a className="nav-link" href="#pricing" onClick={closeNav}>
              Pricing
            </a>
            <a className="nav-link" href="#testimonials" onClick={closeNav}>
              Testimonials
            </a>
            <a className="nav-link" href="#news" onClick={closeNav}>
              News
            </a>
            <a className="nav-link" href="#location" onClick={closeNav}>
              Location
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
