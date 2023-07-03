/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      primaryBlue: "#2a2575",
      primaryPurple: "#A16BC4",
      primaryYellow: "#FFD600",
      SecondaryGray: "#EEE8F6"
    },
    fontFamily: {
      heading: ["Montserrat"],
      
    }

  
    
    },
  },
  plugins: [],
}

