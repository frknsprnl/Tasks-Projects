import { IconButton, Switch, Text, Show, Hide } from "@chakra-ui/react";
import { MoonIcon, SearchIcon } from "@chakra-ui/icons";
import "../App.css";
import { useTheme } from "../context/themeContext";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className={`header`}>
      <div className={`headerContainer`}>
        <Show below="md">
          <IconButton
            className="searchButton"
            w={12}
            h={12}
            backgroundColor={"transparent"}
            _hover={{ backgroundColor: "#30343c" }}
            aria-label="Search"
            icon={<SearchIcon w={8} h={8} />}
          />
        </Show>

        <Hide below="md">
          <input
            className={`searchBar ${theme === "dark" ? "light" : "dark"}`}
            type="text"
            spellCheck={false}
          />
        </Hide>

        <div className="utilityContainer">
          <IconButton
            w={12}
            h={12}
            backgroundColor={"transparent"}
            _hover={{ backgroundColor: "#30343c" }}
            aria-label="Search database"
            onClick={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
            icon={<MoonIcon w={8} h={8} color={"teal"} />}
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
