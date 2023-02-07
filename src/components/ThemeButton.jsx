import { ThemeButtonStyle } from "./styles/theme-button-style";

function ThemeButton({ toggleTheme }) {
  return (
    <ThemeButtonStyle onClick={toggleTheme}>
      <i className="bi bi-moon-fill" /> Dark Mode
    </ThemeButtonStyle>
  );
}

export { ThemeButton };
