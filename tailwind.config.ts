const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css"
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
        fontFamily: {
          gotham: ['Gotham', 'sans-serif'],
          ipa: ['IPA Gothic', 'sans-serif'],
        },
        
        colors: {
          black: 'oklch(0% 0 0)',
          white: 'oklch(100% 0 0)',
          highlight: 'oklch(84.42% 0.19 202.24)',
          accent: 'var(--accent)'
        },

        keyframes: {
          grow: {
            '0%': { width: '0px' },
            '100%': { width: '300px' },
          },
          fadeHighlight: {
            '0%': { opacity: '1', backgroundPosition: '0% 50%' },
            '80%': { opacity: '1' , backgroundPosition: '100% 50%' },
            '100%': { opacity: '0' , backgroundPosition: '100% 50%' },
          },
          quoteLineGrow: {
            '0%': { width: '0%' },    
            '100%': { width: '100%' } 
          },
        },
        animation: {
          grow: 'grow  2s 500ms ease-out forwards', 
          fadeHighlight: 'fadeHighlight 5s ease-in-out forwards  infinite',
          quoteLineGrow: 'grow 1s ease-out forwards'
        },
    },
  },
  plugins: [
    addVariablesForColors
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
