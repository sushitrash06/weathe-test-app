// fetchWeatherData.ts
export const fetchWeatherData = async (query: string, apiKey: string) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&appid=${apiKey}&units=metric`);
    if (!response.ok) throw new Error("Network response was not ok.");
    return response.json();
  };
  
  // fetchForecastData.ts
  export const fetchForecastData = async (cityId: number, apiKey: string) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`);
    if (!response.ok) throw new Error("Network response was not ok.");
    return response.json();
  };
  