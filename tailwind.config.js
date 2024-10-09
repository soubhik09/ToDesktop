/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#3238f2',
      }
    },
  },
  plugins: [],
}

