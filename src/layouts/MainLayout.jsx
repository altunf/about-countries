import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { BodyArea } from "../components/BodyArea";
import { TopBar } from "../components/TopBar";

import { darkTheme, lightTheme } from "../components/styles/theme-style";
import { MainLayoutStyle } from "../layouts/styles/main-layout-style";
import { GlobalStyle } from "../styles/global";

function MainLayout() {
  const [theme, setTheme] = useState("light");

  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainLayoutStyle>
        <TopBar
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
