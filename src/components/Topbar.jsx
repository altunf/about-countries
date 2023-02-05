import React from "react";
import { Logo } from "./Logo";
import { ThemeButton } from "./ThemeButton";

import { TopbarStyle } from "./styles/topbar-style";

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
