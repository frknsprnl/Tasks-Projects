import React from "react";
import Sidebar from "./Sidebar";
import Section from "./Section";
import { useTheme } from "../context/themeContext";

function Main() {
  const { theme } = useTheme();

  return (
    <div style={{ display: "flex" }}>
      <div
        className="sideBar"
        style={
          theme === "dark"
            ? { borderRight: "1px solid rgba(255, 255, 255, 0.25)" }
            : { borderRight: "1px solid rgba(0, 0, 0, 0.25)" }
        }
      >
        <Sidebar />
      </div>
      <div className="section">
        <Section />
      </div>
    </div>
  );
}

export default Main;
