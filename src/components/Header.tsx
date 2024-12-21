import React from "react";

const Header = () => {
  return (
    <header id="home" className="home ">
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
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
            <div className="carousel-caption h-100 p-5 d-flex flex-column justify-content-center align-items-center text-uppercase">
              <h2 className="mb-3">Reliable Construction Services</h2>
              <p className="m-0">
                Edifice creates and implements sustainable construction projects
                for you.
              </p>
              <div className="buttons mt-5 d-flex flex-row flex-column flex-sm-row text-light ">
                <button type="button" className="btn btn-dark mb-4  mb-sm-0">
                  See services
                </button>
                <button type="button" className="btn orangeBgColor  ms-sm-5 text-light">
                  Contact us
                </button>
              </div>
            </div>
            <div className="hero-shadow"></div>
          </div>
          <div className="carousel-item carousel-img-two ">
            <div className="carousel-caption h-100 p-5 d-flex flex-column  justify-content-center align-items-center text-uppercase">
              <h2 className="mb-3">Edifice</h2>
              <p className="m-0">Experienced Construction Professionals</p>
              <div className="buttons mt-5 d-flex flex-row flex-column flex-sm-row ">
                <button type="button" className="btn btn-dark mb-4  mb-sm-0">
                  See services
                </button>
                <button type="button" className="btn orangeBgColor ms-sm-5 text-light">
                  Contact us
                </button>
              </div>
            </div>
            <div className="hero-shadow"></div>
          </div>
          <div className="carousel-item carousel-img-three ">
            <div className="carousel-caption h-100 p-5 d-flex flex-column  justify-content-center align-items-start text-start text-uppercase">
              <h2 className="mb-3">
                We can handle the most ambitious projects
              </h2>
              <button type="button" className="btn orangeBgColor text-light mt-5">
                Contact us
              </button>
            </div>
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
