module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Proxima Nova', 'system-ui', 'apple-system', 'sans-serif'],
      'mono': ['ui-monospace', 'sans-serif']
    },
    extend: {
      fontFamily: {
        primary: "Proxima Nova, sans-serif"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    "prettier-plugin"
  ],
}
