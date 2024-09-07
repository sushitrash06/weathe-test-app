import React from "react";
import { getWeatherColor } from "../../utilis/utils";
import { CityWeatherWithForecast } from "../../types/type";


interface WeatherCardProps {
  city: CityWeatherWithForecast;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
  return (
    <div className="city-item" style={getWeatherColor(city.weather[0].id)}>
      <div>
        <h3>{city.name}</h3>
        <p>Temperature: {city.main.temp}°C</p>
        <p>Weather: {city.weather[0].description}</p>
      </div>
      <div>
        {city.weatherIcon && (
          <img
            src={city.weatherIcon}
            alt={city.weather[0].description}
            style={{ width: 60, height: 60, marginRight: 10 }}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
