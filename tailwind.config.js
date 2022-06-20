/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#f5f5f5",
      },
      fontFamily: {
        sans: ["BR Firma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
