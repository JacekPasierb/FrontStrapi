import React from "react";
import { pricings } from "../data/pricings";
import PricingCard from "./cards/PricingCard";
import TitleSection from "./TitleSection";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing py-5 bg-light">
      <div className="container py-5">
        <TitleSection tittle="Pricing"/>
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
