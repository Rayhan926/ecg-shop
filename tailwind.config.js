/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        stonecutter: ['Stonecutter', 'sans-serif'],
      },
      colors: {
        'body-gray': '#F4F4F4',
      },
    },
  },
  plugins: [],
};
