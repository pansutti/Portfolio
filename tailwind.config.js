/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        blue: "#0080ff",
        green: "#1D27",
      },
    },
  },
  plugins: [],
}

