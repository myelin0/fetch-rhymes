/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        contrastColor:'#1CD948',
        brightRed:'hsl(12,88%,59%)',
        brightRedLight:'hsl(12,88%,69%)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
