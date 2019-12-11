import React from "react";
import "./WeatherBox.css";

const WeatherBox = props => {
  const weather = props.weather;

  return (
    <div className="Weather-container">
      <div className="Weather-content">
        temperature: {weather.temperature} °C
      </div>
      <div className="Weather-content">wind speed: {weather.windSpeed} m/s</div>
      <div className="Weather-content">humidity: {weather.humidity} %</div>
      <div className="Weather-content">
        date: {weather.date.toLocaleDateString()}
      </div>
    </div>
  );
};

export default WeatherBox;
