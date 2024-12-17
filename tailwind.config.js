/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.{html,js}"
  ],
  theme: {
    extend: {     
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }, 
      colors: {
        fire: "#E3261B",       // Color rojo principal
        lightfire: "#FF5C5C",  // Rojo más claro
        dark: "#000000",       // Negro
        softwhite: "#F9C5C5",  // Blanco/rosa suave
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

