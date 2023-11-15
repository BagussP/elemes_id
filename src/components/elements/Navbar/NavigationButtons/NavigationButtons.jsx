import Button from "@pages/components/modules/Button/Button";
import React from "react";

const NavigationButtons = () => {
  return (
    <div className="nav__buttons">
      <Button className="nav__button-login" text={"Masuk"}>
        Masuk
      </Button>
      <Button className="nav__button-signup" text={"Daftar Sekarang"} />
    </div>
  );
};

export default NavigationButtons;
