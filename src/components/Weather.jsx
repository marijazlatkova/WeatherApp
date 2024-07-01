import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherRequest } from "../actions/WeatherActions";

import "../styles/Weather.scss";

export const Weather = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const { weather, error } = useSelector((state) => state.WeatherReducer);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherRequest(city));
  };

  return (
    <div id="container">
      <form onSubmit={handleSearch}>
        <input
          className="search"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-button" type="submit">
          <img src="/search.svg" />
        </button>
      </form>
      <br />
      {weather && weather.main ? (
        <div className="weather-container">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          />
          <p>{weather.weather[0].description}</p>
          <p>{weather.name}</p>
          <p>{weather.main.temp} °C</p>
          <div className="wrapper">
            <img src="/img/humidity.png" />
            <p>
              {weather.main.humidity} % <br /> <span>humidity</span>
            </p>
            <img src="/img/wind.png" />
            <p>
              {weather.wind.speed} km/h <br /> <span>wind speed</span>
            </p>
          </div>
        </div>
      ) : (
        error && <p className="error">Error: {error}</p>
      )}
    </div>
  );
};
