import React from "react";
import aboutImage from "../image/home-variant-3-555x500.jpg";
import { aboutUs } from "../data/aboutUs";
import FeautureCard from "./cards/FeautureCard";

const Aboutus: React.FC = () => {
  return (
    <>
      <section id="aboutus" className="aboutus py-5 ">
        <div className="container py-5">
          <div>
            <h3 className="text-center ">About Us</h3>
            <div className="row justify-content-center">
              <div className="col-1">
                <hr className="orangeColor" />
              </div>
            </div>
          </div>
          <div className="row my-5  ">
            <div className="col-lg-6 px-md-5 ">
              <p>
                For over 30 years, commitment to our Core Values has made
                Edifice Construction Company the ideal building partner for the
                region’s most forward-thinking organizations. Our success comes
                from a steadfast commitment to the client’s vision and a culture
                of balance, integrity, leadership, and dedication to our
                customers.
              </p>
              <div className="aboutus-cards">
                <div className="row">
                  {aboutUs.map((value, index) => (
                    <div className="card border-0 col-12 p-4 mb-4" key={index}>
                      <FeautureCard value={value} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-md-5 ">
              <img
                src={aboutImage}
                alt="men working with project"
                className="card-img-top aboutus-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="achievements parallax-background">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="card bg-transparent text-light text-center m-3 ">
                <i className="bi bi-houses-fill"></i>
                <div className="card-body mt-2">
                  <h4 className="orangeColor">100</h4>
                  <p className="mt-2 mb-0">Projects Annually</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="card bg-transparent text-light text-center m-3">
                <i className="bi bi-trophy"></i>
                <div className="card-body mt-2">
                  <h4 className="orangeColor">45</h4>
                  <p className="mt-2 mb-0">Awards</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="card bg-transparent text-light text-center m-3">
                <i className="bi bi-chat-heart"></i>
                <div className="card-body mt-2">
                  <h4 className="orangeColor">98%</h4>
                  <p className="mt-2 mb-0">Positive Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="card bg-transparent text-light text-center m-3">
                <i className="bi bi-person-arms-up"></i>
                <div className="card-body mt-2">
                  <h4 className="orangeColor">147k</h4>
                  <p className="mt-2 mb-0">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shadow"></div>
      </section>
    </>
  );
};

export default Aboutus;
