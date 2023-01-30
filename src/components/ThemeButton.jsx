import { useState } from "react";
import { ThemeButtonStyle } from "./styles/theme-button-style";

function ThemeButton({ toggleTheme }) {
  // const [isToggled, setIsToggled] = useState(isDarkTheme);

  // const onToggle = () => {
  //   setIsToggled(!isToggled);
  //   toggleTheme();
  // };

  return (
    <ThemeButtonStyle onClick={toggleTheme}>
      <i className="bi bi-moon-fill" /> Dark Mode
    </ThemeButtonStyle>
  );
}

export { ThemeButton };
