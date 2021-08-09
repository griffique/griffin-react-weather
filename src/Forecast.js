import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview.js";
import "./Forecast.css";
export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  function handleForecastSubmit(response) {
    setForecastData(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecastData.city.name) {
    return (
      <div className="forecast-container">
        <div className="row" id="hourly-forecast-display">
          <ForecastPreview data={forecastData.list[0]} />
          <ForecastPreview data={forecastData.list[1]} />
          <ForecastPreview data={forecastData.list[2]} />
          <ForecastPreview data={forecastData.list[3]} />
          <ForecastPreview data={forecastData.list[4]} />
          <ForecastPreview data={forecastData.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = process.env.REACT_APP_API_KEY;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleForecastSubmit);

    return null;
  }
}
