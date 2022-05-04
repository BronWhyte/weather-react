import React from "react";
import "./App.css";

import ReactAnimatedWeather from "react-animated-weather";

function App(props) {
  return (
    <div className="App">
      <form>
        <input type="search" placeholder="Enter a city"></input>
        <input type="submit" value="Submit"></input>
      </form>
      <h1>{props.name}</h1>
      <ul>
        <li>Wednesday 15:07</li>
        <li>Partly cloudy</li>
        <li>Wind: 4km/h</li>
        <li>
          <ReactAnimatedWeather
            icon={"PARTLY_CLOUDY_DAY"}
            color={"white"}
            size={64}
            animate={false}
          />
          <span className="temperature">17</span>
          <span className="degreeSymbol">°C</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
