import { useState, createContext } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Navbar />
        <BookList />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
