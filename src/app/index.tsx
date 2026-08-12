import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherMain from "../components/WeatherMain";
import WeatherInfoCard from "../components/WeatherInfoCard";
import HourlyForecast from "../components/HourlyForecast";

import { getWeather, getForecast } from "../services/weatherService";
import { getCityImage } from "../services/imageService";

export default function HomeScreen() {
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [city, setCity] = useState("Istanbul");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    loadWeather("Istanbul");
  }, []);

  async function loadWeather(searchCity: string) {
  if (!searchCity.trim()) return;

  try {
    setLoading(true);

    console.log("1️⃣ Weather alınıyor...");
    const weatherData = await getWeather(searchCity);
    console.log("✅ Weather:", weatherData.name);

    setWeather(weatherData);

    console.log("2️⃣ Forecast alınıyor...");
    const forecastData = await getForecast(searchCity);
    console.log("✅ Forecast geldi");

    setForecast(forecastData.list.slice(0, 8));

    console.log("3️⃣ Resim alınıyor...");
    const image = await getCityImage(weatherData.name);
    console.log("✅ Resim:", image);

    setBackgroundImage(image);
  } catch (error: any) {
    console.log("❌ HATA:", error);
    console.log("❌ HATA MESAJI:", error?.message);
  } finally {
    setLoading(false);
  }
}

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1 }}
        size="large"
      />
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <ImageBackground
      source={
        backgroundImage
          ? { uri: backgroundImage }
          : require("../../assets/images/default.jpg")
      }
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        <Header />

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={() => loadWeather(city)}
        />

        <WeatherMain
          city={weather.name}
          country={weather.sys.country}
          temperature={weather.main.temp}
          description={weather.weather[0].description}
          feelsLike={weather.main.feels_like}
        />

        <HourlyForecast data={forecast} />

        <View style={styles.cardsContainer}>
          <WeatherInfoCard
            icon="💧"
            value={`${weather.main.humidity}%`}
            label="Nem"
          />

          <WeatherInfoCard
            icon="🌬️"
            value={`${weather.wind.speed} m/s`}
            label="Rüzgar"
          />

          <WeatherInfoCard
            icon="🌡️"
            value={`${weather.main.pressure} hPa`}
            label="Basınç"
          />
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
});