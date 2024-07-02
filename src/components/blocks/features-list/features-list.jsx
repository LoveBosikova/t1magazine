import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";
import "./style.css";

// список преимуществ
function FeaturesList({ features }) {
  return features && features.length ? (
    <section className="features">
      <Title as="h2">Почему фермерские продукты лучше?</Title>
      <ul className="features__list">
        {features.map((feature) => (
          <li className="features__item" key={feature.id}>
            <FeatureCard {...feature} />
          </li>
        ))}
      </ul>
      <Button link="/buy">Купить</Button>
    </section>
  ) : null;
}

export default FeaturesList;
