import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="Container">
      <a className="Navigation" href="/">
        Home
      </a>{" "}
      |{" "}
      <a className="Navigation" href="/add">
        Add City
      </a>
    </nav>
  );
}
export default Header;
