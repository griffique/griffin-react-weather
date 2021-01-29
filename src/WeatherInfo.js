import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConvert from "./TemperatureConvert.js";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="current-weather">
        <div className="row location-data">
          <div className="col-6 location-time">
            <h1>
              <span id="city-name">{props.data.city}</span>
            </h1>
            <h2>
              <span id="current-time">
                <FormattedDate date={props.data.date} />
              </span>
            </h2>
          </div>

          <div className="col-6 temp-rain">
            <h1>
              <span className="icon-display">
                <WeatherIcon
                  iconCode={props.data.icon}
                  iconAlt={props.data.conditions}
                />
              </span>
              <TemperatureConvert temperature={props.data.temperature} />
            </h1>
            <div className="row wind-conditions">
              <div className="col-12">
                <h2>
                  <span id="conditions" className="text-capitalize">
                    {props.data.conditions}
                  </span>
                </h2>
                <h2>
                  Wind:{" "}
                  <span id="wind-speed">{Math.round(props.data.wind)}</span>{" "}
                  km/h
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
