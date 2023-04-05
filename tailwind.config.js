/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Alkatra':'Alkatra, cursive'
    },
    extend: {
      colors:{
        nima:'#D8D8D8',
        Newgreen:'#27E1C1',
        Newblue:'#0081B4',
        dark:{
          default:'#010101',
          100:'#0a0b0e',
          200:'#16181b',
          500:'#0f1115',
          700:'#202125'
        },
      },
      boxShadow: {
        'lightShadow': '0 0 10px #313131',
        'darkShadow':'5px 5px 10px #0a0c0e,-5px -5px 10px #14161c'
      }
    },
  },
  plugins: [],
}
