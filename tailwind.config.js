const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#202225',
        'secondary': '#5865f2',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f5d75',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedf2',
          100: '#f2f3f5',
        }
      },
    },
  },
  plugins: [],
}