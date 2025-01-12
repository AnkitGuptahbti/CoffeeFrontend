/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#967259",
        secondary: "#FFD700",
        tertiary: "#FFA500",
        buttonBg: "#000",
        buttonTextColor: "#FFF",
        buttonHover: "#005555",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      container: {
        center: true,
        padding: {
          default: "1rem", //16px
          sm: "2rem",
        },
      },
      keyframes: {
        slideTop: {
          "0%": {
            left: "0%",
          },
          "100%": { left: "50%" },
        },
        slideBottom: {
          "0%": { right: "0%" },
          "100%": { right: "50% " },
        },
      },
      animation: {
        "slide-top": "slideTop 1s ease-out forwards",
        "slide-bottom": "slideBottom 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
