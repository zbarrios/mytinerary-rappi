/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display : ['Magilio', 'sans-serif'],
        custom: ['"Work Sans"', 'sans-serif'],	
      },
    },
  },
  plugins: [],
}
