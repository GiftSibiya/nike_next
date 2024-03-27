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
    <header>
      <nav>
        <a href="">
          <Image src={headerLogo} alt="header logo" />
        </a>
      </nav>
    </header>
  );
};
