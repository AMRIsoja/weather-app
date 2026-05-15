const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeather(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch weather data.");
  }

  return data;
}
