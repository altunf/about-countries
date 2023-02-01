import React from "react";
import { Logo } from "./Logo";
import { TopbarStyle } from "./styles/topbar-styles";
import { ThemeButton } from "./ThemeButton";

function Topbar({ toggleTheme, isDarkTheme, theme }) {
  return (
    <TopbarStyle>
      <Logo />
      <ThemeButton
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        theme={theme}
      />
    </TopbarStyle>
  );
}

export { Topbar };
