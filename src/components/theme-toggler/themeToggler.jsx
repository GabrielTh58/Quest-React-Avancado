import { useContext, useState } from "react";
import { ThemeContainer, ToggleContainer, ToggleButton } from "./styles";
import { themes, ThemeContext } from "../../contexts/ThemeToggler";
export const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [ isDark, setIsDark ] = useState(theme === themes.dark);
  const [ isAnimating, setIsAnimating ] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    setIsDark(newTheme === themes.dark);
    setIsAnimating(true);
  };

  return (
    <ThemeContainer $isDark={isDark}>
      <ToggleContainer onClick={toggleTheme} $isDark={isDark}>
        <ToggleButton $isDark={isDark} $isAnimating={isAnimating} theme={theme} />
      </ToggleContainer>
    </ThemeContainer>
  );
};