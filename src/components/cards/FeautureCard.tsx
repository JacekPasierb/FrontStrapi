import React from "react";

interface FeautureCardProps {
  value: {
    tittle: string;
    text: string;
    icon: string;
  };
}

const FeautureCard: React.FC<FeautureCardProps> = ({ value }) => {
  return (
    <div className="row g-0">
      <div className="col-1 d-flex justify-content-end align-items-start ">
        <i className={`bi ${value.icon} orangeColor ms-4`}></i>
      </div>
      <div className="card-body col-11">
        <h4 className="card-title mb-3">{value.tittle}</h4>
        <p className="card-text">{value.text}</p>
      </div>
    </div>
  );
};

export default FeautureCard;
