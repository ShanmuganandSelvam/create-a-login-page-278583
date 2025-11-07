/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e6f1fe',
          200: '#cce3fd',
          300: '#99c7fb',
          400: '#66abf9',
          500: '#338ff7',
          600: '#0073f5',
          700: '#005cc4',
          800: '#004493',
          900: '#002e62',
        }
      },
      boxShadow: {
        'input': '0 0 0 2px rgba(0, 115, 245, 0.2)',
      }
    },
  },
  plugins: [],
}