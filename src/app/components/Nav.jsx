//-- Imports
import React from "react";

// Images
import headerLogo from "../../../public/assets/images/header-logo.svg";
import hamburgerLogo from "../../../public/assets/icons/hamburger.svg";
import Image from "next/image";
//--

//-- Main
export const Nav = () => {
  return (
    <header className=" flex justify-center absolute w-full px-10 py-5">
      <nav className="flex w-[80%] justify-between">
        <a href="#">
          <Image src={headerLogo} alt="header logo" />
        </a>
        <ul className="flex justify-between w-[50%] gap-8 max-lg:hidden">
          <li>Home</li>
          <li>AboutUs</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
        <a href="#" className="flex md:hidden">
          <Image src={hamburgerLogo} alt="" className="size-5" />
        </a>
      </nav>
    </header>
  );
};
