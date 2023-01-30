import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { BodyArea } from "../components/BodyArea";
import { Topbar } from "../components/Topbar";

import { darkTheme, lightTheme } from "../components/styles/themeStyle";
import { MainLayoutStyle } from "./style";

function MainLayout() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <MainLayoutStyle>
        <Topbar
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          theme={theme}
        />
        <BodyArea />
      </MainLayoutStyle>
    </ThemeProvider>
  );
}

export { MainLayout };
