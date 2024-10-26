/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:"0rem",
      screens:{
        "2xl": "1596px",
      },},
    extend: {
      fontFamily: {
        outfit:["outfit"],
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        custom: ['YourCustomFont', 'sans-serif'],
      },
      colors: {
        primary: '#1D4ED8', 
        secondary: '#9333EA', 
        customGreen: '#10B981', 
        customRed: '#EF4444', 
      },
      backgroundImage: {
        'custom-gradient-bg': 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
        // 'custom-gradient-text': 'linear-gradient(270deg, #DF8908 50%, #B415FF 100%)',

      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          background: 'linear-gradient(270deg, #DF8908 50%, #B415FF 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
      }, ['responsive', 'hover']);  
    }),
  ],
}

