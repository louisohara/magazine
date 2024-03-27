/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    // this is where you can save variables
    extend: {
      colors: {
        black: "#010101",
        white: "#f1f1f1",
        grey: "#B2B2B2",
      },
    },
  },
  plugins: [],
};
