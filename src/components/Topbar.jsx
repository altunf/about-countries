import { Logo } from "./Logo";
import { ThemeButton } from "./ThemeButton";
import { TopBarStyle } from "./styles/top-bar-style";

function TopBar({ toggleTheme, isDarkTheme, theme }) {
  return (
    <TopBarStyle>
      <Logo />
      <ThemeButton
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        theme={theme}
      />
    </TopBarStyle>
  );
}

export { TopBar };
