import React from "react";
import { pricings } from "../data/pricings";
import PricingCard from "./cards/PricingCard";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing py-5 bg-light">
      <div className="container py-5">
        <div>
          <h3 className="text-center ">Pricing</h3>
          <div className="row justify-content-center">
            <div className="col-1">
              <hr className="orangeColor" />
            </div>
          </div>
        </div>
        <div className="row">
          {pricings.map((pricin, index) => (
            <div className="col-md-6 col-xl-3 my-5" key={index}>
              <PricingCard pricin={pricin} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
