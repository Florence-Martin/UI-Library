/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Si tu utilises le dossier `app` de Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
