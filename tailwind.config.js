/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
    },
    extend: {
      colors: {
        almostBlack: "hsl(0, 0%, 8%)",
        mediumGray: "hsl(0, 0%, 41%)",
      },
      boxShadow: {
        "3xl": "0 0 50px -10px rgba(0,0,0, 0.3)",
      },
    },
  },
  plugins: [],
};
