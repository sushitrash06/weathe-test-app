import React, { useState, useEffect } from "react";
import "./App.css";
import { CityWeatherWithForecast, ForecastData } from "./types/type";
import { fetchForecastData, fetchWeatherData } from "./utilis/api";
import SearchInput from "./components/search-input";
import WeatherCard from "./components/weather-card";
import ForecastAccordion from "./components/forecast-accordion";

const App: React.FC = () => {
  const [city, setCity] = useState<CityWeatherWithForecast | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = "8a1a96efbfbc88969a89e7f7d102b490";

  const handleSearch = async (cityName: string) => {
    try {
      setLoading(true);
      const data = await fetchWeatherData(`q=${cityName}`, apiKey);

      if (data.cod !== 200) {
        setError("City not found");
        setLoading(false);
        return;
      }

      const cityData: CityWeatherWithForecast = {
        coord: data.coord,
        weather: data.weather,
        main: data.main,
        visibility: data.visibility,
        wind: data.wind,
        clouds: data.clouds,
        dt: data.dt,
        sys: data.sys,
        timezone: data.timezone,
        id: data.id,
        name: data.name,
        cod: data.cod,
        weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        forecast: [],
      };

      setCity(cityData);

      const forecastData = await fetchForecastData(cityData.id, apiKey);

      const forecast: ForecastData[] = forecastData.list.map((entry: any) => ({
        date: entry.dt_txt,
        temperature: entry.main.temp,
        weather: entry.weather[0].description,
        color: entry.weather[0].id,
        icon: `https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`,
      }));

      setCity((prevCity) =>
        prevCity ? { ...prevCity, forecast } : prevCity
      );

      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Error fetching data");
      setLoading(false);
    }
  };

  const fetchWeatherForCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          setLoading(true);
          const data = await fetchWeatherData(`lat=${latitude}&lon=${longitude}`, apiKey);

          if (data.cod !== 200) {
            setError("Error fetching data");
            setLoading(false);
            return;
          }

          const cityData: CityWeatherWithForecast = {
            coord: data.coord,
            weather: data.weather,
            main: data.main,
            visibility: data.visibility,
            wind: data.wind,
            clouds: data.clouds,
            dt: data.dt,
            sys: data.sys,
            timezone: data.timezone,
            id: data.id,
            name: data.name,
            cod: data.cod,
            weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            forecast: [],
          };

          setCity(cityData);

          const forecastData = await fetchForecastData(cityData.id, apiKey);

          const forecast: ForecastData[] = forecastData.list.map((entry: any) => ({
            date: entry.dt_txt,
            temperature: entry.main.temp,
            weather: entry.weather[0].description,
            color: entry.weather[0].id,
            icon: `https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`,
          }));

          setCity((prevCity) =>
            prevCity ? { ...prevCity, forecast } : prevCity
          );

          setLoading(false);
        } catch (err) {
          console.error("Fetch error:", err);
          setError("Error fetching data");
          setLoading(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setError("Error fetching location");
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchWeatherForCurrentLocation();
  }, []);

  return (
    <div className="container">
      <h2>City Weather</h2>
      <SearchInput onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {city && <WeatherCard city={city} />}
      {city?.forecast && <ForecastAccordion forecast={city.forecast} />}
    </div>
  );
};

export default App;
