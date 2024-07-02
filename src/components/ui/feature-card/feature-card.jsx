import React from "react";
import Title, { TitleSize } from "../title/title";
import "./style.css";

// Карточка
function FeatureCard({
  title, // название особенности
  owner, // владелец особенности (обычный магазин, фермерский)
  about, // описание особенности
  isNegative, // является ли особенность отрицательной
  image // иконка
}) {
  return (
    <section className={`feature${isNegative ? " feature_negative" : ""}`}>
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <span
            className={`feature__owner${
              isNegative ? " feature__owner_negative" : ""
            }`}
          >
            {owner}
          </span>
          <Title size={TitleSize.EXTRA_SMALL} as="h3">
            {title}
          </Title>
        </div>
      </header>
      <p
        className="feature__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </section>
  );
}

export default FeatureCard;
