const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      consolas: ['Consolas'],
      inter: ['Inter', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif']
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
}
