import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <div className="current-weather">
        <div className="row location-data">
          <div className="col-6 location-time">
            <h1>
              <span id="city-name">Vernazza, IT</span>
            </h1>
            <h2>
              <span id="current-time">Last Updated Sunday 11:00</span>
            </h2>
          </div>
          <div className="col-6 temp-rain">
            <h1>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt=""
                id="icon-element"
              />
              <span id="temp-display">18</span>°
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
                  <span id="conditions">sunny</span>
                </h2>
                <h2>
                  wind: <span id="wind-speed"></span>
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
}
