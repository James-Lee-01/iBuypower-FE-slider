import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xs":"480px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        "xs":"480px",
        'md': {'min': '768px', 'max': '1023px'},
        "3xl": "1920px",
      },
      fontFamily: {
        gotham: ["Gotham-Book"],
        gothamBold: ["Gotham-Bold"],
      },
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "light-grey": "#00000029",
        "grey": "#929292",
        "light-blue": "#F2F6FA",
        "blue": "#004CFF",
        "red": "#FF1B1B",
      }
    },
  },
  plugins: [],
};
export default config;
