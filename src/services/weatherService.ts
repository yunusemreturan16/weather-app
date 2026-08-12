const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

// Anlık hava durumu
export async function getWeather(city: string) {
  const response = await fetch(
    `${WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
  );

  if (!response.ok) {
    throw new Error("Şehir bulunamadı.");
  }

  return await response.json();
}

// Saatlik tahmin
export async function getForecast(city: string) {
  const response = await fetch(
    `${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
  );

  if (!response.ok) {
    throw new Error("Tahmin verisi alınamadı.");
  }

  return await response.json();
}