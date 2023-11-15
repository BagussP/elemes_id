import Image from "next/image";
import React from "react";

const HeadlineImage = () => {
  return (
    <div className="headline__content-image">
      <Image
        src={"/images/greenSaladTomato.png"}
        width={483}
        height={485}
        alt="food image large"
        className="headline__image-large"
      />

      <div className="headline__card">
        <Image
          src={"/images/greenSaladTomato.png"}
          width={53}
          height={53}
          alt="food image small"
          className="headline__image-small"
        />
        <div className="headline__info">
          <h6 className="headline__card-title">Green Salad Tomato</h6>
          <p className="headline__category">Tomato</p>
          <Image
            src={"/images/4Stars.png"}
            width={68}
            height={11}
            alt="rating"
            className="headline__rating"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadlineImage;
