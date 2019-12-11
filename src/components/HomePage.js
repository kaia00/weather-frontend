import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherBox from "./WeatherBox";
import "../../src/App.css";

const HomePage = () => {
  const [cities, setCities] = useState([]);

  const fetchCities = () => {
    axios
      .get("https://ilmainfo.herokuapp.com/cities/")
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(fetchCities, []);

  const handleDelete = cityId => {
    axios
      .delete("https://ilmainfo.herokuapp.com/cities/" + cityId)
      .then(response => {
        console.log(response);
        fetchCities();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <header className="App-header">
      <h1 className="Welcome">Welcome to weather information!</h1>
      <div>
        <h1>Cities:</h1>
        {cities.length
          ? cities.map(city => (
              <div style={cityStyle} key={city.id}>
                {city.name}
                <button
                  style={deleteButtonStyle}
                  onClick={() => handleDelete(city.id)}
                >
                  delete
                </button>
                {city.weathers.map(weather => (
                  <WeatherBox key={weather.id} weather={weather} />
                ))}
              </div>
            ))
          : null}
      </div>
      <a className="App-navigation-link" href="/add">
        Add City
      </a>
    </header>
  );
};

const cityStyle = {
  fontSize: "45px",
  textAlign: "center"
};

const deleteButtonStyle = {
  background: "red",
  border: "2px solid pink"
};

export default HomePage;
