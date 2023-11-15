import Cards from "@pages/components/modules/Cards/Cards";
import { dataCategory } from "@pages/data/category";
import { useState, useRef } from "react";
import Image from "next/image";

const CategoryCarousel = () => {
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef(null);
  const itemWidth = 230;
  const sensitivityFactor = 0.02;

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const deltaX = (e.touches[0].clientX - startX) * sensitivityFactor;
    setCurrentX((prevX) => {
      const nextX = prevX + deltaX;
      const maxX = itemWidth * (dataCategory.length - 1);
      return Math.max(-maxX, Math.min(0, nextX));
    });
  };

  const handleTouchEnd = () => {
    setStartX(0);
  };

  const handlePrevious = () => {
    setCurrentX((prevX) => Math.min(0, prevX + itemWidth));
  };

  const handleNext = () => {
    const maxX = itemWidth * (dataCategory.length - 4);
    setCurrentX((prevX) => Math.max(-maxX, prevX - itemWidth));
  };

  return (
    <div
      className="category__carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ul ref={containerRef} className="category__carousel-container">
        {dataCategory.map((data, index) => (
          <li
            style={{
              transform: `translateX(${currentX}px)`,
            }}
          >
            <Cards
              key={index}
              images={data.images}
              title={data.category}
              text={data.items}
              color={data.color}
              classNameContainer={"category-card group"}
              classNameTitle={"category-card__title"}
              classNameText={"category-card__text"}
            />
          </li>
        ))}
      </ul>
      <div className="category__carousel-buttons">
        <button onClick={handlePrevious} className="category__carousel-button">
          <Image src={"/images/prev.png"} width={33} height={33} alt="prev" />
          <h1>PREV</h1>
        </button>
        <button onClick={handleNext} className="category__carousel-button">
          <h1>NEXT</h1>
          <Image src={"/images/next.png"} width={33} height={33} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
