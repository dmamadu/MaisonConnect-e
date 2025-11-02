/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','Helvetica Neue','Arial','sans-serif']
      },
      colors:{
        ink: "#111113",
        gray1:"#1d1d1f",
        gray2:"#6e6e73"
      }
    }
  },
  plugins: [],
}
