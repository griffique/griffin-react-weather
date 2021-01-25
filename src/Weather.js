import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="current-weather">
          <div className="row location-data">
            <div className="col-6 location-time">
              <h1>
                <span id="city-name">{weatherData.city}</span>
              </h1>
              <h2>
                <span id="current-time">
                  <FormattedDate date={weatherData.date} />
                </span>
              </h2>
            </div>

            <div className="col-6 temp-rain">
              <h1>
                <span className="icon-display">
                  <WeatherIcon
                    iconCode={weatherData.icon}
                    iconAlt={weatherData.conditions}
                  />
                </span>
                <span id="temp-display">
                  {Math.round(weatherData.temperature)}
                </span>
                °
                <button className="active" id="cels-convert">
                  {" "}
                  C{" "}
                </button>
                <span id="convert-slash"> | </span>
                <span className="converted-temp">
                  <button id="fahr-convert">F</button>
                </span>
              </h1>
              <div className="row wind-conditions">
                <div className="col-12">
                  <h2>
                    <span id="conditions" className="text-capitalize">
                      {weatherData.conditions}
                    </span>
                  </h2>
                  <h2>
                    Wind:{" "}
                    <span id="wind-speed">{Math.round(weatherData.wind)}</span>{" "}
                    km/h
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="search-area">
          <div className="col-9" id="search-form">
            <form className="search-bar form-control-lg" id="city-search">
              <input
                type="search"
                id="city-input"
                placeholder="Enter a city name..."
                autoComplete="off"
                autoFocus="on"
              />

              <input
                type="submit"
                className="btn btn-light"
                id="submit-button"
                value="🔎 Search"
              />
            </form>
          </div>

          <div className="col-3" id="locate-me-button">
            <button type="button" className="btn btn-light">
              <span role="img" alt="location pin">
                📍
              </span>{" "}
              Find My Location
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `483e555d11f508a7308255583271cc91`;
    let units = `metric`;
    let city = `Vernazza`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemp);
    function showTemp(response) {
      setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        date: response.data.dt,
        conditions: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }
    return "Loading";
  }
}
