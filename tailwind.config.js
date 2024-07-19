/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      inset: {
        "28rem": "28rem",
      },
    },
    screens: {
      sm: "699px",
      md: "899px",
    },
  },
  plugins: [],
};
