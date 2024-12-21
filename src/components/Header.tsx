import React from "react";

const Header = () => {
  return (
    <header id="home" className="home">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner text-light text-center">
          <div className="carousel-item carousel-img-one active">
            <div className="carousel-caption h-100 p-5 d-flex flex-column justify-contend-end justify-content-md-center align-items-center"></div>
            <div className="hero-shadow"></div>
          </div>
          <div className="carousel-item carousel-img-two ">
            <div className="carousel-caption h-100 p-5 d-flex flex-column justify-contend-end justify-content-md-center align-items-center"></div>
            <div className="hero-shadow"></div>
          </div>
          <div className="carousel-item carousel-img-three ">
            <div className="carousel-caption h-100 p-5 d-flex flex-column justify-contend-end justify-content-md-center align-items-center"></div>
            <div className="hero-shadow"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
