/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        'logoNetflix': "url('../img/logo.png')",
        'backNetflix': "url('../img/baner.jpg')",

        'IconXs': "url('../img/perfil.png')",
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      fontFamily:{
        Montserrat:['Montserrat', 'san-serif'],
        Netflixfont:['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

