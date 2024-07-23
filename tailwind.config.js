/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'vazir': ['vazir'],
      },
      colors: {
        "filimo-yellow": "#fdc13b",
        "filimo-green": "#1cb561"
      },
      backgroundImage: {
        "first-showcase-bg": "url('/src/images/payment_landing.png')",
        "article-card-bg": "url('/src/images/1.jpg')",
        "second-showcase-bg": "url('/src/images/2.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};

