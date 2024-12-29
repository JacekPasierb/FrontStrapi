import React, { useEffect, useState } from "react";
import PricingCard from "./cards/PricingCard";
import TitleSection from "./TitleSection";
import { fetchPricings } from "../API/api";

interface Pricing {
  id: number;
  documentId: string;
  popular: boolean;
  tittleOption: string;
  cost: number;
  options: string[];
}

const Pricing: React.FC = () => {
  const [pricings, setPricings] = useState<Pricing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPricings = async () => {
      setLoading(true);
      try {
        const data = await fetchPricings();
        setPricings(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Wystąpił nieznany błąd");
        }
      } finally {
        setLoading(false);
      }
    };
    getPricings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!pricings.length) {
    return null;
  }

  return (
    <section id="pricing" className="pricing py-5 bg-light">
      <div className="container py-5">
        <TitleSection tittle="Pricing" />
        <div className="row">
          {pricings.length > 0 ? (
            pricings.map((pricin, index) => (
              <div className="col-md-6 col-xl-3 my-5" key={index}>
                <PricingCard pricin={pricin} />
              </div>
            ))
          ) : (
            <p>Pusta</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
