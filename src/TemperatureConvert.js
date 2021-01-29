import React, { useState } from "react";
export default function TemperatureConvert(props) {
  const [displayTemperature, setDisplayTemperature] = useState(
    props.temperature
  );

  function displayCelsius() {
    setDisplayTemperature(props.temperature);
  }
  function displayFahrenheit() {
    setDisplayTemperature((props.temperature * 9) / 5 + 32);
  }
  return (
    <div id="temp-display-convert">
      {" "}
      <span id="temp-display">{Math.round(displayTemperature)}</span>°
      <button id="cels-convert" onClick={displayCelsius}>
        {" "}
        C{" "}
      </button>
      <span id="convert-slash"> | </span>
      <span className="converted-temp">
        <button id="fahr-convert" onClick={displayFahrenheit}>
          F
        </button>
      </span>
    </div>
  );
}
