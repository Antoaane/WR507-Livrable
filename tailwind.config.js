/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': 'rgba(137, 35, 57, 1)',
        'dark': 'rgba(83, 27, 39, 1)',
        'dark-gray': 'rgba(47, 45, 45, 1)',
        'beige': 'rgba(255, 251, 244, 1)',
      }
    },
    fontFamily: {
      'lexend': ["Lexend", "sans-serif"], 
    },
  },
  plugins: [],
}

