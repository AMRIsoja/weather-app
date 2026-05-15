import { useState } from "react";
import "./App.css";

import { fetchWeather } from "./services/weatherApi";

import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="app">
      <div className="weather-container">
        <h1>Weather App</h1>
        <p>Search for the current weather in any city.</p>

        {/* Search Component */}
        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
          loading={loading}
          onKeyDown={handleKeyDown}
        />

        {/* Loading */}
        {loading && <Loading />}

        {/* Error */}
        <ErrorMessage message={error} />

        {/* Weather Display */}
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}

export default App;
