import React, { useState } from "react";
import "./TemperatureConvert.css";
export default function TemperatureConvert(props) {
  const [unit, setUnit] = useState("celsius");

  function displayCelsius() {
    setUnit("celsius");
  }
  function displayFahrenheit() {
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <div id="temp-display">
        {" "}
        <span id="temp-display-celsius">
          {Math.round(props.celsiusTemperature)}
        </span>
        °
        <button id="cels-convert-active" onClick={displayCelsius}>
          {" "}
          C{" "}
        </button>
        <span id="convert-slash"> | </span>
        <button id="fahr-convert" onClick={displayFahrenheit}>
          F
        </button>
      </div>
    );
  } else {
    return (
      <div id="temp-display">
        {" "}
        <span id="temp-display-fahrenheit">
          {Math.round((props.celsiusTemperature * 9) / 5 + 32)}
        </span>
        °
        <button id="cels-convert" onClick={displayCelsius}>
          {" "}
          C{" "}
        </button>
        <span id="convert-slash"> | </span>
        <button id="fahr-convert-active" onClick={displayFahrenheit}>
          F
        </button>
      </div>
    );
  }
}
