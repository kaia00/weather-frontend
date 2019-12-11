import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherBox from "./weather/WeatherBox";
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
        {cities
          ? cities.map(city => (
              <div key={city.id}>
                <h1>{city.name}</h1>
                <button
                  className="Delete"
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
    </header>
  );
};

export default HomePage;
