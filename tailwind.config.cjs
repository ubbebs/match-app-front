/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      transitionDuration: {
        0: '0',
      },
    },
  },
  plugins: [],
}
