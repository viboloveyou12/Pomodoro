/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/styles/**", "./src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#F7F7F7',
        'orange': '#FF6929',
        'dark-gray': '#424242'
      },
    },
  },
  plugins: [],
}

