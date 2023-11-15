import Image from "next/image";
import { useEffect, useState } from "react";

const Cards = ({
  images,
  title,
  text,
  rating = false,
  classNameContainer,
  classNameTitle,
  classNameText,
  color,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    if (color == "bg-[#E4F2F4]") setBackgroundColor("bg-[#E4F2F4]");
    else if (color == "bg-[#EAEEFA]") setBackgroundColor("bg-[#EAEEFA]");
    else if (color == "bg-[#F9EEF3]") setBackgroundColor("bg-[#F9EEF3]");
    else if (color == "bg-[#F0FEEB]") setBackgroundColor("bg-[#F0FEEB]");
    else if (color == "bg-[#F3F7D9]") setBackgroundColor("bg-[#F3F7D9]");

    return () => {};
  }, [backgroundColor]);

  return (
    <div className={`${classNameContainer} ${color}`}>
      <Image
        src={"/images/backgroundCard.png"}
        width={rating ? 287 : 230}
        height={rating ? 306 : 195}
        className="background-card"
        alt="pattern"
      />
      <Image
        src={images}
        width={rating ? 118 : 47}
        height={rating ? 120 : 47}
        alt="image food"
        className="relative z-30"
      />
      <h1 className={classNameTitle}>{title}</h1>
      <p className={classNameText}>{text}</p>
      {rating && <Image src={rating} width={68} height={11} alt="rating" />}
    </div>
  );
};

export default Cards;
