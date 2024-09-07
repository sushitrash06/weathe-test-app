// types/type.ts

export interface CityWeather {
    coord: {
      lon: number;
      lat: number;
    };
    weather: Weather[];
    main: MainWeather;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
    weatherIcon?: string; // Add this line
  }
  
  
  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export interface MainWeather {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }
  
  export interface Wind {
    speed: number;
    deg: number;
  }
  
  export interface Clouds {
    all: number;
  }
  
  export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
  


  export interface WeatherData {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherList[];
    city: City;
  }
  
  export interface WeatherList {
    dt: number;
    main: MainWeather;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
  }
  
  export interface MainWeather {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  }
  
  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export interface Clouds {
    all: number;
  }
  
  export interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }
  
  export interface Sys {
    pod: string;
  }
  
  export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
  
  export interface Coord {
    lat: number;
    lon: number;
  }
  
  export interface CityWeatherWithForecast extends CityWeather {
    forecast?: ForecastData[];
  }
  
 export interface ForecastData {
    date: string;
    temperature: number;
    weather: string;
    color: number;
    icon: string;
  }
  