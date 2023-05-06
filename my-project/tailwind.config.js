/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ral: ["var(--font-ral)", ...fontFamily.sans],
      },
      colors: {
        dark: "#0000",
        brown: "#4f2402",
        navgray: "#c7d0d8",
        divHero: "rgba(10, 25, 233, 0.603)",
      },
    },
  },
  plugins: [],
};
