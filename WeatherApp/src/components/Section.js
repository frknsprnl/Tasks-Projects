import React from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useTheme } from "../context/themeContext";
import { useWeather } from "../context/weatherContext";
import { useUnit } from "../context/unitContext";

function Section() {
  const { theme } = useTheme();
  const { weather } = useWeather();
  const { unit } = useUnit();

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const isoDateConverter = (date) => {
    const newDate = new Date(date);
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return `${days[newDate.getDay()]} ${date.slice(-2)}`;
  };
  return (
    <div className={`section ${theme === "dark" ? "dark" : "light"}`}>
      {weather.name &&
        weather.forecast.slice(1).map((forecast, index) => {
          return (
            <Box
              key={index}
              style={
                theme === "dark"
                  ? {
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }
                  : {
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                    }
              }
              w={"11rem"}
              h={"11rem"}
              marginTop={"20px"}
              borderRadius={"12px"}
            >
              <Text marginLeft={3} marginTop={2} fontSize={14} fontWeight={500}>
                {isoDateConverter(forecast.date)}
              </Text>
              <Center style={{ margin: "12px" }}>
                <Image
                  src={`https://developer.foreca.com/static/images/symbols/${forecast.symbol}.png`}
                  w={16}
                  h={16}
                ></Image>
              </Center>
              <Text style={{ textAlign: "center" }} textColor={"purple.500"}>
                {capitalizeFirst(forecast.symbolPhrase)}
              </Text>
              <Center display={"flex"} gap={".8em"}>
                <Text>
                  {`${forecast.maxTemp} ${unit === "F" ? "°F" : "°C"}`}
                </Text>
                <Text textColor={"gray.500"}>
                  {`${forecast.minTemp} ${unit === "F" ? "°F" : "°C"}`}
                </Text>
              </Center>
            </Box>
          );
        })}

      <div style={{ position: "absolute", bottom: 20, right: 20 }}>
        <a href="https://github.com/frknsprnl" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill={`${theme === "dark" ? "#fff" : "#50546c"}`}
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Section;
