import React from "react";
import Header from "./Header";
import Main from "./Main";

import { useTheme } from "../context/themeContext";

function Container() {
  const { theme } = useTheme();

  return (
    <div>
      <div className={`App ${theme}`}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default Container;
