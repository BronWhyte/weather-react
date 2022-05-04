import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  const [city, setCity] = useState(null);
  const [name, setName] = useState(null);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  let form = (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={handleCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <h1>{name}</h1>
    </div>
  );

  function updateWeather(response) {
    setLoaded(true);
    setName(response.data.name);
    setWeather({
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(updateWeather);
  }

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Tuesday 14:15</li>
          <li>{weather.description}</li>
          <li>Precipitation: 69%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"white"}
              size={64}
              animate={false}
            />
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="degreeSymbol">°C</span>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <h2>Enter a city</h2>
      </div>
    );
  }
}

export default App;
