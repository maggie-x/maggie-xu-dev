module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mint: {
          light: "#9cffe2",
          DEFAULT: "#6effd4",
          dark: "#17ffba",
        },
        mango: "#ffc143",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
