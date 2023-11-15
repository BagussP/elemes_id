import Button from "@pages/components/modules/Button/Button";
import React from "react";

const HeadlineDescription = () => {
  return (
    <div className="headline__content-text">
      <h1 className="headline__title">Good Food Us Good Mood</h1>
      <p className="headline__description">
        I would think that conserving our natural resources should be a
        conservative position: Not to waste food, and not to throw away a lot of
        the food that we buy.
      </p>
      <div className="headline__buttons">
        <Button className="headline__button-signup" text={"Daftar Sekarang"} />
        <Button className="headline__button-about" text={"About Us"} />
      </div>
    </div>
  );
};

export default HeadlineDescription;
