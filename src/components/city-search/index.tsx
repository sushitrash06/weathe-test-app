import React, { useState } from 'react';

interface CitySearchProps {
  onSearch: (cityName: string) => void;
  onFilter: (minTemp: number) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSearch, onFilter }) => {
  const [cityName, setCityName] = useState<string>('');
  const [minTemp, setMinTemp] = useState<number>(0);

  const handleSearch = () => {
    onSearch(cityName);
    setCityName('');
  };

  const handleFilter = () => {
    onFilter(minTemp);
  };

  return (
    <div className="city-search">
      <input
        type="text"
        value={cityName}
        placeholder="Enter city name"
        onChange={e => setCityName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <input
        type="number"
        value={minTemp}
        placeholder="Min Temperature"
        onChange={e => setMinTemp(Number(e.target.value))}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default CitySearch;
