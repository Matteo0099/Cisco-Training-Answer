/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto", "sans - serif"],
        "mono": ["monospace", "sans - serif"],
      }
    },
  },
  plugins: [],
}