import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "beabe0699319f7ac57ccc25681e8a478";

  const getWeather = async () => {
    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === "404") {
      alert("City not found");
      return;
    }

    setWeather(data);
  };

  return (
    <div className="app">
      <h1>WeatherSphere</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
