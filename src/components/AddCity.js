import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <label htmlFor="cityName">Enter cityname</label>
      <input
        style={inputStyle}
        id="cityName"
        name="cityName"
        type="text"
        value={cityName}
        onChange={handleChange}
      />
      <button style={saveButtonStyle} onClick={handleSubmit}>
        Save city!
      </button>
    </div>
  );
};

const inputStyle = {
  border: "2px solid pink"
};

const saveButtonStyle = {
  background: "lime",
  border: "2px solid pink"
};

export default AddCity;
