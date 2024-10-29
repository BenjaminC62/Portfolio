const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        text: "#00ffee",
        main: "#0A0A0A",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        name: "0 0 25px var(--tw-shadow-color)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        124: "40rem",
      },
      height: {
        124: "40rem",
      },
      borderRadius: {
        50: "50%",
      },
      dropShadow: {
        img: "0 0 25px var(--tw-shadow-color)",
      },
      ringOffsetColor: {
        primary: "#0A0A0A",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
