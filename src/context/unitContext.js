import { createContext, useContext, useState, useEffect } from "react";

const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState(localStorage.getItem("unit") || "C");

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

  const values = {
    unit,
    setUnit,
  };

  return (
    <UnitContext.Provider value={values}>{children} </UnitContext.Provider>
  );
};

export const useUnit = () => useContext(UnitContext);
