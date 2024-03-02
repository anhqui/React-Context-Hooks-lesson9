import { useContext } from "react";
import { ThemeContext } from "../App";

const BookList = () => {
  const { theme: newTheme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = newTheme;
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, backgroundColor: theme.bg }}
    >
      <ul>
        <li style={{ backgroundColor: theme.ui }}>To Kill a Mockingbird</li>
        <li style={{ backgroundColor: theme.ui }}>Don Quixote</li>
        <li style={{ backgroundColor: theme.ui }}>War and Peace</li>
        <li style={{ backgroundColor: theme.ui }}>Gone with the Wind</li>
      </ul>
    </div>
  );
};

export default BookList;
