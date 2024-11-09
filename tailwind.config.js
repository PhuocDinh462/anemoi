/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue-100': 'rgba(40, 178, 230, 1)',
        'cb-blue': 'rgba(65, 141, 204, .5)', // Character box
        'custom-black-900': '#231815'
      },
      dropShadow: {
        logo: ['0 0 30px rgba(18, 146, 214, 1)', '0 0 30px rgba(18, 146, 214, 1)'],
        slogan: ['0 0 20px #1191d6', '0 0 20px #1191d6', '0 0 20px #1191d6'],
        'chara-text-box': ['0 0 4px #1688ca'],
        'movie-title': ['0 0 50px #fff', '0 0 50px #fff', '0 0 50px #fff']
      },
      width: {
        100: '25rem'
      },
      backgroundImage: {
        'main-bg': "url('@images/fv_main_bg.webp')",
        'main-bg-sp': "url('@images/fv_main_bg_sp.webp')",
        'intro-bg': "url('@images/intro_bg.webp')",
        'story-bg': "url('@images/story_bg.webp')",
        'character-bg': "url('@images/character_bg.webp')",
        'character-bg-sp': "url('@images/character_bg_sp.webp')",
        character_border: "url('@images/character_border.webp')",
        close_icon: "url('@images/close_icon.webp')"
      },
      fontFamily: {
        seasons: ['the-seasons', 'sans-serif'],
        mincho: ['Shippori Mincho', 'sans-serif'],
        thomasita: ['thomasita', 'sans-serif'],
        mongolia: ['mongolia', 'sans-serif'],
        voyage: ['voyage', 'sans-serif']
      },
      keyframes: {
        pathMove: {
          '0%': { transform: 'translateY(0%)', opacity: '0', height: '0' },
          '100%': { transform: 'translateY(150%)', opacity: '1', height: '30px' }
        },
        fadeDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        charaAnime: {
          '0%': { transform: 'translateY(-100px)', rotate: '-10deg', opacity: '0' },
          '100%': { transform: 'translateY(0)', rotate: '0deg', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeAnime: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        blurInAnime: {
          '0%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(8px)' }
        },
        dropDiagonal: {
          '0%': { transform: 'translate(-200px, -100px)' },
          '100%': { transform: 'translate(0, 0)' }
        }
      },
      animation: {
        pathMove: 'pathMove 2s infinite',
        fadeDown: 'fadeDown 2.5s',
        charaAnime: 'charaAnime 1s',
        fadeIn: 'fadeIn 1s',
        fadeUp: 'fadeUp 2s',
        fadeAnime: 'fadeAnime 1s',
        blurInAnime: 'blurInAnime 1s',
        dropDiagonal: 'dropDiagonal .3s',
        'spin-slow': 'spin 5s linear infinite'
      }
    },
    screens: {
      '2xs': '349px',
      xs: '499px',
      sm: '699px',
      bm: '799px',
      md: '899px',
      lg: '1280px',
      xl: '1600px'
    }
  },
  plugins: []
};
