import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./context/themeContext";
import Header from "./components/Header";

import Container from "./components/Container";
function App() {
  return (
    <ThemeProvider>
      <ChakraProvider>
        <Container />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
