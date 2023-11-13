/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        one: "#053260",
        two: "#00A4FF",
        three: "#00A4FF",
      },
      height: {
        98: "420px",
        100: "460px",
        102: "500px",
        104: "540px",
        106: "580px",
      },
    },
  },
  plugins: [],
};
