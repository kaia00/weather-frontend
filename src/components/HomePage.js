import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherBox from "./WeatherBox";

const HomePage = () => {
  const [cities, setCities] = useState([]);

  const fetchCities = () => {
    axios
      .get("https://ilmainfo.herokuapp.com/cities/", { crossdomain: true })
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
    <>
      <h1>
        Welcome to Weather site! Here you can add city and view all cities
      </h1>
      <div>
        <h1>List of Cities</h1>
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
      <a href="/add">Add City here</a>
    </>
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
