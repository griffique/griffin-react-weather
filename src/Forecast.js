import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="forecast-container">
      <div className="row" id="hourly-forecast-display">
        <div className="card col-sm-2">
          <h4>Sunday 13:00</h4>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="weather"
            class="card-img"
          />
          <h6>19</h6>
        </div>{" "}
        <div className="card col-sm-2">
          <h4>Sunday 15:00</h4>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="weather"
            class="card-img"
          />
          <h6>19</h6>
        </div>{" "}
        <div className="card col-sm-2">
          <h4>Sunday 17:00</h4>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather"
            class="card-img"
          />
          <h6>19</h6>
        </div>{" "}
        <div className="card col-sm-2">
          <h4>Sunday 19:00</h4>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="weather"
            class="card-img"
          />
          <h6>19</h6>
        </div>{" "}
        <div className="card col-sm-2">
          <h4>Sunday 21:00</h4>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="weather"
            class="card-img"
          />
          <h6>19</h6>
        </div>
        <div className="card col-sm-2">
          <h4>Sunday 21:00</h4>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="weather"
            class="card-img"
          />
          <h6>19</h6>
        </div>
      </div>
    </div>
  );
}
