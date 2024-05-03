import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext.tsx";
import { CountriesProvider } from "./context/CountriesContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
