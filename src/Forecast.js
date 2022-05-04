import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Forecast.css";

export default function Forecast() {
  return (
    <table>
      <tbody>
        <tr>
          <td>Thu</td>
          <td>Fri</td>
          <td>Sat</td>
          <td>Sun</td>
          <td>Mon</td>
        </tr>
        <tr>
          <td>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"white"}
              size={64}
              animate={false}
            />
          </td>
          <td>
            <ReactAnimatedWeather
              icon={"PARTLY_CLOUDY_DAY"}
              color={"white"}
              size={64}
              animate={false}
            />
          </td>
          <td>
            <ReactAnimatedWeather
              icon={"RAIN"}
              color={"white"}
              size={64}
              animate={false}
            />
          </td>
          <td>
            <ReactAnimatedWeather
              icon={"CLOUDY"}
              color={"white"}
              size={64}
              animate={false}
            />
          </td>
          <td>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"white"}
              size={64}
              animate={false}
            />
          </td>
        </tr>
        <tr>
          <td>23°C</td>
          <td>20°C</td>
          <td>13°C</td>
          <td>17°C</td>
          <td>18°C</td>
        </tr>
      </tbody>
    </table>
  );
}
