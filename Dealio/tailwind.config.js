/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        mons: ['Montserrat'],
        pop: ['Poppins'],
        geo: ['Geologica'],
      },
    },
  },
  plugins: [],
}

