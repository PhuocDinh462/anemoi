/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-100": "rgba(40, 178, 230, 1)",
      },
      dropShadow: {
        logo: ["0px 0px 30px rgba(18, 146, 214, 1)", "0px 0px 30px rgba(18, 146, 214, 1)"],
        slogan: ["0 0 20px #1191d6", "0 0 20px #1191d6", "0 0 20px #1191d6"],
      },
      width: {
        100: "25rem",
      },
      backgroundImage: {
        "main-bg": "url('@assets/images/fv_main_bg.png')",
        "main-bg-sp": "url('@assets/images/fv_main_bg_sp.png')",
        "intro-bg": "url('@assets/images/intro_bg.jpg')",
        "story-bg": "url('@assets/images/story_bg.jpg')",
      },
      fontFamily: {
        seasons: ['"the-seasons"', "sans-serif"],
        tsukumin: ['"fot-tsukumin"', "sans-serif"],
        thomasita: ['"thomasita"', "sans-serif"],
      },
      keyframes: {
        pathMove: {
          "0%": { transform: "translateY(0%)", opacity: "0", height: "0" },
          "100%": { transform: "translateY(150%)", opacity: "1", height: "30px" },
        },
        fadeDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        pathMove: "pathMove 2s infinite",
        fadeDown: "fadeDown 2.5s",
      },
    },
    screens: {
      xs: "499px",
      sm: "699px",
      bm: "799px",
      md: "899px",
      xl: "1280px",
      "2xl": "1600px",
    },
  },
  plugins: [],
};
