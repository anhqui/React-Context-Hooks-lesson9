import { useContext } from "react";
import { ThemeContext } from "../App";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <button onClick={() => toggleTheme(theme)}>Toggle Theme</button>;
};

export default ToggleTheme;
