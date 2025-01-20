/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        main:["Space Grotesk", "sans-serif"],
        brand:[ "Special Elite", "system-ui"]
      },
      colors:{
        primaryColor: "#fefae0",
        navbarColor: "#e9edc9",
        bgColor: "#ccd5ae",
        secondaryColor: "#faedcd",
        accentColor: "#d4a373",
        textColor: "#a28162",
        darkColor: "#6c584c",
        darkGreenColor: "#a08f77",
        deleteColor: "#de4f4f",
        pageBgColor: "#fffcf7",
        rouselColor: "#f8961e",
        rouselColor2: "#edc4b3",
      },

      fontSize: {
        s: ["16px", "20px"],
        l: ["26px", "28px"],
      },
      
      screens:{
        tablet: "640px",
        special: "900px",
      }
    },
  },
  plugins: [],
}

