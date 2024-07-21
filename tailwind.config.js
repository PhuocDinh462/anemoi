/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      inset: {
        "28rem": "28rem",
      },
      colors: {
        "regal-blue": "rgba(40, 178, 230, 1)",
      },
      dropShadow: {
        logo: ["0px 0px 30px rgba(18, 146, 214, 1)", "0px 0px 30px rgba(18, 146, 214, 1)"],
        slogan: ["0 0 20px #1191d6", "0 0 20px #1191d6", "0 0 20px #1191d6"],
      },
      height: {
        225: "56.3rem",
      },
      width: {
        100: "25rem",
      },
      spacing: {
        "1440px": "1440px",
      },
    },
    screens: {
      sm: "699px",
      md: "899px",
      xl: "1280px",
      "2xl": "1600px",
    },
  },
  plugins: [],
};
