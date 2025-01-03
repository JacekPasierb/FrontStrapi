import React from "react";

interface PricingCardProps {
  pricin: {
    popular: boolean;
    tittleOption: string;
    cost: number;
    options: string[];
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ pricin }) => {
  if (!pricin) {
    return <div>Brak danych</div>; // Jeśli pricin jest null, renderujemy komunikat
  }

  return (
    <div className="card h-100 m-auto mt-5 p-4 text-center">
      {pricin.popular && (
        <div className="label">
          <svg width="86px" height="86px" viewBox="0 0 86 86">
            <path
              style={{ fill: "rgb(255, 102, 0)" }}
              d="M73.4,73.4L67.3,73l-0.8,6.2l-6-1.8l-2.1,5.9l-5.5-3l-3.2,5.3l-4.7-4L40.7,86L37,81.1l-5.1,3.5L29.2,79            l-5.7,2.4l-1.4-6l-6.1,1.1l-0.2-6.2l-6.2-0.2l1.1-6.1l-6-1.4L7,56.8l-5.6-2.7L4.9,49L0,45.3L4.5,41l-4-4.7L5.8,33l-3-5.5l5.9-2.1            l-1.8-6l6.2-0.8l-0.5-6.2l6.2,0.5l0.8-6.2l6,1.8l2.1-5.9l5.5,3l3.2-5.3l4.7,4L45.3,0L49,4.9l5.1-3.5L56.8,7l5.7-2.4l1.4,6l6.1-1.1            l0.2,6.2l6.2,0.2L75.3,22l6,1.4L79,29.2l5.6,2.7L81.1,37l4.9,3.8L81.5,45l4,4.7L80.2,53l3,5.5l-5.9,2.1l1.8,6L73,67.3L73.4,73.4z"
            ></path>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="8"
              fill="white"
            >
              MOST POPULAR
            </text>
          </svg>
        </div>
      )}

      <div className="card-header py-5 bg-transparent">
        <h4 className="mb-3">{pricin.tittleOption}</h4>
        <span className="price orangeColor">$ {pricin.cost}</span>
        <span className="month">/monthly</span>
      </div>
      <div className="card-body py-5">
        {pricin.options.map((option, index) => (
          <p className="card-text" key={index}>
            {option}
          </p>
        ))}
      </div>
      <button className="btn orangeBgColor text-light mx-auto">Buy Now!</button>
    </div>
  );
};

export default PricingCard;
