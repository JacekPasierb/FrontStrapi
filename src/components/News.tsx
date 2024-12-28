import React from "react";
import { groupedNewest, groupedNewestLg, newest } from "../data/newest";
import TitleSection from "./TitleSection";

const Carousel: React.FC<{
  id: string;
  items: typeof newest | typeof groupedNewest;
  isGrouped?: boolean;
}> = ({ id, items, isGrouped = false }) => (
  <div
    id={id}
    className={`carousel slide my-5 ${
        isGrouped
          ? id === "carouselExampleCaptions5"
            ? "d-none d-md-block d-lg-none"
            : "d-none d-lg-block"
          : "d-md-none"
      }`}
    data-bs-ride="false"
  >
    {/* Indicators */}
    <div className="carousel-indicators">
      {items.map((_, index) => (
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to={index}
          className={`bg-dark ${index === 0 ? "active" : ""}`}
          aria-current={index === 0 ? "true" : "false"}
          aria-label={`Slide ${index + 1}`}
          key={index}
        ></button>
      ))}
    </div>

    {/* Carousel Content */}
    <div className="carousel-inner">
      {items.map((itemGroup, index) => (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          data-bs-interval="10000"
          key={index}
        >
          <div className="row">
          {isGrouped ? (
              // When the items are grouped (2 or 3 per slide)
              (itemGroup as { img: string; tittle: string; date: string; author: string; post: string }[]).map(
                (item, ind) => (
                  <CarouselItem key={ind} item={item}  />
                )
              )
            ) : (
              // When the items are single
              <CarouselItem
                key={index}
                item={itemGroup as { img: string; tittle: string; date: string; author: string; post: string }}
               
              />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CarouselItem: React.FC<{
    item: {
      img: string;
      tittle: string;
      date: string;
      author: string;
      post: string;
    };
  }> = ({ item }) => (
    <div className="col-12 col-md-6 col-lg-4">
      <img src={item.img} className="d-block w-100 mb-3" alt={item.tittle} />
      <div className="carousel-caption p-3 d-flex flex-column align-items-start text-start">
        <h4 className="text-dark">{item.tittle}</h4>
        <div className="d-flex flex-wrap gap-2 mb-2">
          <span className="date orangeColor">{item.date}</span>
          <span className="author text-muted">{item.author}</span>
        </div>
        <p className="text-dark">{item.post}</p>
      </div>
    </div>
  );
  

const News: React.FC = () => {
  return (
    <section id="news" className="news py-5">
      <div className="container py-5">
        <TitleSection tittle="Recent News" />
        <Carousel id="carouselExampleCaptions8" items={newest} />
        <Carousel
          id="carouselExampleCaptions5"
          items={groupedNewest}
          isGrouped
        />
         
         <Carousel
          id="carouselExampleCaptionsLg"
          items={groupedNewestLg}
          isGrouped
        />
      </div>
    </section>
  );
};

export default News;
