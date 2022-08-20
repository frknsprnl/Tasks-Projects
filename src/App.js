import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
      </div>
    </ChakraProvider>
  );
}

export default App;
