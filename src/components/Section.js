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
    </div>
  );
}

export default Section;
