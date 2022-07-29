/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGrey: 'hsl(0, 0%, 98%)',
        darkBlue: 'hsl(200, 15%, 8%)',
      },
      backgroundImage: {
        'header': "url('/images/background-image.png')",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0 0 0 10000px rgba(0,0,0,0.75)',
      }
    },
  },
  plugins: [],
}