/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBLue: "rgba(40, 113, 238, 1)",
        lightGreen: "rgba(78, 204, 93, 1)",
        light: "rgba(245, 245, 245, 1)",
        gray: "rgba(40, 55, 57, 1)",
      },
      fontFamily: {
        Bartina: ["Bartina", "sans"],
        FuturaDemiCTT: ["FuturaDemiCTT", "sans"],
      },
      borderRadius: {
        inputRounded: "40px",
      },
    },
  },
  plugins: [],
};
