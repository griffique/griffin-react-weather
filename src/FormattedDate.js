import React from "react";
export default function FormattedDate(props) {
  let now = new Date(props.date);

  let dayIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayIndex[now.getDay()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      Last Updated {day} at {hour}:{minutes}
    </div>
  );
}
