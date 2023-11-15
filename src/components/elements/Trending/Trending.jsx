import Button from "@pages/components/modules/Button/Button";
import Cards from "@pages/components/modules/Cards/Cards";
import Title from "@pages/components/modules/Title/Title";
import { dataTrending } from "@pages/data/trending";
import { useState } from "react";

const Trending = () => {
  return (
    <div className="trending">
      <Title className={"trending__title"} text={"Trending"} />
      <div className="trending-cards">
        {dataTrending.map((data, index) => (
          <Cards
            key={index}
            images={data.images}
            title={data.name}
            text={data.category}
            rating={data.rating}
            classNameContainer={`trending-card ${
              index > 3 ? "max-sm:hidden" : ""
            } group`}
            color={data.color}
            classNameTitle={"trending-card__title"}
            classNameText={"trending-card__text"}
          />
        ))}
        <div className="trending__container-button">
          <Button className={"trending__button"} text={"ALL Receipt"} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
