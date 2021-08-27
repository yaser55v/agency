module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Alegreya Sans SC"],
      },
      colors: {
        slate: "#212121",
        slateLight: "#484848",
        slateDark: "#000000",
        softGold: "#F5D197",
        softGoldLight: "#ffffc8",
        softGoldDark: "#c1a068",
      },
      animation: {
        heroTitle: "heroTitle 1.7s cubic-bezier(0.215, 0.61, 0.355, 1) both",
      },
      keyframes: {
        heroTitle: {
          "0%": { "letter-spacing": "-0.5em ", opacity: 0 },
          "40%": { opacity: 0.6 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
