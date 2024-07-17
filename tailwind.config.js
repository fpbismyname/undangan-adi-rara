/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    screens:{
      'mobile': {'max': '639px'},
      'tablet': {'min': '640px', 'max': '1023px'},
      'desktop': {'min': '1024px', 'max': '1279px'},
      'large-desktop': {'min': '1280px', 'max': '1535px'},
    },
    fontFamily:{
      'Pacifico' : 'Pacifico',
      'Fredoka' : 'Fredoka'
    },
    extend:{
      colors:{
        'font-white': '#FFFFFF',
        'font-primary': '#BD7777',
        'font-secondary': '#BD7777',
        'color-primary' : '#2D2D2D',
        'color-secondary' : '#272727',
      }
    }
  },
  extend: {},
  plugins: [],
}