import { ThemeButtonStyle } from "./styles/themeButton-style";

function ThemeButton({ toggleTheme }) {
  return (
    <ThemeButtonStyle onClick={toggleTheme}>
      <i className="bi bi-moon-fill" /> Dark Mode
    </ThemeButtonStyle>
  );
}

export { ThemeButton };
