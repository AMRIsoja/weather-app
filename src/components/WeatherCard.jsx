function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <p>
        <strong>Temperature:</strong> {weather.main.temp}°C
      </p>

      <p>
        <strong>Condition:</strong>{" "}
        {weather.weather[0].description}
      </p>

      <p>
        <strong>Humidity:</strong> {weather.main.humidity}%
      </p>

      <p>
        <strong>Wind Speed:</strong> {weather.wind.speed} m/s
      </p>
    </div>
  );
}

export default WeatherCard;
