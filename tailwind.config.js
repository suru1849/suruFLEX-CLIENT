/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      "Bebas-neue": "'Bebas Neue', sans-serif",
      Exo2: "'Exo 2', sans-serif",
      "Pixelify-Sans": "'Pixelify Sans', sans-serif",
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
