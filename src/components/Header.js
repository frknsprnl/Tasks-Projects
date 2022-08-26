import { IconButton, Switch, Text } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import "../App.css";
import { useTheme } from "../context/themeContext";
import { useState, useEffect } from "react";
import { useWeather } from "../context/weatherContext";
import { getLocation } from "../api/weatherAPI";
import { useUnit } from "../context/unitContext";

function Header() {
  const { theme, setTheme } = useTheme();
  const { setWeather } = useWeather();
  const { unit, setUnit } = useUnit();
  const [form, setForm] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      getLocation(form, unit).then((item) => setWeather(item));
    } catch (error) {
      console.log(error);
      return false;
    }
    setSearch(form);
    setForm("");
  };

  useEffect(() => {
    if (search) {
      getLocation(search, unit).then((item) => setWeather(item));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit]);

  return (
    <header
      className={`header`}
      style={
        theme === "dark"
          ? {
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 2px 4px -1px rgba(0,0,0,0.25)",
            }
          : {
              borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px",
            }
      }
    >
      <div className={`headerContainer`}>
        <form className="weatherForm" onSubmit={handleSubmit}>
          <input
            className={`searchBar`}
            style={
              theme === "light"
                ? { color: "#f3f2ef", backgroundColor: "#4A5568" }
                : { color: "#1a202c", backgroundColor: "#fff" }
            }
            type="text"
            spellCheck={false}
            value={form}
            onChange={handleChange}
          />
        </form>
        {/* </Hide> */}

        <div className="utilityContainer">
          <IconButton
            w={[8, 12]}
            h={[8, 12]}
            backgroundColor={"transparent"}
            _hover={
              theme === "dark"
                ? { backgroundColor: "#30343c" }
                : { backgroundColor: "" }
            }
            aria-label="Search database"
            onClick={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
            icon={
              theme === "dark" ? (
                <SunIcon w={[6, 8]} h={[6, 8]} color={"yellow.400"} />
              ) : (
                <MoonIcon w={[6, 8]} h={[6, 8]} color={"gray.600"} />
              )
            }
          />
          <Text fontSize={["20px", "2xl"]}>°C</Text>
          <Switch
            size={["md", "lg"]}
            colorScheme={theme === "dark" ? "purple" : "gray"}
            onChange={(e) => {
              e.target.checked === true ? setUnit("F") : setUnit("C");
            }}
          />
          <Text fontSize={["20px", "2xl"]}>°F</Text>
        </div>
      </div>
    </header>
  );
}

export default Header;
