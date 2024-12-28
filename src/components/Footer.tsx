import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary">
      <div className="container py-4">
        <div className="d-flex flex-column align-items-center flex-lg-row justify-content-between">
          <div className="text-center">
            <p className="m-0 ">
              <span>Edifice</span>
              <span> </span>
              <span>2024</span>. All Rights Reserved.
            </p>
          </div>
          <ul className="d-inline-flex gap-4 mt-3 text-light">
            <li>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="bi bi-google"></i>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="bi bi-vimeo"></i>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="bi bi-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
