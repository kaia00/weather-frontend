import React, { useState } from "react";
import axios from "axios";
import "./AddCity.css";

const AddCity = () => {
  const [cityName, setCityName] = useState("");

  const handleChange = event => {
    setCityName(event.target.value);
  };

  const handleSubmit = event => {
    axios
      .post("https://ilmainfo.herokuapp.com/cities/", {
        name: cityName
      })
      .then(response => {
        console.log(response);
        setCityName("");
        alert("City was added");
      })
      .catch(error => {
        console.error(error);
        alert("Error adding city");
      });
  };
  return (
    <div className="Content">
      <label className="Label" htmlFor="cityName">Enter cityname:</label>
      <input
        className="Input-style"
        id="cityName"
        name="cityName"
        type="text"
        value={cityName}
        onChange={handleChange}
      />
      <button className="SaveButton-style" onClick={handleSubmit}>
        Save city!
      </button>
    </div>
  );
};

export default AddCity;