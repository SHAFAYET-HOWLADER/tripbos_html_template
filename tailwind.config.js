/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#082032',
      'secondary': '#F4F4F4',
      'accent': '#FF6B61',
      'white': '#FFFFFF',
      'shadow_white':'#E5E5E5',
      'paragraph': '#6D7378',
      'paragraph_two': '#5E5E68',
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
