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
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {weather.name &&
        weather.forecast.slice(1).map((forecast, index) => {
          return (
            <Box
              key={index}
              {...(theme === "dark"
                ? { border: "1px solid rgba(255, 255, 255, 0.25)" }
                : { border: "1px solid rgba(0, 0, 0, 0.25)" })}
              w={"10rem"}
              h={"10rem"}
              marginTop={"20px"}
              borderRadius={"12px"}
            >
              <Center style={{ margin: "12px" }}>
                <Image
                  src={`https://developer.foreca.com/static/images/symbols/${forecast.symbol}.png`}
                  w={16}
                  h={16}
                ></Image>
              </Center>
              <Text
                style={{ textAlign: "center", marginTop: "10px" }}
                textColor={"gray.400"}
              >
                {capitalizeFirst(forecast.symbolPhrase)}
              </Text>
              <Center>
                <Text>
                  {`${forecast.minTemp} ${unit === "F" ? "°F" : "°C"} / 
                  ${forecast.maxTemp} ${unit === "F" ? "°F" : "°C"} `}
                </Text>
              </Center>
            </Box>
          );
        })}
    </div>
  );
}

export default Section;
