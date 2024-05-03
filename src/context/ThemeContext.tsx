import { PropsWithChildren, createContext } from "react";

import { ThemeContextType } from "../models/theme.model";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
