/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './src/**/*.js'],
  theme: {
    extend: {

      fontFamily: {
        rubik: ['Rubik'],
      },
      fontWeight: {
        extra_light: 200,
        light: 400,
        regular: 500,
        bold: 700,
        extra_bold: 800
      },
    },
  },
  plugins: [],
}

