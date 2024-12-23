import React from "react";

interface OpinionCardProps {
  opinion: {
    picture: string;
    info: string;
    author: string;
  };
}

const OpinionCard: React.FC<OpinionCardProps> = ({ opinion }) => {
  return (
    <>
      <div className="testimonials-img-box">
        <img
          src={opinion.picture}
          className="d-block "
          alt="ddd"
          width={120}
          height={120}
        />
      </div>
      <div className="carousel-caption ">
        <h5 className="mb-4">{opinion.info}</h5>
        <p className="mb-5">{opinion.author} </p>
      </div>
    </>
  );
};

export default OpinionCard;
