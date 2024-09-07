import React from 'react';

interface City {
  id: number;
  name: string;
  temperature: number;
  weather: string;
}

interface CityListProps {
  cities: City[];
  onCityClick: (city: City) => void;
}

const getWeatherColor = (weather: string) => {
  if (weather.toLowerCase().includes('clear') || weather.toLowerCase().includes('sun')) {
    // Sunny/Clear palette
    return {
      backgroundColor: '#FFBF78',
      borderColor: '#FF7D29',
      color: '#FFEEA9',
    };
  } else if (weather.toLowerCase().includes('rain')) {
    // Rainy palette
    return {
      backgroundColor: '#A7E6FF',
      borderColor: '#3ABEF9',
      color: '#3572EF',
    };
  }
  // Default color (for other weather conditions)
  return {
    backgroundColor: '#f4f4f4',
    borderColor: '#cccccc',
    color: '#000',
  };
};

const CityList: React.FC<CityListProps> = ({ cities, onCityClick }) => {
  return (
    <div className="city-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
      {cities.map(city => {
        const weatherColor = getWeatherColor(city.weather);

        return (
          <div 
            key={city.id} 
            className="city-item" 
            onClick={() => onCityClick(city)} 
            style={{
              ...weatherColor,
              padding: '15px',
              borderRadius: '5px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              flex: '1 1 calc(33.333% - 20px)',
              marginBottom: '20px',
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
          >
            <h3>{city.name}</h3>
            <p>Temperature: {city.temperature}°C</p>
            <p>Weather: {city.weather}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CityList;
