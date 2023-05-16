/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF00F4",

          "secondary": "#FF7400",

          "accent": "#CBFD03",

          "neutral": "#191A3F",

          "base-100": "#FAFAFA",

          "info": "#3194F6",

          "success": "#5FC992",

          "warning": "#F7DE2D",

          "error": "#E60300",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

