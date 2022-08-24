import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  const values = {
    weather,
    setWeather,
  };

  return (
    <WeatherContext.Provider value={values}>
      {children}{" "}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
