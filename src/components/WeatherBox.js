import React from "react";

const WeatherBox = props => {
  const weather = props.weather;

  return (
    <>
      <div style={weatherBoxStyle}>
        <div style={weatherBoxContentStyle}>
          temperature: {weather.temperature} °C
        </div>
        <div style={weatherBoxContentStyle}>
          wind speed: {weather.windSpeed} m/s
        </div>
        <div style={weatherBoxContentStyle}>humidity: {weather.humidity} %</div>
        <div style={weatherBoxContentStyle}>date: {weather.date}</div>
      </div>
    </>
  );
};

const weatherBoxStyle = {
  margin: "16px",
  border: "5px solid pink"
};
const weatherBoxContentStyle = {
  fontSize: "15px",
  textAlign: "center"
};

export default WeatherBox;
