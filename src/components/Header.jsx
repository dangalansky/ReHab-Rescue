import React from "react";
import logo from "../images/rehab-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="rehab rescue logo" className="logo" />
    </header>
  );
}

export default Header;
