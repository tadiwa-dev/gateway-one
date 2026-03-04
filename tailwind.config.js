/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        panhari: {
          red: '#F11727',
          orange: '#E78A20',
          dark: '#222222',
          light: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}
