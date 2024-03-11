/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#051367',
        secondary: '#2D31FA',
        tertiary: '#5D8BF4',
        accent: '#DFF6FF',
      },
    },
  },
  plugins: [],
};
