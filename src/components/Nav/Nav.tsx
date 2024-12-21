import React from "react";
import css from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-5 fixed-top">
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
            <a className="nav-link active" href="#home">
              Home
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#pricing">
              Pricing
            </a>
            <a className="nav-link" href="#testimonials">
              Testimonials
            </a>
            <a className="nav-link" href="#news">
              News
            </a>
            <a className="nav-link" href="#location">
              Location
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
