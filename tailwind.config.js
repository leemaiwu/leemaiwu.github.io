/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        handwriting: ['"Handwriting Halimun"', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(69, 69, 69)',
        secondary: 'rgba(226, 226, 226, 0.572)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
};