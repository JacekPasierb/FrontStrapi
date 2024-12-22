import React from "react";

const Aboutus = () => {
  return (
    <>
      <section id="aboutus" className="aboutus py-5 ">
        <div className="container py-5">
          <div>
            <h2 className="text-center ">About Us</h2>
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
                  <div className="card border-0 col-12 p-4 mb-4">
                    <div className="row g-0">
                      <div className="col-1 d-flex justify-content-end align-items-start ">
                        <i className="bi bi-card-checklist orangeColor ms-4"></i>
                      </div>
                      <div className="card-body col-11">
                        <h3 className="card-title mb-3">
                          Professional Approach
                        </h3>
                        <p className="card-text">
                          Our approach to building sustainable facilities is
                          based on high professionalism and delivering projects
                          with fairness and excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 col-12 p-4 mb-4">
                    <div className="row g-0">
                      <div className="col-1 d-flex justify-content-end align-items-start ">
                        <i className="bi bi-people orangeColor ms-4"></i>
                      </div>
                      <div className="card-body col-11">
                        <h3 className="card-title  mb-3">Expert team</h3>
                        <p className="card-text">
                          We employ the best experts in construction that make
                          our every project a reliable one. You can trust each
                          member of Edifice team.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 col-12 p-4 mb-4">
                    <div className="row g-0">
                      <div className="col-1 d-flex justify-content-end align-items-start ">
                        <i className="bi bi-pencil orangeColor ms-4"></i>
                      </div>
                      <div className="card-body col-11">
                        <h3 className="card-title  mb-3">Best solutions</h3>
                        <p className="card-text">
                          Our company offers top-notch construction solutions to
                          corporate and individual clients worldwide, while also
                          covering their needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-md-5 ">
              <img
                src="src/image/home-variant-3-555x500.jpg"
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
