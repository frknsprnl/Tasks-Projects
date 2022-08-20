import React from "react";
import Header from "./Header";

import { useTheme } from "../context/themeContext";

function Container() {
  const { theme } = useTheme();

  return (
    <div>
      <div className={`App ${theme}`}>
        <Header />
      </div>
    </div>
  );
}

export default Container;
