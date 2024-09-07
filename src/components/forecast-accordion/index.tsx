import React from "react";
import AccordionItem from "../accordion-item";
import { ForecastData } from "../../types/type";

interface ForecastAccordionProps {
  forecast: ForecastData[];
}

const ForecastAccordion: React.FC<ForecastAccordionProps> = ({ forecast }) => {
  const groupForecastByDay = (forecast: ForecastData[]) => {
    const grouped: { [key: string]: ForecastData[] } = {};
    forecast.forEach((data) => {
      const day = new Date(data.date).toLocaleDateString("en-US", { weekday: "long" });
      if (!grouped[day]) {
        grouped[day] = [];
      }
      grouped[day].push(data);
    });
    return grouped;
  };

  const groupedForecast = groupForecastByDay(forecast);

  return (
    <div className="forecast-accordion">
      {Object.entries(groupedForecast).map(([day, forecasts], index) => (
        <AccordionItem key={index} day={day} forecasts={forecasts} />
      ))}
    </div>
  );
};

export default ForecastAccordion;
