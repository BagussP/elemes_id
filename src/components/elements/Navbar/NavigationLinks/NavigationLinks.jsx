import Link from "next/link";
import React from "react";
import Hot from "./HighlightedItems/Hot";

const NavigationLinks = () => {
  return (
    <div className="nav__links">
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>About</Link>
      <div className="relative">
        <Link href={"/"}>Promotions</Link>
        <Hot />
      </div>
      <Link href={"/"}>Blogs</Link>
      <Link href={"/"}>Contact Us</Link>
    </div>
  );
};

export default NavigationLinks;
