import Cards from "@pages/components/modules/Cards/Cards";
import Title from "@pages/components/modules/Title/Title";
import React from "react";
import CategoryCarousel from "./Carousel/Carousel";

const Category = () => {
  return (
    <div className="category">
      <Title className={"category__title"} text={"Category"} />
      <CategoryCarousel />
    </div>
  );
};

export default Category;
