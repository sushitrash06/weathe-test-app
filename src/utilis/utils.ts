export const getWeatherColor = (weatherId: number) => {
    const weatherColors: { [key: number]: React.CSSProperties } = {
      // Add color mappings for different weather conditions
      200: { backgroundColor: "#d3c7c7" }, // Thunderstorm
      300: { backgroundColor: "#b0e0e6" }, // Drizzle
      500: { backgroundColor: "#87ceeb" }, // Rain
      600: { backgroundColor: "#ffffff" }, // Snow
      701: { backgroundColor: "#c0c0c0" }, // Atmosphere
      800: { backgroundColor: "#00bfff" }, // Clear
      801: { backgroundColor: "#f0e68c" }, // Clouds
      // Add more mappings as needed
    };
  
    return weatherColors[weatherId] || { backgroundColor: "#ffffff" };
  };
  