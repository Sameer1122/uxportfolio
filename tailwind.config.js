/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        accent: "#FFB6C1",
        accentLight: "#85fcdb",
        accent2: "#e0082d",
        accent2Light: "#ef8396",
      },
      textColor: {
        accent2: "#e0082d",
      },
    },
  },
  plugins: [],
};
