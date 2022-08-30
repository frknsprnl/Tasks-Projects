import { useState, useEffect } from "react";
import { useWeather } from "../context/weatherContext";
import { useUnit } from "../context/unitContext";
import { Image, Text, Center } from "@chakra-ui/react";
import { useTheme } from "../context/themeContext";

function Sidebar() {
  const { weather } = useWeather();
  const { unit } = useUnit();
  const { theme } = useTheme();
  const [time, setTime] = useState("");

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const isoDateConverter = (date) => {
    const newDate = new Date(date);
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return `${days[newDate.getDay()]} ${date.slice(-2)}`;
  };

  useEffect(() => {
    const timer = () => {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();

      m = checkTime(m);
      s = checkTime(s);

      let currentTime = `${h}:${m}:${s}`;

      setTimeout(timer, 1000);
      setTime(currentTime);
    };

    timer();
  }, [time]);

  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  return (
    <>
      {weather.name && (
        <div
          className="sideBar"
          style={
            theme === "dark"
              ? {
                  borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }
              : {
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }
          }
        >
          <div style={{ marginTop: "2em" }}>
            <Text align={"center"} marginBottom={"1em"} fontSize={"3xl"}>
              {time}
            </Text>
            <Text fontWeight={600}>
              {isoDateConverter(weather.forecast[0].date)}
            </Text>
            <Text style={{ fontSize: "2.5em", textAlign: "center" }}>
              {`${weather.name}`}
            </Text>
            <Text
              style={{ fontSize: "1.2em", textAlign: "center" }}
              textColor={"gray.400"}
            >
              {`${weather.country}`}
            </Text>
            <Center paddingY={6}>
              <Image
                src={`https://developer.foreca.com/static/images/symbols/${weather.forecast[0].symbol}.png`}
                alt={weather.forecast[0].symbolPhrase}
              ></Image>
            </Center>

            <Center>
              <Text fontSize={"1.5em"} textColor={"purple.500"}>
                {capitalizeFirst(weather.forecast[0].symbolPhrase)}
              </Text>
            </Center>

            <Center
              display={"flex"}
              justifyContent={"space-evenly"}
              fontSize={"1.3em"}
            >
              <Text>
                {`${weather.forecast[0].maxTemp} ${unit === "F" ? "°F" : "°C"}`}
              </Text>
              <Text textColor={"gray.500"}>
                {`${weather.forecast[0].minTemp} ${unit === "F" ? "°F" : "°C"}`}
              </Text>
            </Center>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
