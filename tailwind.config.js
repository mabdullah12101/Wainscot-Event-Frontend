/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{html, js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js, jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#3366FF",
        "main-pink": "#FF3D71",
        "main-gray": "#C1C5D0",
        "main-black": "#373A42",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(./assets/img/bg-hero.png)",
      },
    },
  },
  plugins: [],
};
