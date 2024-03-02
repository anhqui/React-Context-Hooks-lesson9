import { useState, createContext } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ThemeToggle";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  const toggleTheme = (theme) => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Navbar />
        <BookList />
        <ToggleTheme />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
