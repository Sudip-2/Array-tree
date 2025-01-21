/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navLinkGrey:'rgb(103, 107, 95)',
        navHoverGrey:'rgb(239, 240, 236)',
        headingTextClr:'#D2E823',
        claimBtn:'#E9C0E9',
        landingPage:"#254F1A",
        loginBtnClr:'#8129D9'
      },
      fontFamily:{
        headingFont:['Montserrat','sans-serif']
      },
      screens: {
        "aspect-16/9": { raw: "(aspect-ratio: 16/9)" },
        "aspect-16/10": { raw: "(aspect-ratio: 16/10)" },
      },
    },
  },
  plugins: [],
}

