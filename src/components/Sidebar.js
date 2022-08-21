import React from "react";
import { useTheme } from "../context/themeContext";
import { getLatLon } from "../api/weatherAPI";

function Sidebar() {
  const { theme } = useTheme();

  return (
    <div
      className="sideBar"
      style={
        theme === "dark"
          ? { borderRight: "1px solid rgba(255, 255, 255, 0.25)" }
          : { borderRight: "1px solid rgba(0, 0, 0, 0.25)" }
      }
    >
      <button
        onClick={() => {
          getLatLon("eskisehir");
        }}
      >
        API Call!
      </button>
    </div>
  );
}

export default Sidebar;
