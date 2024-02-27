/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        vazirmatn:'Vazirmatn'
      },
      colors:{
        blue:{
          650:"#0060ff",
          850:"#16202C"
        }
      }
    },
  },
  plugins: [],
}

