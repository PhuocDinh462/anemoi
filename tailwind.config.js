/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      backgroundImage: {
        "cover-bg": "url('./src/assets/images/fv_main_bg.png')",
        "cover-bg-sp": "url('./src/assets/images/fv_main_bg_sp.png')",
      },
      fontFamily: {
        seasons: ['"the-seasons"', "sans-serif"],
        tsukumin: ['"fot-tsukumin"', "sans-serif"],
      },
    },
    screens: {
      ss: "499px",
      sm: "699px",
      bm: "799px",
      md: "899px",
      xl: "1280px",
      "2xl": "1600px",
    },
  },
  plugins: [],
};
