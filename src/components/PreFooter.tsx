import React from "react";

const PreFooter = () => {
  return (
    <section className="preFooter bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-12 mb-5">
            <h6>About</h6>
            <p className="mt-4">
              Our core values have been shaped over more than 10 years of
              delivering the finest construction services to our clients. They
              stood to the test of time and these principles remain our bedrock
              lynchpins. We never tried to cut on either quality, the pace of
              work or any other construction aspect. We stay true to our full
              promise of efficiency!
            </p>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <h6>Navigation</h6>
            <ul className="nav flex-column text-muted mt-4">
              <li className="nav-item ">
                <a
                  className="nav-link text-muted "
                  aria-current="page"
                  href="#aboutus"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted " href="#news">News</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6 mb-5">
            <h6>Contacts</h6>
            <ul className="text-muted">
              <li>
                <span className="me-2">Address:</span>
                <span> 4578 Marmora Road, Glasgow, D04 89GR</span>
              </li>
              <li className="d-flex ">
                <span className="me-2">Phones:</span>
                <ul className="d-flex ">
                  <li>
                    <a href="tel:#" className="me-2 text-muted">
                      {" "}
                      (800) 123-0045
                    </a>
                  </li>
                  <li>
                    <a href="tel:#" className="text-muted">
                      {" "}
                      (800) 123-0045
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span className="me-2">E-mail:</span>
                <a href="mailto:#" className="text-muted">
                  {" "}
                  info@demolink.org
                </a>
              </li>
              <li>
                <span className="me-2">We are open:</span>
                <span>Mn-Fr: 10 am-8 pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
