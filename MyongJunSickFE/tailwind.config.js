/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './App.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'BrandColor/Default': '#071648',
      'FontColor/Default/01': '#000000',
      'FontColor/Default/02': '#ffffff',
      'FontColor/DarkGray/01': '#7b7b7b',
      'FontColor/LightGray/01': '#ababab',
      'FontColor/LightGray/02': '#c0c1c6',
      'FontColor/LightGray/03': '#d9d9d9',
      'LineColor/LightGray/01': '#dbdbdb',
    },
  },
  plugins: [],
};
