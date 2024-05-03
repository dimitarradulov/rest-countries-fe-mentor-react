import { THEME_LOCAL_STORAGE_KEY } from "../constants";
import { Theme } from "../models/theme.model";

const isDarkModePreferred = (): boolean => {
  return (
    window.localStorage[THEME_LOCAL_STORAGE_KEY] === "dark" ||
    (!(THEME_LOCAL_STORAGE_KEY in window.localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
};

export const getTheme = (): Theme => {
  if (isDarkModePreferred()) {
    return "dark";
  }

  return "light";
};

export const addThemeClassToDocumentElement = (theme: Theme): void => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
