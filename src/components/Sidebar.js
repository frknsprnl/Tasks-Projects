import React from "react";
import { useWeather } from "../context/weatherContext";
import { useUnit } from "../context/unitContext";
import { Image, Text, Center } from "@chakra-ui/react";

function Sidebar() {
  const { weather } = useWeather();
  const { unit } = useUnit();

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      {weather.name && (
        <div style={{ marginTop: "40px" }}>
          <Text style={{ fontSize: "2.5em", textAlign: "center" }}>
            {`${weather.name}`}
          </Text>
          <Text
            style={{ fontSize: "1.2em", textAlign: "center" }}
            textColor={"gray.500"}
          >
            {`${weather.country}`}
          </Text>
          <Center>
            <Image
              src={`https://developer.foreca.com/static/images/symbols/${weather.forecast[0].symbol}.png`}
              alt={weather.forecast[0].symbolPhrase}
            ></Image>
          </Center>

          <Center>
            <Text fontSize={"1.5em"}>
              {capitalizeFirst(weather.forecast[0].symbolPhrase)}
            </Text>
          </Center>

          <Center>
            <Text fontSize={"1.3em"}>
              {`${weather.forecast[0].minTemp} ${
                unit === "F" ? "°F" : "°C"
              } / ${weather.forecast[0].maxTemp} ${unit === "F" ? "°F" : "°C"}`}
            </Text>
          </Center>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
