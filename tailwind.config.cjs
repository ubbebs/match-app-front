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
      fontFamily: {
        bowlbyonesc: ['Bowlby One SC', 'cursive'],
      },
      colors: {
        'layout-pink': '#D3006F',
        'layout-dark': '#0D152B',
      },
      boxShadow: {
        'button-glow': '0px 4px 20px 0px rgba(212, 0, 111, 0.5)',
      },
    },
  },
  plugins: [],
}
