import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./context/themeContext";
import { WeatherProvider } from "./context/weatherContext";
import { UnitProvider } from "./context/unitContext";

import Container from "./components/Container";
function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <UnitProvider>
          <ChakraProvider>
            <Container />
          </ChakraProvider>
        </UnitProvider>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
