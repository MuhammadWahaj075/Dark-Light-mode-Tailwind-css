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
      SecondaryGray: "#EEE8F6",
      bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
      content: 'hsl(var(--color-content) / <alpha-value>)',
      bkglight: 'hsl(var(--color-bkgLight) / <alpha-value>)',
      contentLight: 'hsl(var(--color-contentLight) / <alpha-value>)'
    },
    fontFamily: {
      heading: ["Montserrat"],
      
    }

  
    
    },
  },
  plugins: [],
}

