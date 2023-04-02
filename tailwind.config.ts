const colors = require('tailwindcss/colors');
module.exports = {
  
    theme: {
      fontFamily: {
        sans: [ "Roboto", 'sans-serif'],
        default: "Poppins",
        leading: 'Lato',
      },
      extend: {
        colors: {
          'white' : '#fffcfd',
          'light' : '#faf4f4',
          'black' : '#000000',
          'grey'  : '#505450',
          'dark'  : '#171a20',
          'purple': '#7441C4',
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ]
  }