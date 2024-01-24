/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-300": "#DEE2E7",
        "gray-500": "#5E0000",
        "gray-600": "#505050",
        "blue-300": "#8CB7F5",
        "blue-500": "#0D6EFD",
        "red-500": "#FA3434",
        "primary-100": "#d8dedd",
        "primary-300": "#96c0b9",
        "primary-400": "#499589",
        "primary-500": "#35776D",
        "secondary-500": "#2EA6E5",
        "secondary-600":"#FF9017"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
}

