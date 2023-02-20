/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'navy': '#0a192f',
        'light-navy': '#112240'
      }
    },
    fontFamily: {
      'bebas': ['Bebas Neue', 'sans-serif'],
      'sabon': ['Sabon Bold', 'sans-serif'],
      'recoleta-black': ['Recoleta Black', 'sans-serif'],
      'recoleta-light': ['Recoleta Light', 'sans-serif']
    },
    
  },
  plugins: [],
}
