import React from "react";
import AddCity from "./addcity/AddCity";
import HomePage from "./HomePage";
import Header from "./common/Header";

const App = () => {
  const getPage = () => {
    const route = window.location.pathname;
    if (route === "/add") return <AddCity />;
    return <HomePage />;
  };
  return (
    <div>
      <Header />
      {getPage()}
    </div>
  );
};

export default App;
