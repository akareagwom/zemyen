/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/zem5.jpg')",
      },
      backgroundColor: {
        'brown': "#CC9F5B"
      },
      fontSize:{
        'tiny':"10px",
        'medium':"14px"
      },
      width:{
        'sized': "745px"
      },
      height:{
        'sized': "745px"
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
