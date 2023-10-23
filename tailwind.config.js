/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#ff5722'
      },
      backgroundColor : {
        'primary' :'#ff5722'
      },
      borderColor : {
        'primary' : '#ff5722'
      },
      screens : {
        'xs' : '300px'
      }
    },
  },
  plugins: [],
}

