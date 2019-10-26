import { useLocalStorage } from "react-use";
import "../styles/main.css";
const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <div className={theme}>
      <div
        className="absolute top-0 right-0 btn btn-secondary mr-4 mt-4 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
