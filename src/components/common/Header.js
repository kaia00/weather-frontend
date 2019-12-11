import React from "react";
import "../../../src/App.css";

function Header() {
  return (
    <nav>
      <a className="App-navigation-link" href="/">
        Home
      </a>{" "}
      |{" "}
      <a className="App-navigation-link" href="/add">
        Add City
      </a>
    </nav>
  );
}
export default Header;
