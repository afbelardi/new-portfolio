/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    minHeight: {
      '50': '50px',
      '150': '150px',
      '200': '200px',
      '300': '300px',
      '400': '400px',
      '600': '600px',
      '800': '800px',
      '1000': '1000px'
    },
    textOrientation: {
      'upright': 'upright'
    },
    writingMode: {
      'vertical': 'vertical-rl'
    },
    minWidth: {
      '50': '50px',
      '85': '85px',
      '100': '150px',
      '200': '200px'
    },
    maxHeight: {
      '30%': '30%',
      '40%': '40%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '200': '200px',
      '400': '400px'
    },
    maxWidth: {
      '30%': '30%',
      '40%': '40%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '400': '400px',
      '500': '500px',
      '780': '780px'
    },
    extend: {
      colors: {
        'navy': '#0a192f',
        'light-navy': '#112240',
        'light-blue': '#3b7ad5',
        'lighter-blue': '#7aa5e3',
      },
      animation: {
        show: 'show 2s ease-out'
      },
      keyframes: {
        show: {
          '0%': {opacity: '0'},
          '110%': {opacity: '1'}
        }
      },
    },
    fontFamily: {
      'bebas': ['Bebas Neue', 'sans-serif'],
      'sabon': ['Sabon Bold', 'sans-serif'],
      'recoleta-black': ['Recoleta Black', 'sans-serif'],
      'recoleta-light': ['Recoleta Light', 'sans-serif'],
      'recoleta-bold': ['Recoleta Bold', 'sans-serif'],
      'recoleta-medium': ['Recoleta Medium', 'sans-serif'],
      'recoleta-regular': ['Recoleta Regular', 'sans-serif']
    },
    
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-upright': {
          'text-orientation': 'upright'
        },
        '.writing-vertical': {
          'writing-mode': 'vertical-rl'
        }
      }
      addUtilities(newUtilities, ['responsive'])
    })
  ],
}
