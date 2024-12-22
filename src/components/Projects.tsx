import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects py-5 ">
      <div className="container py-5">
        <div>
          <h2 className="text-center ">Our Projects</h2>
          <div className="row justify-content-center">
            <div className="col-1">
              <hr className="orangeColor" />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-3 overlay-effect">
                <i className="bi bi-image-fill"></i>
                <p>Multifamily</p>
                <h3 className="card-title">White City Lofts</h3>
                <div className="col-1">
                  <hr className="bg-light " />
                </div>
                <p className="card-text">Professional construction services</p>
                <i className="bi bi-plus-lg"></i>
              </div>
              <img
                src="src/image/project-1-1200x800.jpg"
                className="card-img-top"
                alt="Card Image"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-3 overlay-effect">
                <i className="bi bi-image-fill"></i>
                <p>Industrial</p>
                <h3 className="card-title">MetalWorking Plant</h3>
                <div className="col-1">
                  <hr className="bg-light " />
                </div>
                <p className="card-text">Professional construction services</p>
                <i className="bi bi-plus-lg"></i>
              </div>
              <img
                src="src/image/project-2-1200x800.jpg"
                className="card-img-top"
                alt="Card Image"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-3 overlay-effect">
                <i className="bi bi-image-fill"></i>
                <p>Residential</p>
                <h3 className="card-title">Mcmillan's House</h3>
                <div className="col-1">
                  <hr className="bg-light " />
                </div>
                <p className="card-text">Professional construction services</p>
                <i className="bi bi-plus-lg"></i>
              </div>
              <img
                src="src/image/project-3-1200x800.jpg"
                className="card-img-top"
                alt="Card Image"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-3 overlay-effect">
                <i className="bi bi-image-fill"></i>
                <p>Healthcare</p>
                <h3 className="card-title">ChildCare Center</h3>
                <div className="col-1">
                  <hr className="bg-light " />
                </div>
                <p className="card-text">Professional construction services</p>
                <i className="bi bi-plus-lg"></i>
              </div>
              <img
                src="src/image/project-4-1200x800.jpg"
                className="card-img-top"
                alt="Card Image"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-3 overlay-effect">
                <i className="bi bi-image-fill"></i>
                <p>Commercial</p>
                <h3 className="card-title">City Stadium</h3>
                <div className="col-1">
                  <hr className="bg-light " />
                </div>
                <p className="card-text">Professional construction services</p>
                <i className="bi bi-plus-lg"></i>
              </div>
              <img
                src="src/image/project-6-1200x800.jpg"
                className="card-img-top"
                alt="Card Image"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-3 overlay-effect">
                <i className="bi bi-image-fill"></i>
                <p>Social</p>
                <h3 className="card-title">Social Housing</h3>
                <div className="col-1">
                  <hr className="bg-light " />
                </div>
                <p className="card-text">Professional construction services</p>
                <i className="bi bi-plus-lg"></i>
              </div>
              <img
                src="src/image/project-5-1200x800.jpg"
                className="card-img-top"
                alt="Card Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
