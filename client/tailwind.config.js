/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        
        'hero-pattern': "url('/src/themes/theme1/components/assets/backgroundcolor.png')",
      }),
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'navbg': '#1C1C1C',
        'secondarypink' : '#CF0070',
        'secondaryblue' : '#00C2FF',
        'theme2bg' : '#202020',
        'theme2text' : '#A9A9A9',

        'lightblue': '#00F0FF',
        'bluecustom': '#0072EE',
        'pinkcustom': '#FA124A',
        'black': '#000000',
        'darkblue': '#17293F',
        'backblack': '#202020',
        'desccolor': '#A9A9A9',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      
    },
    fontFamily: {
      'display': ['Poppins'],
      'body': ['"Poppins"'],
    }
    
  },
  plugins: [],
}
