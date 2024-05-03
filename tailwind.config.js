/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(250px, 1fr))",
      },
      colors: {
        "dark-mode-blue": "hsl(209, 23%, 22%)",
        "dark-mode-darker-blue": "hsl(207, 26%, 17%)",
        "light-mode-darker-blue": "hsl(200, 15%, 8%)",
        "light-mode-gray": "hsl(0, 0%, 52%)",
        "light-mode-off-white": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
