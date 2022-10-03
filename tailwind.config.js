/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layout/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          aqua: "#457080",
          "aqua-amber": "#697f89",
          peach: "#f5d5bf",
          "aqua-lime": "#3489a1",
        },
      },
    },
  },
  plugins: [],
};
