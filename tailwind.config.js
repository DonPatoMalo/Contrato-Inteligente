/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'Negro': '#000000',
        'Blanco': '#ffffff',
        'Rojo': '#B2130D'
      },
      backgroundColor: theme => ({
        ...theme('colors'), 
        'Negro': '#000000',
        'Blanco': '#ffffff',
        'Rojo': '#B2130D'
      }),

      borderColor: {
        'Negro': '#000000',
        'Blanco': '#ffffff',
        'Rojo': '#B2130D'
      },

      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

