import { createContext, useContext, useState } from "react";

const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState("C");

  // useEffect(() => {
  //   console.log(unit);
  // }, [unit]);

  const values = {
    unit,
    setUnit,
  };

  return (
    <UnitContext.Provider value={values}>{children} </UnitContext.Provider>
  );
};

export const useUnit = () => useContext(UnitContext);
