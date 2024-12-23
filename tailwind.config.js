/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
    },
  },
  plugins: [],
}

