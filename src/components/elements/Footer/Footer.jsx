import React from "react";
import FooterProfile from "./FooterProfile/FooterProfile";
import FooterCategories from "./FooterCategories/FooterCategories";
import FooterAbout from "./FooterAbout/FooterAbout";
import FooterNewsletter from "./FooterNewsletter/FooterNewsletter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <FooterProfile />
        <FooterCategories />
        <FooterAbout />
        <FooterNewsletter />

      </div>
      <p className="footer__copyright">&copy; 2021 ELEMES ID. ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
