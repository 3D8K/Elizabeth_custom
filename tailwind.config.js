/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./sections/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s linear",
        fadeOut: "fadeOut 0.3s linear",
        imgFade: "fadeIn 0.15s ease-in-out",
        popUpIn: "popUp 0.15s linear",
        popUpOut: "popUpOut 0.2s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        popUpOut: {
          "0%": { scale: "100%", bottom: "0" },
          "100%": { scale: "70%", bottom: "-50px" },
        },
        popUp: {
          "0%": { scale: "90%", bottom: "-50px" },
          "100%": { scale: "100%", bottom: "0" },
        },
      },
    },
  },
  plugins: [],
};
