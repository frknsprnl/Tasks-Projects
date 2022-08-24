import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./context/themeContext";
import { WeatherProvider } from "./context/weatherContext";

import Container from "./components/Container";
function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <ChakraProvider>
          <Container />
        </ChakraProvider>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
