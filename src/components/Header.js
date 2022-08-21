import { IconButton, Switch, Text, Show, Hide } from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import "../App.css";
import { useTheme } from "../context/themeContext";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header
      className={`header`}
      style={
        theme === "dark"
          ? { borderBottom: "1px solid rgba(255, 255, 255, 0.25)" }
          : { borderBottom: "1px solid rgba(0, 0, 0, 0.25)" }
      }
    >
      <div className={`headerContainer`}>
        <Show below="md">
          <IconButton
            className="searchButton"
            w={12}
            h={12}
            backgroundColor={"transparent"}
            _hover={
              theme === "dark"
                ? { backgroundColor: "#30343c" }
                : { backgroundColor: "" }
            }
            aria-label="Search"
            icon={<SearchIcon w={8} h={8} />}
          />
        </Show>

        <Hide below="md">
          <input
            className={`searchBar ${theme === "dark" ? "light" : "dark"}`}
            style={
              theme === "light" ? { color: "#f3f2ef" } : { color: "#1a202c" }
            }
            type="text"
            spellCheck={false}
          />
        </Hide>

        <div className="utilityContainer">
          <IconButton
            w={12}
            h={12}
            backgroundColor={"transparent"}
            _hover={
              theme === "dark"
                ? { backgroundColor: "#30343c" }
                : { backgroundColor: "" }
            }
            aria-label="Search database"
            onClick={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
            icon={
              theme === "dark" ? (
                <MoonIcon w={8} h={8} color={"teal"} />
              ) : (
                <SunIcon w={8} h={8} color={"teal"} />
              )
            }
          />
          <Text fontSize={"2xl"}>°C</Text>
          <Switch size={"lg"} colorScheme="teal" />
          <Text fontSize={"2xl"}>°F</Text>
        </div>
      </div>
    </header>
  );
}

export default Header;
