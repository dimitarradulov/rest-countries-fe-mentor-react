export type Theme = "dark" | "light";
export type ThemeContextType = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};
