import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import WeatherSearch from "./WeatherSearch.js";
import Footer from "./Footer.js";

export default function App() {
  function change_background() {
    let day = new Date();
    let now = day.getHours();

    if (now > 5 && now < 18) {
      document.body.className = "day";
    } else {
      document.body.className = "night";
    }
  }

  change_background();
  return (
    <div className="App container">
      <WeatherSearch defaultCity="Vernazza" />
      <Footer />
    </div>
  );
}
