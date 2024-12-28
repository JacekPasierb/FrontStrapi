import React from "react";
import { groupedNewest, newest } from "../data/newest";

const News: React.FC = () => {
  return (
    <section id="news" className="news py-5">
      <div className="container py-5">
        <div>
          <h3 className="text-center">Recent News</h3>
          <div className="row justify-content-center">
            <div className="col-1">
              <hr className="orangeColor" />
            </div>
          </div>
        </div>
        <div
          id="carouselExampleCaptions8"
          className="carousel slide my-5 d-md-none"
          data-bs-ride="false"
        >
          <div className="carousel-indicators ">
            {newest.map((_, index) => (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions8"
                data-bs-slide-to={index}
                className={index === 0 ? "active bg-dark" : "bg-dark"}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                key={index}
              ></button>
            ))}
          </div>

          <div className="carousel-inner ">
            {newest.map((newItem, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
                key={index}
              >
                <div className="row">
                  <div className="col-12">
                    <img
                      src={newItem.img}
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption">
                      <h5>{newItem.tittle}</h5>
                      <p>{newItem.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="carouselExampleCaptions5"
          className="carousel slide my-5 d-none d-md-block"
          data-bs-ride="false"
        >
          <div className="carousel-indicators ">
            {groupedNewest.map((_, index) => (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions5"
                data-bs-slide-to={index}
                className={index === 0 ? "active bg-dark" : "bg-dark"}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                key={index}
              ></button>
            ))}
          </div>

          <div className="carousel-inner ">
            {groupedNewest.map((newItem, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
                key={index}
              >
                <div className="row">
                  {newItem.map((item, ind) => (
                    <div className="col-md-6" key={ind}>
                      <img src={item.img} className="d-block w-100" alt="..." />
                      <div className="carousel-caption">
                        <h5>{item.tittle}</h5>
                        <p>{item.post}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
