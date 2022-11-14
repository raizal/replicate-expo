/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './<custom directory>/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bold: ['Inter_700Bold'],
        regular: ['Inter_400Regular'],
        light: ['Inter_300Light'],
        thin: ['Inter_100Thin'],
        medium: ['Inter_500Medium'],
        semibold: ['Inter_600SemiBold'],
      },
    },
  },
  plugins: [],
};
