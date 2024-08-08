/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-100": "rgba(40, 178, 230, 1)",
        "cb-blue": "rgba(65, 141, 204, .5)", // Character box
      },
      dropShadow: {
        logo: ["0px 0px 30px rgba(18, 146, 214, 1)", "0px 0px 30px rgba(18, 146, 214, 1)"],
        slogan: ["0 0 20px #1191d6", "0 0 20px #1191d6", "0 0 20px #1191d6"],
        text: ["0px 0px 4px #1688ca"],
      },
      width: {
        100: "25rem",
      },
      backgroundImage: {
        "main-bg": "url('@assets/images/fv_main_bg.png')",
        "main-bg-sp": "url('@assets/images/fv_main_bg_sp.png')",
        "intro-bg": "url('@assets/images/intro_bg.jpg')",
        "intro-leaf-1": "url('@assets/images/intro_leaf_1.png')",
        "intro-leaf-2": "url('@assets/images/intro_leaf_2.png')",
        "intro-leaf-3": "url('@assets/images/intro_leaf_3.png')",
        "story-bg": "url('@assets/images/story_bg.jpg')",
        "story-leaf-1": "url('@assets/images/story_leaf_1.png')",
        "story-leaf-2": "url('@assets/images/story_leaf_2.png')",
        "story-leaf-3": "url('@assets/images/story_leaf_3.png')",
        "character-bg": "url('@assets/images/character_bg.jpg')",
        "character-bg-sp": "url('@assets/images/character_bg_sp.jpg')",
        "character-leaf-1": "url('@assets/images/character_leaf_1.png')",
        "character-leaf-2": "url('@assets/images/character_leaf_2.png')",
        "character-leaf-3": "url('@assets/images/character_leaf_3.png')",
        character_border: "url('@assets/images/character_border.png')",
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
        charaAnime: {
          "0%": { transform: "translateY(-100px)", rotate: "-10deg", opacity: "0" },
          "100%": { transform: "translateY(0)", rotate: "0deg", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeAnime: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        pathMove: "pathMove 2s infinite",
        fadeDown: "fadeDown 2.5s",
        charaAnime: "charaAnime 1s",
        fadeIn: "fadeIn 1s",
        fadeUp: "fadeUp 2s",
        fadeAnime: "fadeAnime 1s",
      },
    },
    screens: {
      "2xs": "349px",
      xs: "499px",
      sm: "699px",
      bm: "799px",
      md: "899px",
      lg: "1280px",
      xl: "1600px",
    },
  },
  plugins: [],
};
