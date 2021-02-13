const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors,
        blurple: '#7289da',
        arda: '#12233c',
        cardBg: '#202020',
        telegram: '#179cde'
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
  plugins: [require('@tailwindcss/typography')],
}
