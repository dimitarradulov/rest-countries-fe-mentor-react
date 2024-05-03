import { useEffect, useState } from "react";

import { Theme } from "../models/theme.model";
import { addThemeClassToDocumentElement, getTheme } from "../utils/theme.utils";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    addThemeClassToDocumentElement(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
