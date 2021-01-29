import React from "react";
import "./ForecastPreview.css";
import ForecastIcon from "./ForecastIcon.js";
export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  return (
    <div className="card col-sm-2 forecast-display">
      <h4>{hours()}</h4>
      <ForecastIcon iconCode={props.data.weather[0].icon} />
      <h6>
        {Math.round(props.data.main.temp)}°C |
        {Math.round((props.data.main.temp * 9) / 5 + 32)}°F
      </h6>
    </div>
  );
}
