module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width: {
      0: "0px",
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      8: "2rem", // 32px
      16: "4rem", // 64px
      "9/10": "90%",
      full: "100%",
      auto: "auto",
      screen: "100vw",
    },
    height: {
      0: "0px",
      4: "1rem", // 16px
      8: "2rem", // 32px
      16: "4rem", // 64px
      17.5: "4.375rem", // 70px
      20: "5rem", // 80px
      24: "6rem", // 96px
      full: "100%",
      auto: "auto",
      screen: "100vh",
    },
    fontSize: {
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "2.25xl": "1.563rem", // 26px
      "2.5xl": "1.625rem", // 26px
      "3xl": "1.75rem", // 28px
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
}
