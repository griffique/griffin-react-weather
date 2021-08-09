import React, { useState } from "react";
import "./WeatherSearch.css";

import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = process.env.REACT_APP_API_KEY;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
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
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = process.env.REACT_APP_API_KEY;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function findLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <WeatherInfo data={weatherData} />
        <div className="row" id="search-area">
          <div className="col-9" id="search-form">
            <form
              className="search-bar form-control-lg"
              id="city-search"
              onSubmit={handleSubmit}
            >
              <input
                type="search"
                id="city-input"
                placeholder="Enter a city name..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />

              <input
                type="submit"
                className="btn btn-light"
                id="submit-button"
                value="🔎 Search"
              />
            </form>
          </div>

          <div className="col-3" id="locate-me-button" onClick={findLocation}>
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
    search();
    return "Loading";
  }
}
