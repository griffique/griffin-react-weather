import "./App.css";
import Weather from "./Weather.js";

import Footer from "./Footer.js";

export default function App() {
  function change_background() {
    let day = new Date();
    let now = day.getHours();

    if (now > 5 && now < 12) {
      document.body.className = "morning";
    } else if (now > 12 && now < 18) {
      document.body.className = "day";
    } else {
      document.body.className = "night";
    }
  }

  change_background();
  return (
    <div className="App container">
      <Weather />
      <Footer />
    </div>
  );
}
