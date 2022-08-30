import "./App.css";
import "@fontsource/montserrat";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./context/themeContext";
import { WeatherProvider } from "./context/weatherContext";
import { UnitProvider } from "./context/unitContext";
import { extendTheme } from "@chakra-ui/react";
import Container from "./components/Container";

const theme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <UnitProvider>
          <ChakraProvider theme={theme}>
            <Container />
          </ChakraProvider>
        </UnitProvider>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
