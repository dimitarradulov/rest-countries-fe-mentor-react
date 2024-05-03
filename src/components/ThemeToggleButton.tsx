import { FaMoon } from "@react-icons/all-files/fa/FaMoon";

import useThemeContext from "../hooks/useThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button className="flex items-center gap-2" onClick={toggleTheme}>
      <FaMoon />
      <span className="font-semibold md:text-base">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
};

export default ThemeToggleButton;
