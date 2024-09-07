import React, { useState } from "react";
import { getWeatherColor } from "../../utilis/utils";
import { ForecastData } from "../../types/type";

interface AccordionItemProps {
  day: string;
  forecasts: ForecastData[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ day, forecasts }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleClick}>
        <h3>{day}</h3>
        <span className="accordion-toggle">{active ? "−" : "+"}</span>
      </div>
      {active && (
        <div className="accordion-content">
          {forecasts.map((forecast, i) => (
            <div style={getWeatherColor(forecast.color)} key={i} className="forecast-item">
              <div>
                <p>{new Date(forecast.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
                <p>{forecast.temperature}°C</p>
                <p>{forecast.weather}</p>
              </div>
              <div>
                <img style={{ width: '60px', height: '60px' }} src={forecast.icon} alt={forecast.weather} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
