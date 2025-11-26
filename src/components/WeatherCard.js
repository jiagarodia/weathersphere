import React from "react";
import "../WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      <div className="details">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="icon"
        />

        <p className="temp">{weather.main.temp}°C</p>
      </div>

      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
