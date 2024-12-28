import React from "react";
import { services } from "../data/services";
import FeautureCard from "./cards/FeautureCard";
import TitleSection from "./TitleSection";

const Services: React.FC = () => {
  return (
    <section id="services" className="services py-5 ">
      <div className="container py-5">
        <TitleSection tittle="Our Services" />

        <div className="row my-5">
          {services.map((value, index) => (
            <div
              className="card border-0 col-12 col-md-6 col-xl-4 p-4 mb-4"
              key={index}
            >
              <FeautureCard value={value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
