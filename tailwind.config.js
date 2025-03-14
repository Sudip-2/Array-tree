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
        loginBtnClr:'#8129D9',
        responsiveNavbarBgClr:"rgb(67, 230, 96)",
        responsiveNavbartextClr:"rgb(37, 79, 26)",
        secondPageBgClr:"rgb(233, 192, 233)",
        secondPageTextClr:"rgb(80, 34, 116)",
        ThirdPageBgClr:"#780016",
        ThirdPagetextClr:"#E9C0E9",
        FooterBtnClr:"rgb(210, 232, 35)",
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

