import { IconMenuBar } from "@pages/components/modules/Icon/Icon";
import React from "react";

const NavbarMobile = () => {
  return (
    <ul className="nav__mobile-list">
      <li className="nav__mobile-items">
        <IconMenuBar />
        <p>Home</p>
      </li>
      <li className="nav__mobile-items">
        <IconMenuBar />
        <p>Promotions</p>
      </li>
      <li className="nav__mobile-items">
        <IconMenuBar />
        <p>Others</p>
      </li>
    </ul>
  );
};

export default NavbarMobile;
