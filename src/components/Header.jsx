import React from "react";
import Banner from "./banner/Banner";
import NavbarComponent from "./navbar/NavbarComponent";

function Header() {
  return (
    <header className="header">
      <NavbarComponent />
      <Banner />
    </header>
  );
}

export default Header;
