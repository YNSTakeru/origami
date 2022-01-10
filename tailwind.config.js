module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        origami: "url('./origami.jpeg')",
      },
      width: {
        origami: "4752px",
      },
      maxWidth: {
        origami: "4752px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
