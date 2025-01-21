/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["bg-green-500", "bg-red-500", "bg-yellow-500", "bg-blue-500"],
  theme: {
    extend: {},
  },
  plugins: [],
};
