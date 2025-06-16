import React, { useState, useEffect } from "react";
import { fetchWeather } from "../utils/api";
import "../styles/Home.css";


function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(localStorage.getItem("preferredCity") || "Kathmandu");

  useEffect(() => {
    fetchWeather(city).then((data) => {
      if (data) {
        setWeather(data);
      } else {
        console.log("Failed to fetch weather data");
      }
    });
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
    localStorage.setItem("preferredCity", event.target.value);
  };

  return (
    <div>
      <h2>Weather Information</h2>
      <select value={city} onChange={handleCityChange}>
        <option value="Kathmandu">Kathmandu</option>
        <option value="USA">USA</option>
        <option value="London">London</option>
      </select>
      {weather ? (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Home;
