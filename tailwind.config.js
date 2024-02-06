/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'white': '#FFF',
        'green-200' : '#a1a79f',
        'green-300' : '#858873',
        'green-400': '#3e4035',
        'avocado-500' : '#818359'
      },
      fontFamily: {
        prata: ['Prata', 'serif',],
        body: ['Prata', 'serif',]
      }
    }
  },
  plugins: [],
}

