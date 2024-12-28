import React from "react";
import OpinionCard from "./cards/OpinionCard";
import { opinions } from "../data/opinions";

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="testimonials parallax-background-testimonials"
    >
      <div className="container py-5 ">
        <div className="text-light">
          <h3 className="text-center ">What People Say</h3>
          <div className="row justify-content-center">
            <div className="col-1">
              <hr className="orangeColor" />
            </div>
          </div>
        </div>
        <div
          id="carouselExampleCaptions3"
          className="carousel slide my-5"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {opinions.map((opinion, index) => (
              <div
                className={`carousel-item ${index == 0 && "active"} `}
                data-bs-interval="10000"
                key={index}
              >
                <OpinionCard opinion={opinion} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-shadow"></div>
    </section>
  );
};

export default Testimonials;
